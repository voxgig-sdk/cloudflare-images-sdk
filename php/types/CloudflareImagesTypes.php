<?php
declare(strict_types=1);

// Typed models for the CloudflareImages SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** CloudflareImage entity data model. */
class CloudflareImage
{
}

/** Request payload for CloudflareImage#load. */
class CloudflareImageLoadMatch
{
    public string $account_id;
    public string $v1_id;
}

/** Image entity data model. */
class Image
{
    public ?string $etag = null;
    public array $flows;
    public float $version;
}

/** Request payload for Image#load. */
class ImageLoadMatch
{
    public string $zone_id;
}

/** Request payload for Image#update. */
class ImageUpdateData
{
    public string $zone_id;
    public ?string $etag = null;
    public ?array $flows = null;
    public ?float $version = null;
}

/** ImagesDeleted entity data model. */
class ImagesDeleted
{
}

/** Request payload for ImagesDeleted#remove. */
class ImagesDeletedRemoveMatch
{
    public string $account_id;
    public string $variant_id;
}

/** ImagesImageDirectUpload entity data model. */
class ImagesImageDirectUpload
{
    public ?string $expiry = null;
}

/** Request payload for ImagesImageDirectUpload#create. */
class ImagesImageDirectUploadCreateData
{
    public string $account_id;
    public ?string $expiry = null;
}

/** ImagesImageKeyResponseCollection entity data model. */
class ImagesImageKeyResponseCollection
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for ImagesImageKeyResponseCollection#list. */
class ImagesImageKeyResponseCollectionListMatch
{
    public string $account_id;
}

