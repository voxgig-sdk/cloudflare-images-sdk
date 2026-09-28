<?php
declare(strict_types=1);

// CloudflareImages SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareImagesSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareImagesUtility();
        $this->_utility = $utility;

        $config = CloudflareImagesConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareImagesHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareImagesHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareImagesFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareImagesFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareImagesUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareImagesHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareImagesHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareImagesHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareImagesSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareImagesError($op . "_allow",
                "CloudflareImagesSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareImagesHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareImagesHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareImagesError("graphql_error",
                "CloudflareImagesSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_cloudflare_image = null;

    // Canonical facade: $client->CloudflareImage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cloudflare_image()
    // resolves here too.
    public function CloudflareImage($data = null)
    {
        require_once __DIR__ . '/entity/cloudflare_image_entity.php';
        if ($data === null) {
            if ($this->_cloudflare_image === null) {
                $this->_cloudflare_image = new CloudflareImageEntity($this, null);
            }
            return $this->_cloudflare_image;
        }
        return new CloudflareImageEntity($this, $data);
    }


    private $_image = null;

    // Canonical facade: $client->Image()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->image()
    // resolves here too.
    public function Image($data = null)
    {
        require_once __DIR__ . '/entity/image_entity.php';
        if ($data === null) {
            if ($this->_image === null) {
                $this->_image = new ImageEntity($this, null);
            }
            return $this->_image;
        }
        return new ImageEntity($this, $data);
    }


    private $_images_deleted = null;

    // Canonical facade: $client->ImagesDeleted()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_deleted()
    // resolves here too.
    public function ImagesDeleted($data = null)
    {
        require_once __DIR__ . '/entity/images_deleted_entity.php';
        if ($data === null) {
            if ($this->_images_deleted === null) {
                $this->_images_deleted = new ImagesDeletedEntity($this, null);
            }
            return $this->_images_deleted;
        }
        return new ImagesDeletedEntity($this, $data);
    }


    private $_images_image_direct_upload = null;

    // Canonical facade: $client->ImagesImageDirectUpload()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_image_direct_upload()
    // resolves here too.
    public function ImagesImageDirectUpload($data = null)
    {
        require_once __DIR__ . '/entity/images_image_direct_upload_entity.php';
        if ($data === null) {
            if ($this->_images_image_direct_upload === null) {
                $this->_images_image_direct_upload = new ImagesImageDirectUploadEntity($this, null);
            }
            return $this->_images_image_direct_upload;
        }
        return new ImagesImageDirectUploadEntity($this, $data);
    }


    private $_images_image_key_response_collection = null;

    // Canonical facade: $client->ImagesImageKeyResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_image_key_response_collection()
    // resolves here too.
    public function ImagesImageKeyResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/images_image_key_response_collection_entity.php';
        if ($data === null) {
            if ($this->_images_image_key_response_collection === null) {
                $this->_images_image_key_response_collection = new ImagesImageKeyResponseCollectionEntity($this, null);
            }
            return $this->_images_image_key_response_collection;
        }
        return new ImagesImageKeyResponseCollectionEntity($this, $data);
    }


    private $_images_image_response_single = null;

    // Canonical facade: $client->ImagesImageResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_image_response_single()
    // resolves here too.
    public function ImagesImageResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/images_image_response_single_entity.php';
        if ($data === null) {
            if ($this->_images_image_response_single === null) {
                $this->_images_image_response_single = new ImagesImageResponseSingleEntity($this, null);
            }
            return $this->_images_image_response_single;
        }
        return new ImagesImageResponseSingleEntity($this, $data);
    }


    private $_images_image_variant_flat = null;

    // Canonical facade: $client->ImagesImageVariantFlat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_image_variant_flat()
    // resolves here too.
    public function ImagesImageVariantFlat($data = null)
    {
        require_once __DIR__ . '/entity/images_image_variant_flat_entity.php';
        if ($data === null) {
            if ($this->_images_image_variant_flat === null) {
                $this->_images_image_variant_flat = new ImagesImageVariantFlatEntity($this, null);
            }
            return $this->_images_image_variant_flat;
        }
        return new ImagesImageVariantFlatEntity($this, $data);
    }


    private $_images_image_variant_list = null;

    // Canonical facade: $client->ImagesImageVariantList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_image_variant_list()
    // resolves here too.
    public function ImagesImageVariantList($data = null)
    {
        require_once __DIR__ . '/entity/images_image_variant_list_entity.php';
        if ($data === null) {
            if ($this->_images_image_variant_list === null) {
                $this->_images_image_variant_list = new ImagesImageVariantListEntity($this, null);
            }
            return $this->_images_image_variant_list;
        }
        return new ImagesImageVariantListEntity($this, $data);
    }


    private $_images_image_variant_simple = null;

    // Canonical facade: $client->ImagesImageVariantSimple()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_image_variant_simple()
    // resolves here too.
    public function ImagesImageVariantSimple($data = null)
    {
        require_once __DIR__ . '/entity/images_image_variant_simple_entity.php';
        if ($data === null) {
            if ($this->_images_image_variant_simple === null) {
                $this->_images_image_variant_simple = new ImagesImageVariantSimpleEntity($this, null);
            }
            return $this->_images_image_variant_simple;
        }
        return new ImagesImageVariantSimpleEntity($this, $data);
    }


    private $_images_images_list = null;

    // Canonical facade: $client->ImagesImagesList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_images_list()
    // resolves here too.
    public function ImagesImagesList($data = null)
    {
        require_once __DIR__ . '/entity/images_images_list_entity.php';
        if ($data === null) {
            if ($this->_images_images_list === null) {
                $this->_images_images_list = new ImagesImagesListEntity($this, null);
            }
            return $this->_images_images_list;
        }
        return new ImagesImagesListEntity($this, $data);
    }


    private $_images_images_stat = null;

    // Canonical facade: $client->ImagesImagesStat()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_images_stat()
    // resolves here too.
    public function ImagesImagesStat($data = null)
    {
        require_once __DIR__ . '/entity/images_images_stat_entity.php';
        if ($data === null) {
            if ($this->_images_images_stat === null) {
                $this->_images_images_stat = new ImagesImagesStatEntity($this, null);
            }
            return $this->_images_images_stat;
        }
        return new ImagesImagesStatEntity($this, $data);
    }


    private $_images_metadata_key = null;

    // Canonical facade: $client->ImagesMetadataKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_metadata_key()
    // resolves here too.
    public function ImagesMetadataKey($data = null)
    {
        require_once __DIR__ . '/entity/images_metadata_key_entity.php';
        if ($data === null) {
            if ($this->_images_metadata_key === null) {
                $this->_images_metadata_key = new ImagesMetadataKeyEntity($this, null);
            }
            return $this->_images_metadata_key;
        }
        return new ImagesMetadataKeyEntity($this, $data);
    }


    private $_images_sourcingkit_connectivity_check = null;

    // Canonical facade: $client->ImagesSourcingkitConnectivityCheck()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_sourcingkit_connectivity_check()
    // resolves here too.
    public function ImagesSourcingkitConnectivityCheck($data = null)
    {
        require_once __DIR__ . '/entity/images_sourcingkit_connectivity_check_entity.php';
        if ($data === null) {
            if ($this->_images_sourcingkit_connectivity_check === null) {
                $this->_images_sourcingkit_connectivity_check = new ImagesSourcingkitConnectivityCheckEntity($this, null);
            }
            return $this->_images_sourcingkit_connectivity_check;
        }
        return new ImagesSourcingkitConnectivityCheckEntity($this, $data);
    }


    private $_images_sourcingkit_migration = null;

    // Canonical facade: $client->ImagesSourcingkitMigration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_sourcingkit_migration()
    // resolves here too.
    public function ImagesSourcingkitMigration($data = null)
    {
        require_once __DIR__ . '/entity/images_sourcingkit_migration_entity.php';
        if ($data === null) {
            if ($this->_images_sourcingkit_migration === null) {
                $this->_images_sourcingkit_migration = new ImagesSourcingkitMigrationEntity($this, null);
            }
            return $this->_images_sourcingkit_migration;
        }
        return new ImagesSourcingkitMigrationEntity($this, $data);
    }


    private $_images_sourcingkit_migration_list = null;

    // Canonical facade: $client->ImagesSourcingkitMigrationList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_sourcingkit_migration_list()
    // resolves here too.
    public function ImagesSourcingkitMigrationList($data = null)
    {
        require_once __DIR__ . '/entity/images_sourcingkit_migration_list_entity.php';
        if ($data === null) {
            if ($this->_images_sourcingkit_migration_list === null) {
                $this->_images_sourcingkit_migration_list = new ImagesSourcingkitMigrationListEntity($this, null);
            }
            return $this->_images_sourcingkit_migration_list;
        }
        return new ImagesSourcingkitMigrationListEntity($this, $data);
    }


    private $_images_sourcingkit_migration_log_list = null;

    // Canonical facade: $client->ImagesSourcingkitMigrationLogList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_sourcingkit_migration_log_list()
    // resolves here too.
    public function ImagesSourcingkitMigrationLogList($data = null)
    {
        require_once __DIR__ . '/entity/images_sourcingkit_migration_log_list_entity.php';
        if ($data === null) {
            if ($this->_images_sourcingkit_migration_log_list === null) {
                $this->_images_sourcingkit_migration_log_list = new ImagesSourcingkitMigrationLogListEntity($this, null);
            }
            return $this->_images_sourcingkit_migration_log_list;
        }
        return new ImagesSourcingkitMigrationLogListEntity($this, $data);
    }


    private $_images_sourcingkit_migration_progress = null;

    // Canonical facade: $client->ImagesSourcingkitMigrationProgress()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_sourcingkit_migration_progress()
    // resolves here too.
    public function ImagesSourcingkitMigrationProgress($data = null)
    {
        require_once __DIR__ . '/entity/images_sourcingkit_migration_progress_entity.php';
        if ($data === null) {
            if ($this->_images_sourcingkit_migration_progress === null) {
                $this->_images_sourcingkit_migration_progress = new ImagesSourcingkitMigrationProgressEntity($this, null);
            }
            return $this->_images_sourcingkit_migration_progress;
        }
        return new ImagesSourcingkitMigrationProgressEntity($this, $data);
    }


    private $_images_sourcingkit_migration_single = null;

    // Canonical facade: $client->ImagesSourcingkitMigrationSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_sourcingkit_migration_single()
    // resolves here too.
    public function ImagesSourcingkitMigrationSingle($data = null)
    {
        require_once __DIR__ . '/entity/images_sourcingkit_migration_single_entity.php';
        if ($data === null) {
            if ($this->_images_sourcingkit_migration_single === null) {
                $this->_images_sourcingkit_migration_single = new ImagesSourcingkitMigrationSingleEntity($this, null);
            }
            return $this->_images_sourcingkit_migration_single;
        }
        return new ImagesSourcingkitMigrationSingleEntity($this, $data);
    }


    private $_images_sourcingkit_source = null;

    // Canonical facade: $client->ImagesSourcingkitSource()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_sourcingkit_source()
    // resolves here too.
    public function ImagesSourcingkitSource($data = null)
    {
        require_once __DIR__ . '/entity/images_sourcingkit_source_entity.php';
        if ($data === null) {
            if ($this->_images_sourcingkit_source === null) {
                $this->_images_sourcingkit_source = new ImagesSourcingkitSourceEntity($this, null);
            }
            return $this->_images_sourcingkit_source;
        }
        return new ImagesSourcingkitSourceEntity($this, $data);
    }


    private $_images_sourcingkit_source_list = null;

    // Canonical facade: $client->ImagesSourcingkitSourceList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_sourcingkit_source_list()
    // resolves here too.
    public function ImagesSourcingkitSourceList($data = null)
    {
        require_once __DIR__ . '/entity/images_sourcingkit_source_list_entity.php';
        if ($data === null) {
            if ($this->_images_sourcingkit_source_list === null) {
                $this->_images_sourcingkit_source_list = new ImagesSourcingkitSourceListEntity($this, null);
            }
            return $this->_images_sourcingkit_source_list;
        }
        return new ImagesSourcingkitSourceListEntity($this, $data);
    }


    private $_images_sourcingkit_source_single = null;

    // Canonical facade: $client->ImagesSourcingkitSourceSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->images_sourcingkit_source_single()
    // resolves here too.
    public function ImagesSourcingkitSourceSingle($data = null)
    {
        require_once __DIR__ . '/entity/images_sourcingkit_source_single_entity.php';
        if ($data === null) {
            if ($this->_images_sourcingkit_source_single === null) {
                $this->_images_sourcingkit_source_single = new ImagesSourcingkitSourceSingleEntity($this, null);
            }
            return $this->_images_sourcingkit_source_single;
        }
        return new ImagesSourcingkitSourceSingleEntity($this, $data);
    }


    private $_migration = null;

    // Canonical facade: $client->Migration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->migration()
    // resolves here too.
    public function Migration($data = null)
    {
        require_once __DIR__ . '/entity/migration_entity.php';
        if ($data === null) {
            if ($this->_migration === null) {
                $this->_migration = new MigrationEntity($this, null);
            }
            return $this->_migration;
        }
        return new MigrationEntity($this, $data);
    }


    private $_source = null;

    // Canonical facade: $client->Source()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->source()
    // resolves here too.
    public function Source($data = null)
    {
        require_once __DIR__ . '/entity/source_entity.php';
        if ($data === null) {
            if ($this->_source === null) {
                $this->_source = new SourceEntity($this, null);
            }
            return $this->_source;
        }
        return new SourceEntity($this, $data);
    }


    private $_v1n = null;

    // Canonical facade: $client->V1n()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->v1n()
    // resolves here too.
    public function V1n($data = null)
    {
        require_once __DIR__ . '/entity/v1n_entity.php';
        if ($data === null) {
            if ($this->_v1n === null) {
                $this->_v1n = new V1nEntity($this, null);
            }
            return $this->_v1n;
        }
        return new V1nEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareImagesSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
