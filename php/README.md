# CloudflareImages PHP SDK



The PHP SDK for the CloudflareImages API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->CloudflareImage()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-images-sdk/releases](https://github.com/voxgig-sdk/cloudflare-images-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cloudflareimages_sdk.php';

$client = new CloudflareImagesSDK([
    "apikey" => getenv("CLOUDFLARE_IMAGES_APIKEY"),
]);
```

### 3. Load an imagessourcingkitconnectivitycheck

ImagesSourcingkitConnectivityCheck is nested under account, so provide the `account_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the ImagesSourcingkitConnectivityCheck record (throws on error).
    $imagessourcingkitconnectivitycheck = $client->ImagesSourcingkitConnectivityCheck()->load(["account_id" => "example_account_id", "source_id" => "example_source_id"]);
    print_r($imagessourcingkitconnectivitycheck->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $imagesimageresponsesingle = $client->ImagesImageResponseSingle()->load(["account_id" => "example", "image_id" => "example"]);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = CloudflareImagesSDK::test();

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$imagesimageresponsesingle = $client->ImagesImageResponseSingle()->load(["account_id" => "example", "image_id" => "example"]);
print_r($imagesimageresponsesingle->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CloudflareImagesSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_IMAGES_TEST_LIVE=TRUE
CLOUDFLARE_IMAGES_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CloudflareImagesSDK

```php
require_once 'cloudflareimages_sdk.php';
$client = new CloudflareImagesSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CloudflareImagesSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CloudflareImagesSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `CloudflareImage` | `($data): CloudflareImageEntity` | Create a CloudflareImage entity instance. |
| `Image` | `($data): ImageEntity` | Create an Image entity instance. |
| `ImagesDeleted` | `($data): ImagesDeletedEntity` | Create an ImagesDeleted entity instance. |
| `ImagesImageDirectUpload` | `($data): ImagesImageDirectUploadEntity` | Create an ImagesImageDirectUpload entity instance. |
| `ImagesImageKeyResponseCollection` | `($data): ImagesImageKeyResponseCollectionEntity` | Create an ImagesImageKeyResponseCollection entity instance. |
| `ImagesImageResponseSingle` | `($data): ImagesImageResponseSingleEntity` | Create an ImagesImageResponseSingle entity instance. |
| `ImagesImageVariantFlat` | `($data): ImagesImageVariantFlatEntity` | Create an ImagesImageVariantFlat entity instance. |
| `ImagesImageVariantList` | `($data): ImagesImageVariantListEntity` | Create an ImagesImageVariantList entity instance. |
| `ImagesImageVariantSimple` | `($data): ImagesImageVariantSimpleEntity` | Create an ImagesImageVariantSimple entity instance. |
| `ImagesImagesList` | `($data): ImagesImagesListEntity` | Create an ImagesImagesList entity instance. |
| `ImagesImagesStat` | `($data): ImagesImagesStatEntity` | Create an ImagesImagesStat entity instance. |
| `ImagesMetadataKey` | `($data): ImagesMetadataKeyEntity` | Create an ImagesMetadataKey entity instance. |
| `ImagesSourcingkitConnectivityCheck` | `($data): ImagesSourcingkitConnectivityCheckEntity` | Create an ImagesSourcingkitConnectivityCheck entity instance. |
| `ImagesSourcingkitMigration` | `($data): ImagesSourcingkitMigrationEntity` | Create an ImagesSourcingkitMigration entity instance. |
| `ImagesSourcingkitMigrationList` | `($data): ImagesSourcingkitMigrationListEntity` | Create an ImagesSourcingkitMigrationList entity instance. |
| `ImagesSourcingkitMigrationLogList` | `($data): ImagesSourcingkitMigrationLogListEntity` | Create an ImagesSourcingkitMigrationLogList entity instance. |
| `ImagesSourcingkitMigrationProgress` | `($data): ImagesSourcingkitMigrationProgressEntity` | Create an ImagesSourcingkitMigrationProgress entity instance. |
| `ImagesSourcingkitMigrationSingle` | `($data): ImagesSourcingkitMigrationSingleEntity` | Create an ImagesSourcingkitMigrationSingle entity instance. |
| `ImagesSourcingkitSource` | `($data): ImagesSourcingkitSourceEntity` | Create an ImagesSourcingkitSource entity instance. |
| `ImagesSourcingkitSourceList` | `($data): ImagesSourcingkitSourceListEntity` | Create an ImagesSourcingkitSourceList entity instance. |
| `ImagesSourcingkitSourceSingle` | `($data): ImagesSourcingkitSourceSingleEntity` | Create an ImagesSourcingkitSourceSingle entity instance. |
| `Migration` | `($data): MigrationEntity` | Create a Migration entity instance. |
| `Source` | `($data): SourceEntity` | Create a Source entity instance. |
| `V1n` | `($data): V1nEntity` | Create a V1n entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### CloudflareImage

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/accounts/{account_id}/images/v1/{image_id}/blob`

#### Image

| Field | Description |
| --- | --- |
| `etag` |  |
| `flows` |  |
| `version` |  |

Operations: Load, Update.

API path: `/zones/{zone_id}/images/v1/flows`

#### ImagesDeleted

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/images/v1/variants/{variant_id}`

#### ImagesImageDirectUpload

| Field | Description |
| --- | --- |
| `expiry` | The date after which the upload will not be accepted. |

Operations: Create.

API path: `/accounts/{account_id}/images/v1/direct_upload`

#### ImagesImageKeyResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: List, Remove, Update.

API path: `/accounts/{account_id}/images/v1/keys`

#### ImagesImageResponseSingle

| Field | Description |
| --- | --- |
| `creator` | Can set the creator field with an internal user ID. |
| `metadata` | User modifiable key-value store. |
| `requireSignedURLs` | Indicates whether the image can be accessed using only its UID. |
| `result` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/images/v1`

#### ImagesImageVariantFlat

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/images/v1/variants/{variant_id}/flat`

#### ImagesImageVariantList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/images/v1/variants`

#### ImagesImageVariantSimple

| Field | Description |
| --- | --- |
| `id` |  |
| `neverRequireSignedURLs` | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | Allows you to define image resizing sizes for different use cases. |
| `result` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/images/v1/variants`

#### ImagesImagesList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: List, Load.

API path: `/accounts/{account_id}/images/v1`

#### ImagesImagesStat

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/images/v1/stats`

#### ImagesMetadataKey

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/images/v2/metadata/keys`

#### ImagesSourcingkitConnectivityCheck

| Field | Description |
| --- | --- |
| `account` | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | The name of the storage bucket. |
| `region` | The region hint for the bucket (S3 only). |
| `result` |  |
| `secret` | Storage credentials for accessing the bucket. |
| `vendor` | The cloud storage vendor of the source bucket. |

Operations: Create, Load.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources/connectivity-precheck`

#### ImagesSourcingkitMigration

| Field | Description |
| --- | --- |
| `conflictBehaviour` | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | Content types to skip during migration. |
| `pathPrefix` | Prefix to prepend to image custom IDs. |
| `rootDirectory` | Only import objects under this prefix in the source bucket. |
| `sourceId` | The identifier of the source to migrate from. |

Operations: Create.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations`

#### ImagesSourcingkitMigrationList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations`

#### ImagesSourcingkitMigrationLogList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/logs`

#### ImagesSourcingkitMigrationProgress

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle`

#### ImagesSourcingkitMigrationSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load, Update.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}`

#### ImagesSourcingkitSource

| Field | Description |
| --- | --- |
| `account` | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | The name of the storage bucket. |
| `id` |  |
| `name` | A human-readable name for the source. |
| `secret` | Storage credentials for accessing the bucket. |
| `vendor` | The cloud storage vendor of the source bucket. |

Operations: Create, Update.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources`

#### ImagesSourcingkitSourceList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources`

#### ImagesSourcingkitSourceSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}`

#### Migration

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}`

#### Source

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}`

#### V1n

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/images/v1/{image_id}`



## Entities


### CloudflareImage

Create an instance: `$cloudflare_image = $client->CloudflareImage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CloudflareImage record (throws on error).
$cloudflare_image = $client->CloudflareImage()->load(["account_id" => "account_id", "v1_id" => "v1_id"]);
```


### Image

Create an instance: `$image = $client->Image();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `etag` | `string` |  |
| `flows` | `array` |  |
| `version` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Image record (throws on error).
$image = $client->Image()->load(["zone_id" => "zone_id"]);
```


### ImagesDeleted

Create an instance: `$images_deleted = $client->ImagesDeleted();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ImagesImageDirectUpload

Create an instance: `$images_image_direct_upload = $client->ImagesImageDirectUpload();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `string` | The date after which the upload will not be accepted. |

#### Example: Create

```php
$images_image_direct_upload = $client->ImagesImageDirectUpload()->create([
    "account_id" => null, // string
]);
```


### ImagesImageKeyResponseCollection

Create an instance: `$images_image_key_response_collection = $client->ImagesImageKeyResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```php
// list() returns an array of ImagesImageKeyResponseCollection records (throws on error).
$images_image_key_response_collections = $client->ImagesImageKeyResponseCollection()->list();
```


### ImagesImageResponseSingle

Create an instance: `$images_image_response_single = $client->ImagesImageResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `creator` | `string` | Can set the creator field with an internal user ID. |
| `metadata` | `array` | User modifiable key-value store. |
| `requireSignedURLs` | `bool` | Indicates whether the image can be accessed using only its UID. |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ImagesImageResponseSingle record (throws on error).
$images_image_response_single = $client->ImagesImageResponseSingle()->load(["account_id" => "account_id", "image_id" => "image_id"]);
```

#### Example: Create

```php
$images_image_response_single = $client->ImagesImageResponseSingle()->create([
    "account_id" => null, // string
]);
```


### ImagesImageVariantFlat

Create an instance: `$images_image_variant_flat = $client->ImagesImageVariantFlat();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ImagesImageVariantFlat record (throws on error).
$images_image_variant_flat = $client->ImagesImageVariantFlat()->load(["account_id" => "account_id", "variant_id" => "variant_id"]);
```


### ImagesImageVariantList

Create an instance: `$images_image_variant_list = $client->ImagesImageVariantList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```php
// list() returns an array of ImagesImageVariantList records (throws on error).
$images_image_variant_lists = $client->ImagesImageVariantList()->list();
```


### ImagesImageVariantSimple

Create an instance: `$images_image_variant_simple = $client->ImagesImageVariantSimple();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `neverRequireSignedURLs` | `bool` | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `array` | Allows you to define image resizing sizes for different use cases. |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ImagesImageVariantSimple record (throws on error).
$images_image_variant_simple = $client->ImagesImageVariantSimple()->load(["account_id" => "account_id", "variant_id" => "variant_id"]);
```

#### Example: Create

```php
$images_image_variant_simple = $client->ImagesImageVariantSimple()->create([
    "account_id" => null, // string
    "id" => null, // string
    "options" => null, // array
]);
```


### ImagesImagesList

Create an instance: `$images_images_list = $client->ImagesImagesList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ImagesImagesList record (throws on error).
$images_images_list = $client->ImagesImagesList()->load(["account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of ImagesImagesList records (throws on error).
$images_images_lists = $client->ImagesImagesList()->list();
```


### ImagesImagesStat

Create an instance: `$images_images_stat = $client->ImagesImagesStat();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ImagesImagesStat record (throws on error).
$images_images_stat = $client->ImagesImagesStat()->load(["account_id" => "account_id"]);
```


### ImagesMetadataKey

Create an instance: `$images_metadata_key = $client->ImagesMetadataKey();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```php
// list() returns an array of ImagesMetadataKey records (throws on error).
$images_metadata_keys = $client->ImagesMetadataKey()->list();
```


### ImagesSourcingkitConnectivityCheck

Create an instance: `$images_sourcingkit_connectivity_check = $client->ImagesSourcingkitConnectivityCheck();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | The name of the storage bucket. |
| `region` | `string` | The region hint for the bucket (S3 only). |
| `result` | `array` |  |
| `secret` | `array` | Storage credentials for accessing the bucket. |
| `vendor` | `string` | The cloud storage vendor of the source bucket. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ImagesSourcingkitConnectivityCheck record (throws on error).
$images_sourcingkit_connectivity_check = $client->ImagesSourcingkitConnectivityCheck()->load(["account_id" => "account_id", "source_id" => "source_id"]);
```

#### Example: Create

```php
$images_sourcingkit_connectivity_check = $client->ImagesSourcingkitConnectivityCheck()->create([
    "account_id" => null, // string
    "bucket" => null, // string
    "secret" => null, // array
    "vendor" => null, // string
]);
```


### ImagesSourcingkitMigration

Create an instance: `$images_sourcingkit_migration = $client->ImagesSourcingkitMigration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conflictBehaviour` | `string` | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `array` | Content types to skip during migration. |
| `pathPrefix` | `string` | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `string` | Only import objects under this prefix in the source bucket. |
| `sourceId` | `string` | The identifier of the source to migrate from. |

#### Example: Create

```php
$images_sourcingkit_migration = $client->ImagesSourcingkitMigration()->create([
    "account_id" => null, // string
    "sourceId" => null, // string
]);
```


### ImagesSourcingkitMigrationList

Create an instance: `$images_sourcingkit_migration_list = $client->ImagesSourcingkitMigrationList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```php
// list() returns an array of ImagesSourcingkitMigrationList records (throws on error).
$images_sourcingkit_migration_lists = $client->ImagesSourcingkitMigrationList()->list();
```


### ImagesSourcingkitMigrationLogList

Create an instance: `$images_sourcingkit_migration_log_list = $client->ImagesSourcingkitMigrationLogList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```php
// list() returns an array of ImagesSourcingkitMigrationLogList records (throws on error).
$images_sourcingkit_migration_log_lists = $client->ImagesSourcingkitMigrationLogList()->list();
```


### ImagesSourcingkitMigrationProgress

Create an instance: `$images_sourcingkit_migration_progress = $client->ImagesSourcingkitMigrationProgress();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ImagesSourcingkitMigrationProgress record (throws on error).
$images_sourcingkit_migration_progress = $client->ImagesSourcingkitMigrationProgress()->load(["account_id" => "account_id", "migration_id" => "migration_id"]);
```


### ImagesSourcingkitMigrationSingle

Create an instance: `$images_sourcingkit_migration_single = $client->ImagesSourcingkitMigrationSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ImagesSourcingkitMigrationSingle record (throws on error).
$images_sourcingkit_migration_single = $client->ImagesSourcingkitMigrationSingle()->load(["account_id" => "account_id", "migration_id" => "migration_id"]);
```


### ImagesSourcingkitSource

Create an instance: `$images_sourcingkit_source = $client->ImagesSourcingkitSource();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | The name of the storage bucket. |
| `id` | `string` |  |
| `name` | `string` | A human-readable name for the source. |
| `secret` | `array` | Storage credentials for accessing the bucket. |
| `vendor` | `string` | The cloud storage vendor of the source bucket. |

#### Example: Create

```php
$images_sourcingkit_source = $client->ImagesSourcingkitSource()->create([
    "account_id" => null, // string
    "bucket" => null, // string
    "name" => null, // string
    "secret" => null, // array
    "vendor" => null, // string
]);
```


### ImagesSourcingkitSourceList

Create an instance: `$images_sourcingkit_source_list = $client->ImagesSourcingkitSourceList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```php
// list() returns an array of ImagesSourcingkitSourceList records (throws on error).
$images_sourcingkit_source_lists = $client->ImagesSourcingkitSourceList()->list();
```


### ImagesSourcingkitSourceSingle

Create an instance: `$images_sourcingkit_source_single = $client->ImagesSourcingkitSourceSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ImagesSourcingkitSourceSingle record (throws on error).
$images_sourcingkit_source_single = $client->ImagesSourcingkitSourceSingle()->load(["account_id" => "account_id", "source_id" => "source_id"]);
```


### Migration

Create an instance: `$migration = $client->Migration();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Source

Create an instance: `$source = $client->Source();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### V1n

Create an instance: `$v1n = $client->V1n();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

9 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `image` | `flows` | 5 | 5 levels |
| `images_image_key_response_collection` | `result` | 3 | 6 levels |
| `images_image_response_single` | `result` | 3 | 3 levels |
| `images_image_variant_list` | `result` | 3 | 6 levels |
| `images_images_list` | `result` | 3 | 6 levels |
| `images_metadata_key` | `result` | 3 | 6 levels |
| `images_sourcingkit_migration_list` | `result` | 3 | 6 levels |
| `images_sourcingkit_migration_log_list` | `result` | 3 | 6 levels |
| `images_sourcingkit_source_list` | `result` | 3 | 6 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cloudflareimages_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cloudflareimages_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$imagesimageresponsesingle = $client->ImagesImageResponseSingle();
$imagesimageresponsesingle->load(["account_id" => "example", "image_id" => "example"]);

// $imagesimageresponsesingle->data_get() now returns the imagesimageresponsesingle data from the last load
// $imagesimageresponsesingle->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