/** Request payload for ImagesImageKeyResponseCollection#update. */
class ImagesImageKeyResponseCollectionUpdateData
{
    public string $account_id;
    public string $signing_key_name;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for ImagesImageKeyResponseCollection#remove. */
class ImagesImageKeyResponseCollectionRemoveMatch
{
    public string $account_id;
    public string $signing_key_name;
}

/** ImagesImageResponseSingle entity data model. */
class ImagesImageResponseSingle
{
    public ?string $creator = null;
    public ?array $metadata = null;
    public ?bool $requireSignedURLs = null;
    public ?array $result = null;
}

/** Request payload for ImagesImageResponseSingle#load. */
class ImagesImageResponseSingleLoadMatch
{
    public string $account_id;
    public string $image_id;
}

/** Request payload for ImagesImageResponseSingle#create. */
class ImagesImageResponseSingleCreateData
{
    public string $account_id;
    public ?string $creator = null;
    public ?array $metadata = null;
    public ?bool $requireSignedURLs = null;
    public ?array $result = null;
}

/** Request payload for ImagesImageResponseSingle#update. */
class ImagesImageResponseSingleUpdateData
{
    public string $account_id;
    public string $image_id;
    public ?string $creator = null;
    public ?array $metadata = null;
    public ?bool $requireSignedURLs = null;
    public ?array $result = null;
}

/** ImagesImageVariantFlat entity data model. */
class ImagesImageVariantFlat
{
    public array $result;
}

/** Request payload for ImagesImageVariantFlat#load. */
class ImagesImageVariantFlatLoadMatch
{
    public string $account_id;
    public string $variant_id;
}

/** ImagesImageVariantList entity data model. */
class ImagesImageVariantList
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for ImagesImageVariantList#list. */
class ImagesImageVariantListListMatch
{
    public string $account_id;
}

/** ImagesImageVariantSimple entity data model. */
class ImagesImageVariantSimple
{
    public string $id;
    public ?bool $neverRequireSignedURLs = null;
    public array $options;
    public ?array $result = null;
}

/** Request payload for ImagesImageVariantSimple#load. */
class ImagesImageVariantSimpleLoadMatch
{
    public string $account_id;
    public string $variant_id;
}

/** Request payload for ImagesImageVariantSimple#create. */
class ImagesImageVariantSimpleCreateData
{
    public string $account_id;
    public string $id;
    public ?bool $neverRequireSignedURLs = null;
    public array $options;
    public ?array $result = null;
}

/** Request payload for ImagesImageVariantSimple#update. */
class ImagesImageVariantSimpleUpdateData
{
    public string $account_id;
    public string $variant_id;
    public ?string $id = null;
    public ?bool $neverRequireSignedURLs = null;
    public ?array $options = null;
    public ?array $result = null;
}

/** ImagesImagesList entity data model. */
class ImagesImagesList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for ImagesImagesList#load. */
class ImagesImagesListLoadMatch
{
    public string $account_id;
    public ?string $continuation_token = null;
    public ?string $creator = null;
    public ?float $per_page = null;
    public ?string $sort_order = null;
}

/** Request payload for ImagesImagesList#list. */
class ImagesImagesListListMatch
{
    public string $account_id;
    public ?string $creator = null;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** ImagesImagesStat entity data model. */
class ImagesImagesStat
{
    public ?array $result = null;
}

/** Request payload for ImagesImagesStat#load. */
class ImagesImagesStatLoadMatch
{
    public string $account_id;
}

/** ImagesMetadataKey entity data model. */
class ImagesMetadataKey
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for ImagesMetadataKey#list. */
class ImagesMetadataKeyListMatch
{
    public string $account_id;
}

/** ImagesSourcingkitConnectivityCheck entity data model. */
class ImagesSourcingkitConnectivityCheck
{
    public ?string $account = null;
    public string $bucket;
    public ?string $region = null;
    public ?array $result = null;
    public array $secret;
    public string $vendor;
}

/** Request payload for ImagesSourcingkitConnectivityCheck#load. */
class ImagesSourcingkitConnectivityCheckLoadMatch
{
    public string $account_id;
    public string $source_id;
}

/** Request payload for ImagesSourcingkitConnectivityCheck#create. */
class ImagesSourcingkitConnectivityCheckCreateData
{
    public string $account_id;
    public ?string $account = null;
    public string $bucket;
    public ?string $region = null;
    public ?array $result = null;
    public array $secret;
    public string $vendor;
}

/** ImagesSourcingkitMigration entity data model. */
class ImagesSourcingkitMigration
{
    public ?string $conflictBehaviour = null;
    public ?array $excludedContentTypes = null;
    public ?string $pathPrefix = null;
    public ?string $rootDirectory = null;
    public string $sourceId;
}

/** Request payload for ImagesSourcingkitMigration#create. */
class ImagesSourcingkitMigrationCreateData
{
    public string $account_id;
    public ?string $conflictBehaviour = null;
    public ?array $excludedContentTypes = null;
    public ?string $pathPrefix = null;
    public ?string $rootDirectory = null;
    public string $sourceId;
}

/** ImagesSourcingkitMigrationList entity data model. */
class ImagesSourcingkitMigrationList
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for ImagesSourcingkitMigrationList#list. */
class ImagesSourcingkitMigrationListListMatch
{
    public string $account_id;
    public ?int $limit = null;
    public ?int $offset = null;
}

/** ImagesSourcingkitMigrationLogList entity data model. */
class ImagesSourcingkitMigrationLogList
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for ImagesSourcingkitMigrationLogList#list. */
class ImagesSourcingkitMigrationLogListListMatch
{
    public string $account_id;
    public string $migration_id;
    public ?int $limit = null;
    public ?int $offset = null;
}

/** ImagesSourcingkitMigrationProgress entity data model. */
class ImagesSourcingkitMigrationProgress
{
    public ?array $result = null;
}

/** Request payload for ImagesSourcingkitMigrationProgress#load. */
class ImagesSourcingkitMigrationProgressLoadMatch
{
    public string $account_id;
    public string $migration_id;
}

/** ImagesSourcingkitMigrationSingle entity data model. */
class ImagesSourcingkitMigrationSingle
{
    public ?array $result = null;
}

/** Request payload for ImagesSourcingkitMigrationSingle#load. */
class ImagesSourcingkitMigrationSingleLoadMatch
{
    public string $account_id;
    public string $migration_id;
}

/** Request payload for ImagesSourcingkitMigrationSingle#update. */
class ImagesSourcingkitMigrationSingleUpdateData
{
    public string $account_id;
    public string $migration_id;
    public ?array $result = null;
}

/** ImagesSourcingkitSource entity data model. */
class ImagesSourcingkitSource
{
    public ?string $account = null;
    public string $bucket;
    public ?string $id = null;
    public string $name;
    public array $secret;
    public string $vendor;
}

/** Request payload for ImagesSourcingkitSource#create. */
class ImagesSourcingkitSourceCreateData
{
    public string $account_id;
    public ?string $account = null;
    public string $bucket;
    public ?string $id = null;
    public string $name;
    public array $secret;
    public string $vendor;
}

/** Request payload for ImagesSourcingkitSource#update. */
class ImagesSourcingkitSourceUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $account = null;
    public ?string $bucket = null;
    public ?string $name = null;
    public ?array $secret = null;
    public ?string $vendor = null;
}

/** ImagesSourcingkitSourceList entity data model. */
class ImagesSourcingkitSourceList
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for ImagesSourcingkitSourceList#list. */
class ImagesSourcingkitSourceListListMatch
{
    public string $account_id;
    public ?int $limit = null;
    public ?string $name = null;
    public ?int $offset = null;
}

/** ImagesSourcingkitSourceSingle entity data model. */
class ImagesSourcingkitSourceSingle
{
    public ?array $result = null;
}

/** Request payload for ImagesSourcingkitSourceSingle#load. */
class ImagesSourcingkitSourceSingleLoadMatch
{
    public string $account_id;
    public string $source_id;
}

/** Migration entity data model. */
class Migration
{
    public ?string $id = null;
}

/** Request payload for Migration#remove. */
class MigrationRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Source entity data model. */
class Source
{
    public ?string $id = null;
}

/** Request payload for Source#remove. */
class SourceRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** V1n entity data model. */
class V1n
{
}

/** Request payload for V1n#remove. */
class V1nRemoveMatch
{
    public string $account_id;
    public string $image_id;
}

