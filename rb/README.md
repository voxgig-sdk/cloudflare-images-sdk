# CloudflareImages Ruby SDK



The Ruby SDK for the CloudflareImages API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.CloudflareImage` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-images-sdk/releases](https://github.com/voxgig-sdk/cloudflare-images-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CloudflareImages_sdk"

client = CloudflareImagesSDK.new({
  "apikey" => ENV["CLOUDFLARE_IMAGES_APIKEY"],
})
```

### 3. Load an imagessourcingkitconnectivitycheck

ImagesSourcingkitConnectivityCheck is nested under account, so provide the `account_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the ImagesSourcingkitConnectivityCheck record (raises on error).
  imagessourcingkitconnectivitycheck = client.ImagesSourcingkitConnectivityCheck.load({ "account_id" => "example_account_id", "source_id" => "example_source_id" })
  puts imagessourcingkitconnectivitycheck
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  imagesimageresponsesingle = client.ImagesImageResponseSingle.load({ "account_id" => "example", "image_id" => "example" })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = CloudflareImagesSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
imagesimageresponsesingle = client.ImagesImageResponseSingle.load({ "account_id" => "example", "image_id" => "example" })
puts imagesimageresponsesingle
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CloudflareImagesSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_IMAGES_TEST_LIVE=TRUE
CLOUDFLARE_IMAGES_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CloudflareImagesSDK

```ruby
require_relative "CloudflareImages_sdk"
client = CloudflareImagesSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CloudflareImagesSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareImagesSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `CloudflareImage` | `(data) -> CloudflareImageEntity` | Create a CloudflareImage entity instance. |
| `Image` | `(data) -> ImageEntity` | Create an Image entity instance. |
| `ImagesDeleted` | `(data) -> ImagesDeletedEntity` | Create an ImagesDeleted entity instance. |
| `ImagesImageDirectUpload` | `(data) -> ImagesImageDirectUploadEntity` | Create an ImagesImageDirectUpload entity instance. |
| `ImagesImageKeyResponseCollection` | `(data) -> ImagesImageKeyResponseCollectionEntity` | Create an ImagesImageKeyResponseCollection entity instance. |
| `ImagesImageResponseSingle` | `(data) -> ImagesImageResponseSingleEntity` | Create an ImagesImageResponseSingle entity instance. |
| `ImagesImageVariantFlat` | `(data) -> ImagesImageVariantFlatEntity` | Create an ImagesImageVariantFlat entity instance. |
| `ImagesImageVariantList` | `(data) -> ImagesImageVariantListEntity` | Create an ImagesImageVariantList entity instance. |
| `ImagesImageVariantSimple` | `(data) -> ImagesImageVariantSimpleEntity` | Create an ImagesImageVariantSimple entity instance. |
| `ImagesImagesList` | `(data) -> ImagesImagesListEntity` | Create an ImagesImagesList entity instance. |
| `ImagesImagesStat` | `(data) -> ImagesImagesStatEntity` | Create an ImagesImagesStat entity instance. |
| `ImagesMetadataKey` | `(data) -> ImagesMetadataKeyEntity` | Create an ImagesMetadataKey entity instance. |
| `ImagesSourcingkitConnectivityCheck` | `(data) -> ImagesSourcingkitConnectivityCheckEntity` | Create an ImagesSourcingkitConnectivityCheck entity instance. |
| `ImagesSourcingkitMigration` | `(data) -> ImagesSourcingkitMigrationEntity` | Create an ImagesSourcingkitMigration entity instance. |
| `ImagesSourcingkitMigrationList` | `(data) -> ImagesSourcingkitMigrationListEntity` | Create an ImagesSourcingkitMigrationList entity instance. |
| `ImagesSourcingkitMigrationLogList` | `(data) -> ImagesSourcingkitMigrationLogListEntity` | Create an ImagesSourcingkitMigrationLogList entity instance. |
| `ImagesSourcingkitMigrationProgress` | `(data) -> ImagesSourcingkitMigrationProgressEntity` | Create an ImagesSourcingkitMigrationProgress entity instance. |
| `ImagesSourcingkitMigrationSingle` | `(data) -> ImagesSourcingkitMigrationSingleEntity` | Create an ImagesSourcingkitMigrationSingle entity instance. |
| `ImagesSourcingkitSource` | `(data) -> ImagesSourcingkitSourceEntity` | Create an ImagesSourcingkitSource entity instance. |
| `ImagesSourcingkitSourceList` | `(data) -> ImagesSourcingkitSourceListEntity` | Create an ImagesSourcingkitSourceList entity instance. |
| `ImagesSourcingkitSourceSingle` | `(data) -> ImagesSourcingkitSourceSingleEntity` | Create an ImagesSourcingkitSourceSingle entity instance. |
| `Migration` | `(data) -> MigrationEntity` | Create a Migration entity instance. |
| `Source` | `(data) -> SourceEntity` | Create a Source entity instance. |
| `V1n` | `(data) -> V1nEntity` | Create a V1n entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CloudflareImagesError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `cloudflare_image = client.CloudflareImage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CloudflareImage record (raises on error).
cloudflare_image = client.CloudflareImage.load({ "account_id" => "account_id", "v1_id" => "v1_id" })
```


