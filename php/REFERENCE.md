# CloudflareImages PHP SDK Reference

Complete API reference for the CloudflareImages PHP SDK.


## CloudflareImagesSDK

### Constructor

```php
require_once __DIR__ . '/cloudflareimages_sdk.php';

$client = new CloudflareImagesSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareImagesSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareImagesSDK::test();
```


### Instance Methods

#### `CloudflareImage($data = null)`

Create a new `CloudflareImageEntity` instance. Pass `null` for no initial data.

#### `Image($data = null)`

Create a new `ImageEntity` instance. Pass `null` for no initial data.

#### `ImagesDeleted($data = null)`

Create a new `ImagesDeletedEntity` instance. Pass `null` for no initial data.

#### `ImagesImageDirectUpload($data = null)`

Create a new `ImagesImageDirectUploadEntity` instance. Pass `null` for no initial data.

#### `ImagesImageKeyResponseCollection($data = null)`

Create a new `ImagesImageKeyResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `ImagesImageResponseSingle($data = null)`

Create a new `ImagesImageResponseSingleEntity` instance. Pass `null` for no initial data.

#### `ImagesImageVariantFlat($data = null)`

Create a new `ImagesImageVariantFlatEntity` instance. Pass `null` for no initial data.

#### `ImagesImageVariantList($data = null)`

Create a new `ImagesImageVariantListEntity` instance. Pass `null` for no initial data.

#### `ImagesImageVariantSimple($data = null)`

Create a new `ImagesImageVariantSimpleEntity` instance. Pass `null` for no initial data.

#### `ImagesImagesList($data = null)`

Create a new `ImagesImagesListEntity` instance. Pass `null` for no initial data.

#### `ImagesImagesStat($data = null)`

Create a new `ImagesImagesStatEntity` instance. Pass `null` for no initial data.

#### `ImagesMetadataKey($data = null)`

Create a new `ImagesMetadataKeyEntity` instance. Pass `null` for no initial data.

#### `ImagesSourcingkitConnectivityCheck($data = null)`

Create a new `ImagesSourcingkitConnectivityCheckEntity` instance. Pass `null` for no initial data.

#### `ImagesSourcingkitMigration($data = null)`

Create a new `ImagesSourcingkitMigrationEntity` instance. Pass `null` for no initial data.

#### `ImagesSourcingkitMigrationList($data = null)`

Create a new `ImagesSourcingkitMigrationListEntity` instance. Pass `null` for no initial data.

#### `ImagesSourcingkitMigrationLogList($data = null)`

Create a new `ImagesSourcingkitMigrationLogListEntity` instance. Pass `null` for no initial data.

#### `ImagesSourcingkitMigrationProgress($data = null)`

Create a new `ImagesSourcingkitMigrationProgressEntity` instance. Pass `null` for no initial data.

#### `ImagesSourcingkitMigrationSingle($data = null)`

Create a new `ImagesSourcingkitMigrationSingleEntity` instance. Pass `null` for no initial data.

#### `ImagesSourcingkitSource($data = null)`

Create a new `ImagesSourcingkitSourceEntity` instance. Pass `null` for no initial data.

#### `ImagesSourcingkitSourceList($data = null)`

Create a new `ImagesSourcingkitSourceListEntity` instance. Pass `null` for no initial data.

#### `ImagesSourcingkitSourceSingle($data = null)`

Create a new `ImagesSourcingkitSourceSingleEntity` instance. Pass `null` for no initial data.

#### `Migration($data = null)`

Create a new `MigrationEntity` instance. Pass `null` for no initial data.

#### `Source($data = null)`

Create a new `SourceEntity` instance. Pass `null` for no initial data.

#### `V1n($data = null)`

Create a new `V1nEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareImagesUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CloudflareImageEntity

```php
$cloudflare_image = $client->CloudflareImage();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CloudflareImage()->load(["account_id" => "account_id", "v1_id" => "v1_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloudflareImageEntity`

