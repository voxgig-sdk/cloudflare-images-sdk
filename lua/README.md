# CloudflareImages Lua SDK



The Lua SDK for the CloudflareImages API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:CloudflareImage()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-images-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-images_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_IMAGES_APIKEY"),
})
```

### 3. Load an imagessourcingkitconnectivitycheck

ImagesSourcingkitConnectivityCheck is nested under account, so provide the `account_id`.

```lua
local imagessourcingkitconnectivitycheck, err = client:ImagesSourcingkitConnectivityCheck():load({ account_id = "example_account_id", source_id = "example_source_id" })
if err then error(err) end
print(imagessourcingkitconnectivitycheck)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local imagesimageresponsesingle, err = client:ImagesImageResponseSingle():load({ account_id = "example", image_id = "example" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:ImagesImageResponseSingle():load({ account_id = "example", image_id = "example" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### CloudflareImagesSDK

```lua
local sdk = require("cloudflare-images_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareImagesSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local cloudflare_image, err = client:CloudflareImage():load()
    if err then error(err) end
    -- cloudflare_image is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local cloudflare_image = client:CloudflareImage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local cloudflare_image, err = client:CloudflareImage():load({ account_id = "account_id", v1_id = "v1_id" })
```


### Image

Create an instance: `local image = client:Image(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `etag` | `string` |  |
| `flows` | `table` |  |
| `version` | `number` |  |

#### Example: Load

```lua
local image, err = client:Image():load({ zone_id = "zone_id" })
```


### ImagesDeleted

Create an instance: `local images_deleted = client:ImagesDeleted(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ImagesImageDirectUpload

Create an instance: `local images_image_direct_upload = client:ImagesImageDirectUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `string` | The date after which the upload will not be accepted. |

#### Example: Create

```lua
local images_image_direct_upload, err = client:ImagesImageDirectUpload():create({
  account_id = "example_account_id", -- string
})
```


### ImagesImageKeyResponseCollection

Create an instance: `local images_image_key_response_collection = client:ImagesImageKeyResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```lua
local images_image_key_response_collections, err = client:ImagesImageKeyResponseCollection():list()
```


### ImagesImageResponseSingle

Create an instance: `local images_image_response_single = client:ImagesImageResponseSingle(nil)`

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
| `metadata` | `table` | User modifiable key-value store. |
| `requireSignedURLs` | `boolean` | Indicates whether the image can be accessed using only its UID. |
| `result` | `table` |  |

#### Example: Load

```lua
local images_image_response_single, err = client:ImagesImageResponseSingle():load({ account_id = "account_id", image_id = "image_id" })
```

#### Example: Create

```lua
local images_image_response_single, err = client:ImagesImageResponseSingle():create({
  account_id = "example_account_id", -- string
})
```


### ImagesImageVariantFlat

Create an instance: `local images_image_variant_flat = client:ImagesImageVariantFlat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local images_image_variant_flat, err = client:ImagesImageVariantFlat():load({ account_id = "account_id", variant_id = "variant_id" })
```


### ImagesImageVariantList

Create an instance: `local images_image_variant_list = client:ImagesImageVariantList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```lua
local images_image_variant_lists, err = client:ImagesImageVariantList():list()
```


### ImagesImageVariantSimple

Create an instance: `local images_image_variant_simple = client:ImagesImageVariantSimple(nil)`

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
| `neverRequireSignedURLs` | `boolean` | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `table` | Allows you to define image resizing sizes for different use cases. |
| `result` | `table` |  |

#### Example: Load

```lua
local images_image_variant_simple, err = client:ImagesImageVariantSimple():load({ account_id = "account_id", variant_id = "variant_id" })
```

#### Example: Create

```lua
local images_image_variant_simple, err = client:ImagesImageVariantSimple():create({
  account_id = "example_account_id", -- string
  id = "example_id", -- string
  options = {}, -- table
})
```


### ImagesImagesList

Create an instance: `local images_images_list = client:ImagesImagesList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```lua
local images_images_list, err = client:ImagesImagesList():load({ account_id = "account_id" })
```

#### Example: List

```lua
local images_images_lists, err = client:ImagesImagesList():list()
```


### ImagesImagesStat

Create an instance: `local images_images_stat = client:ImagesImagesStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local images_images_stat, err = client:ImagesImagesStat():load({ account_id = "account_id" })
```


### ImagesMetadataKey

Create an instance: `local images_metadata_key = client:ImagesMetadataKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```lua
local images_metadata_keys, err = client:ImagesMetadataKey():list()
```


### ImagesSourcingkitConnectivityCheck

Create an instance: `local images_sourcingkit_connectivity_check = client:ImagesSourcingkitConnectivityCheck(nil)`

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
| `result` | `table` |  |
| `secret` | `table` | Storage credentials for accessing the bucket. |
| `vendor` | `string` | The cloud storage vendor of the source bucket. |

#### Example: Load

```lua
local images_sourcingkit_connectivity_check, err = client:ImagesSourcingkitConnectivityCheck():load({ account_id = "account_id", source_id = "source_id" })
```

#### Example: Create

```lua
local images_sourcingkit_connectivity_check, err = client:ImagesSourcingkitConnectivityCheck():create({
  account_id = "example_account_id", -- string
  bucket = "example_bucket", -- string
  secret = {}, -- table
  vendor = "example_vendor", -- string
})
```


### ImagesSourcingkitMigration

Create an instance: `local images_sourcingkit_migration = client:ImagesSourcingkitMigration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conflictBehaviour` | `string` | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `table` | Content types to skip during migration. |
| `pathPrefix` | `string` | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `string` | Only import objects under this prefix in the source bucket. |
| `sourceId` | `string` | The identifier of the source to migrate from. |

#### Example: Create

```lua
local images_sourcingkit_migration, err = client:ImagesSourcingkitMigration():create({
  account_id = "example_account_id", -- string
  sourceId = "example_sourceId", -- string
})
```


### ImagesSourcingkitMigrationList

Create an instance: `local images_sourcingkit_migration_list = client:ImagesSourcingkitMigrationList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```lua
local images_sourcingkit_migration_lists, err = client:ImagesSourcingkitMigrationList():list()
```


### ImagesSourcingkitMigrationLogList

Create an instance: `local images_sourcingkit_migration_log_list = client:ImagesSourcingkitMigrationLogList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```lua
local images_sourcingkit_migration_log_lists, err = client:ImagesSourcingkitMigrationLogList():list()
```


### ImagesSourcingkitMigrationProgress

Create an instance: `local images_sourcingkit_migration_progress = client:ImagesSourcingkitMigrationProgress(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local images_sourcingkit_migration_progress, err = client:ImagesSourcingkitMigrationProgress():load({ account_id = "account_id", migration_id = "migration_id" })
```


### ImagesSourcingkitMigrationSingle

Create an instance: `local images_sourcingkit_migration_single = client:ImagesSourcingkitMigrationSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local images_sourcingkit_migration_single, err = client:ImagesSourcingkitMigrationSingle():load({ account_id = "account_id", migration_id = "migration_id" })
```


### ImagesSourcingkitSource

Create an instance: `local images_sourcingkit_source = client:ImagesSourcingkitSource(nil)`

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
| `secret` | `table` | Storage credentials for accessing the bucket. |
| `vendor` | `string` | The cloud storage vendor of the source bucket. |

#### Example: Create

```lua
local images_sourcingkit_source, err = client:ImagesSourcingkitSource():create({
  account_id = "example_account_id", -- string
  bucket = "example_bucket", -- string
  name = "example_name", -- string
  secret = {}, -- table
  vendor = "example_vendor", -- string
})
```


### ImagesSourcingkitSourceList

Create an instance: `local images_sourcingkit_source_list = client:ImagesSourcingkitSourceList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```lua
local images_sourcingkit_source_lists, err = client:ImagesSourcingkitSourceList():list()
```


### ImagesSourcingkitSourceSingle

Create an instance: `local images_sourcingkit_source_single = client:ImagesSourcingkitSourceSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local images_sourcingkit_source_single, err = client:ImagesSourcingkitSourceSingle():load({ account_id = "account_id", source_id = "source_id" })
```


### Migration

Create an instance: `local migration = client:Migration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Source

Create an instance: `local source = client:Source(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### V1n

Create an instance: `local v1n = client:V1n(nil)`

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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-images_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-images_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local imagesimageresponsesingle = client:ImagesImageResponseSingle()
imagesimageresponsesingle:load({ account_id = "example", image_id = "example" })

-- imagesimageresponsesingle:data_get() now returns the imagesimageresponsesingle data from the last load
-- imagesimageresponsesingle:match_get() returns the last match criteria
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