### Image

Create an instance: `image = client.Image`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `etag` | `String` |  |
| `flows` | `Array` |  |
| `version` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Image record (raises on error).
image = client.Image.load({ "zone_id" => "zone_id" })
```


### ImagesDeleted

Create an instance: `images_deleted = client.ImagesDeleted`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ImagesImageDirectUpload

Create an instance: `images_image_direct_upload = client.ImagesImageDirectUpload`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `String` | The date after which the upload will not be accepted. |

#### Example: Create

```ruby
images_image_direct_upload = client.ImagesImageDirectUpload.create({
  "account_id" => "example_account_id", # String
})
```


### ImagesImageKeyResponseCollection

Create an instance: `images_image_key_response_collection = client.ImagesImageKeyResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of ImagesImageKeyResponseCollection records (raises on error).
images_image_key_response_collections = client.ImagesImageKeyResponseCollection.list
```


### ImagesImageResponseSingle

Create an instance: `images_image_response_single = client.ImagesImageResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `creator` | `String` | Can set the creator field with an internal user ID. |
| `metadata` | `Hash` | User modifiable key-value store. |
| `requireSignedURLs` | `Boolean` | Indicates whether the image can be accessed using only its UID. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ImagesImageResponseSingle record (raises on error).
images_image_response_single = client.ImagesImageResponseSingle.load({ "account_id" => "account_id", "image_id" => "image_id" })
```

#### Example: Create

```ruby
images_image_response_single = client.ImagesImageResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```


### ImagesImageVariantFlat

Create an instance: `images_image_variant_flat = client.ImagesImageVariantFlat`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ImagesImageVariantFlat record (raises on error).
images_image_variant_flat = client.ImagesImageVariantFlat.load({ "account_id" => "account_id", "variant_id" => "variant_id" })
```


### ImagesImageVariantList

Create an instance: `images_image_variant_list = client.ImagesImageVariantList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of ImagesImageVariantList records (raises on error).
images_image_variant_lists = client.ImagesImageVariantList.list
```


### ImagesImageVariantSimple

Create an instance: `images_image_variant_simple = client.ImagesImageVariantSimple`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `neverRequireSignedURLs` | `Boolean` | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `Hash` | Allows you to define image resizing sizes for different use cases. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ImagesImageVariantSimple record (raises on error).
images_image_variant_simple = client.ImagesImageVariantSimple.load({ "account_id" => "account_id", "variant_id" => "variant_id" })
```

#### Example: Create

```ruby
images_image_variant_simple = client.ImagesImageVariantSimple.create({
  "account_id" => "example_account_id", # String
  "id" => "example_id", # String
  "options" => {}, # Hash
})
```


### ImagesImagesList

Create an instance: `images_images_list = client.ImagesImagesList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ImagesImagesList record (raises on error).
images_images_list = client.ImagesImagesList.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of ImagesImagesList records (raises on error).
images_images_lists = client.ImagesImagesList.list
```


### ImagesImagesStat

Create an instance: `images_images_stat = client.ImagesImagesStat`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ImagesImagesStat record (raises on error).
images_images_stat = client.ImagesImagesStat.load({ "account_id" => "account_id" })
```


### ImagesMetadataKey

Create an instance: `images_metadata_key = client.ImagesMetadataKey`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of ImagesMetadataKey records (raises on error).
images_metadata_keys = client.ImagesMetadataKey.list
```


### ImagesSourcingkitConnectivityCheck

Create an instance: `images_sourcingkit_connectivity_check = client.ImagesSourcingkitConnectivityCheck`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `String` | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `String` | The name of the storage bucket. |
| `region` | `String` | The region hint for the bucket (S3 only). |
| `result` | `Hash` |  |
| `secret` | `Hash` | Storage credentials for accessing the bucket. |
| `vendor` | `String` | The cloud storage vendor of the source bucket. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ImagesSourcingkitConnectivityCheck record (raises on error).
images_sourcingkit_connectivity_check = client.ImagesSourcingkitConnectivityCheck.load({ "account_id" => "account_id", "source_id" => "source_id" })
```