Create a new `CloudflareImageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImageEntity

```php
$image = $client->Image();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `string` | No |  |
| `flows` | `array` | Yes |  |
| `version` | `float` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Image()->load(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Image()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImageEntity`

Create a new `ImageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesDeletedEntity

```php
$images_deleted = $client->ImagesDeleted();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesDeleted()->remove(["account_id" => "account_id", "variant_id" => "variant_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesDeletedEntity`

Create a new `ImagesDeletedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesImageDirectUploadEntity

```php
$images_image_direct_upload = $client->ImagesImageDirectUpload();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `string` | No | The date after which the upload will not be accepted. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ImagesImageDirectUpload()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesImageDirectUploadEntity`

Create a new `ImagesImageDirectUploadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesImageKeyResponseCollectionEntity

```php
$images_image_key_response_collection = $client->ImagesImageKeyResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ImagesImageKeyResponseCollection()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesImageKeyResponseCollection()->remove(["account_id" => "account_id", "signing_key_name" => "signing_key_name"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ImagesImageKeyResponseCollection()->update([
  "account_id" => "account_id",
  "signing_key_name" => "signing_key_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesImageKeyResponseCollectionEntity`

Create a new `ImagesImageKeyResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesImageResponseSingleEntity

```php
$images_image_response_single = $client->ImagesImageResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | `string` | No | Can set the creator field with an internal user ID. |
| `metadata` | `array` | No | User modifiable key-value store. |
| `requireSignedURLs` | `bool` | No | Indicates whether the image can be accessed using only its UID. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ImagesImageResponseSingle()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesImageResponseSingle()->load(["account_id" => "account_id", "image_id" => "image_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ImagesImageResponseSingle()->update([
  "account_id" => "account_id",
  "image_id" => "image_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesImageResponseSingleEntity`

Create a new `ImagesImageResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesImageVariantFlatEntity

```php
$images_image_variant_flat = $client->ImagesImageVariantFlat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesImageVariantFlat()->load(["account_id" => "account_id", "variant_id" => "variant_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesImageVariantFlatEntity`

Create a new `ImagesImageVariantFlatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesImageVariantListEntity

```php
$images_image_variant_list = $client->ImagesImageVariantList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ImagesImageVariantList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesImageVariantListEntity`

Create a new `ImagesImageVariantListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesImageVariantSimpleEntity

```php
$images_image_variant_simple = $client->ImagesImageVariantSimple();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `neverRequireSignedURLs` | `bool` | No | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `array` | Yes | Allows you to define image resizing sizes for different use cases. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ImagesImageVariantSimple()->create([
  "account_id" => null, // string
  "id" => null, // string
  "options" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesImageVariantSimple()->load(["account_id" => "account_id", "variant_id" => "variant_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ImagesImageVariantSimple()->update([
  "account_id" => "account_id",
  "variant_id" => "variant_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesImageVariantSimpleEntity`

Create a new `ImagesImageVariantSimpleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesImagesListEntity

```php
$images_images_list = $client->ImagesImagesList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | - | Yes |
| `success` | - | - |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ImagesImagesList()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesImagesList()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesImagesListEntity`

Create a new `ImagesImagesListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesImagesStatEntity

```php
$images_images_stat = $client->ImagesImagesStat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesImagesStat()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesImagesStatEntity`

Create a new `ImagesImagesStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesMetadataKeyEntity

```php
$images_metadata_key = $client->ImagesMetadataKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ImagesMetadataKey()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesMetadataKeyEntity`

Create a new `ImagesMetadataKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesSourcingkitConnectivityCheckEntity

```php
$images_sourcingkit_connectivity_check = $client->ImagesSourcingkitConnectivityCheck();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | Yes | The name of the storage bucket. |
| `region` | `string` | No | The region hint for the bucket (S3 only). |
| `result` | `array` | No |  |
| `secret` | `array` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `string` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ImagesSourcingkitConnectivityCheck()->create([
  "account_id" => null, // string
  "bucket" => null, // string
  "secret" => null, // array
  "vendor" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesSourcingkitConnectivityCheck()->load(["account_id" => "account_id", "source_id" => "source_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesSourcingkitConnectivityCheckEntity`

Create a new `ImagesSourcingkitConnectivityCheckEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesSourcingkitMigrationEntity

```php
$images_sourcingkit_migration = $client->ImagesSourcingkitMigration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conflictBehaviour` | `string` | No | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `array` | No | Content types to skip during migration. |
| `pathPrefix` | `string` | No | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `string` | No | Only import objects under this prefix in the source bucket. |
| `sourceId` | `string` | Yes | The identifier of the source to migrate from. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ImagesSourcingkitMigration()->create([
  "account_id" => null, // string
  "sourceId" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesSourcingkitMigrationEntity`

Create a new `ImagesSourcingkitMigrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesSourcingkitMigrationListEntity

```php
$images_sourcingkit_migration_list = $client->ImagesSourcingkitMigrationList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ImagesSourcingkitMigrationList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesSourcingkitMigrationListEntity`

Create a new `ImagesSourcingkitMigrationListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesSourcingkitMigrationLogListEntity

```php
$images_sourcingkit_migration_log_list = $client->ImagesSourcingkitMigrationLogList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ImagesSourcingkitMigrationLogList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesSourcingkitMigrationLogListEntity`

Create a new `ImagesSourcingkitMigrationLogListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesSourcingkitMigrationProgressEntity

```php
$images_sourcingkit_migration_progress = $client->ImagesSourcingkitMigrationProgress();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesSourcingkitMigrationProgress()->load(["account_id" => "account_id", "migration_id" => "migration_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesSourcingkitMigrationProgressEntity`

Create a new `ImagesSourcingkitMigrationProgressEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesSourcingkitMigrationSingleEntity

```php
$images_sourcingkit_migration_single = $client->ImagesSourcingkitMigrationSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesSourcingkitMigrationSingle()->load(["account_id" => "account_id", "migration_id" => "migration_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ImagesSourcingkitMigrationSingle()->update([
  "account_id" => "account_id",
  "migration_id" => "migration_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesSourcingkitMigrationSingleEntity`

Create a new `ImagesSourcingkitMigrationSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesSourcingkitSourceEntity

```php
$images_sourcingkit_source = $client->ImagesSourcingkitSource();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | Yes | The name of the storage bucket. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | A human-readable name for the source. |
| `secret` | `array` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `string` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ImagesSourcingkitSource()->create([
  "account_id" => null, // string
  "bucket" => null, // string
  "name" => null, // string
  "secret" => null, // array
  "vendor" => null, // string
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ImagesSourcingkitSource()->update([
  "account_id" => "account_id",
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesSourcingkitSourceEntity`

Create a new `ImagesSourcingkitSourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesSourcingkitSourceListEntity

```php
$images_sourcingkit_source_list = $client->ImagesSourcingkitSourceList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ImagesSourcingkitSourceList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesSourcingkitSourceListEntity`

Create a new `ImagesSourcingkitSourceListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImagesSourcingkitSourceSingleEntity

```php
$images_sourcingkit_source_single = $client->ImagesSourcingkitSourceSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ImagesSourcingkitSourceSingle()->load(["account_id" => "account_id", "source_id" => "source_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImagesSourcingkitSourceSingleEntity`

Create a new `ImagesSourcingkitSourceSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MigrationEntity

```php
$migration = $client->Migration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Migration()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MigrationEntity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SourceEntity

```php
$source = $client->Source();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Source()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SourceEntity`

Create a new `SourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## V1nEntity

```php
$v1n = $client->V1n();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->V1n()->remove(["account_id" => "account_id", "image_id" => "image_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): V1nEntity`

Create a new `V1nEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareImagesSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