#### Example: Create

```ruby
images_sourcingkit_connectivity_check = client.ImagesSourcingkitConnectivityCheck.create({
  "account_id" => "example_account_id", # String
  "bucket" => "example_bucket", # String
  "secret" => {}, # Hash
  "vendor" => "example_vendor", # String
})
```


### ImagesSourcingkitMigration

Create an instance: `images_sourcingkit_migration = client.ImagesSourcingkitMigration`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conflictBehaviour` | `String` | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `Array` | Content types to skip during migration. |
| `pathPrefix` | `String` | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `String` | Only import objects under this prefix in the source bucket. |
| `sourceId` | `String` | The identifier of the source to migrate from. |

#### Example: Create

```ruby
images_sourcingkit_migration = client.ImagesSourcingkitMigration.create({
  "account_id" => "example_account_id", # String
  "sourceId" => "example_sourceId", # String
})
```


### ImagesSourcingkitMigrationList

Create an instance: `images_sourcingkit_migration_list = client.ImagesSourcingkitMigrationList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of ImagesSourcingkitMigrationList records (raises on error).
images_sourcingkit_migration_lists = client.ImagesSourcingkitMigrationList.list
```


### ImagesSourcingkitMigrationLogList

Create an instance: `images_sourcingkit_migration_log_list = client.ImagesSourcingkitMigrationLogList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of ImagesSourcingkitMigrationLogList records (raises on error).
images_sourcingkit_migration_log_lists = client.ImagesSourcingkitMigrationLogList.list
```


### ImagesSourcingkitMigrationProgress

Create an instance: `images_sourcingkit_migration_progress = client.ImagesSourcingkitMigrationProgress`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ImagesSourcingkitMigrationProgress record (raises on error).
images_sourcingkit_migration_progress = client.ImagesSourcingkitMigrationProgress.load({ "account_id" => "account_id", "migration_id" => "migration_id" })
```


### ImagesSourcingkitMigrationSingle

Create an instance: `images_sourcingkit_migration_single = client.ImagesSourcingkitMigrationSingle`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ImagesSourcingkitMigrationSingle record (raises on error).
images_sourcingkit_migration_single = client.ImagesSourcingkitMigrationSingle.load({ "account_id" => "account_id", "migration_id" => "migration_id" })
```


### ImagesSourcingkitSource

Create an instance: `images_sourcingkit_source = client.ImagesSourcingkitSource`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `String` | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `String` | The name of the storage bucket. |
| `id` | `String` |  |
| `name` | `String` | A human-readable name for the source. |
| `secret` | `Hash` | Storage credentials for accessing the bucket. |
| `vendor` | `String` | The cloud storage vendor of the source bucket. |

#### Example: Create

```ruby
images_sourcingkit_source = client.ImagesSourcingkitSource.create({
  "account_id" => "example_account_id", # String
  "bucket" => "example_bucket", # String
  "name" => "example_name", # String
  "secret" => {}, # Hash
  "vendor" => "example_vendor", # String
})
```


### ImagesSourcingkitSourceList

Create an instance: `images_sourcingkit_source_list = client.ImagesSourcingkitSourceList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of ImagesSourcingkitSourceList records (raises on error).
images_sourcingkit_source_lists = client.ImagesSourcingkitSourceList.list
```


### ImagesSourcingkitSourceSingle

Create an instance: `images_sourcingkit_source_single = client.ImagesSourcingkitSourceSingle`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ImagesSourcingkitSourceSingle record (raises on error).
images_sourcingkit_source_single = client.ImagesSourcingkitSourceSingle.load({ "account_id" => "account_id", "source_id" => "source_id" })
```


### Migration

Create an instance: `migration = client.Migration`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### Source

Create an instance: `source = client.Source`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### V1n

Create an instance: `v1n = client.V1n`

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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CloudflareImages_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CloudflareImages_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
imagesimageresponsesingle = client.ImagesImageResponseSingle
imagesimageresponsesingle.load({ "account_id" => "example", "image_id" => "example" })

# imagesimageresponsesingle.data_get now returns the imagesimageresponsesingle data from the last load
# imagesimageresponsesingle.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
