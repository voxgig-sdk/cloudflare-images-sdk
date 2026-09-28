# CloudflareImages Lua SDK Reference

Complete API reference for the CloudflareImages Lua SDK.


## CloudflareImagesSDK

### Constructor

```lua
local sdk = require("cloudflare-images_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `CloudflareImage(data)`

Create a new `CloudflareImage` entity instance. Pass `nil` for no initial data.

#### `Image(data)`

Create a new `Image` entity instance. Pass `nil` for no initial data.

#### `ImagesDeleted(data)`

Create a new `ImagesDeleted` entity instance. Pass `nil` for no initial data.

#### `ImagesImageDirectUpload(data)`

Create a new `ImagesImageDirectUpload` entity instance. Pass `nil` for no initial data.

#### `ImagesImageKeyResponseCollection(data)`

Create a new `ImagesImageKeyResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ImagesImageResponseSingle(data)`

Create a new `ImagesImageResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ImagesImageVariantFlat(data)`

Create a new `ImagesImageVariantFlat` entity instance. Pass `nil` for no initial data.

#### `ImagesImageVariantList(data)`

Create a new `ImagesImageVariantList` entity instance. Pass `nil` for no initial data.

#### `ImagesImageVariantSimple(data)`

Create a new `ImagesImageVariantSimple` entity instance. Pass `nil` for no initial data.

#### `ImagesImagesList(data)`

Create a new `ImagesImagesList` entity instance. Pass `nil` for no initial data.

#### `ImagesImagesStat(data)`

Create a new `ImagesImagesStat` entity instance. Pass `nil` for no initial data.

#### `ImagesMetadataKey(data)`

Create a new `ImagesMetadataKey` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitConnectivityCheck(data)`

Create a new `ImagesSourcingkitConnectivityCheck` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigration(data)`

Create a new `ImagesSourcingkitMigration` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationList(data)`

Create a new `ImagesSourcingkitMigrationList` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationLogList(data)`

Create a new `ImagesSourcingkitMigrationLogList` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationProgress(data)`

Create a new `ImagesSourcingkitMigrationProgress` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationSingle(data)`

Create a new `ImagesSourcingkitMigrationSingle` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitSource(data)`

Create a new `ImagesSourcingkitSource` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitSourceList(data)`

Create a new `ImagesSourcingkitSourceList` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitSourceSingle(data)`

Create a new `ImagesSourcingkitSourceSingle` entity instance. Pass `nil` for no initial data.

#### `Migration(data)`

Create a new `Migration` entity instance. Pass `nil` for no initial data.

#### `Source(data)`

Create a new `Source` entity instance. Pass `nil` for no initial data.

#### `V1n(data)`

Create a new `V1n` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CloudflareImageEntity

```lua
local cloudflare_image = client:CloudflareImage(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CloudflareImage():load({ account_id = "account_id", v1_id = "v1_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudflareImageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImageEntity

```lua
local image = client:Image(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `string` | No |  |
| `flows` | `table` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Image():load({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Image():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesDeletedEntity

```lua
local images_deleted = client:ImagesDeleted(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ImagesDeleted():remove({ account_id = "account_id", variant_id = "variant_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesDeletedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesImageDirectUploadEntity

```lua
local images_image_direct_upload = client:ImagesImageDirectUpload(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `string` | No | The date after which the upload will not be accepted. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ImagesImageDirectUpload():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageDirectUploadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesImageKeyResponseCollectionEntity

```lua
local images_image_key_response_collection = client:ImagesImageKeyResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ImagesImageKeyResponseCollection():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ImagesImageKeyResponseCollection():remove({ account_id = "account_id", signing_key_name = "signing_key_name" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ImagesImageKeyResponseCollection():update({
  account_id = "account_id",
  signing_key_name = "signing_key_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageKeyResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesImageResponseSingleEntity

```lua
local images_image_response_single = client:ImagesImageResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | `string` | No | Can set the creator field with an internal user ID. |
| `metadata` | `table` | No | User modifiable key-value store. |
| `requireSignedURLs` | `boolean` | No | Indicates whether the image can be accessed using only its UID. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ImagesImageResponseSingle():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ImagesImageResponseSingle():load({ account_id = "account_id", image_id = "image_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ImagesImageResponseSingle():update({
  account_id = "account_id",
  image_id = "image_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesImageVariantFlatEntity

```lua
local images_image_variant_flat = client:ImagesImageVariantFlat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ImagesImageVariantFlat():load({ account_id = "account_id", variant_id = "variant_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageVariantFlatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesImageVariantListEntity

```lua
local images_image_variant_list = client:ImagesImageVariantList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ImagesImageVariantList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageVariantListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesImageVariantSimpleEntity

```lua
local images_image_variant_simple = client:ImagesImageVariantSimple(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `neverRequireSignedURLs` | `boolean` | No | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `table` | Yes | Allows you to define image resizing sizes for different use cases. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ImagesImageVariantSimple():create({
  account_id = --[[ string ]],
  id = --[[ string ]],
  options = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ImagesImageVariantSimple():load({ account_id = "account_id", variant_id = "variant_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ImagesImageVariantSimple():update({
  account_id = "account_id",
  variant_id = "variant_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageVariantSimpleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesImagesListEntity

```lua
local images_images_list = client:ImagesImagesList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | - | Yes |
| `success` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ImagesImagesList():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ImagesImagesList():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImagesListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesImagesStatEntity

```lua
local images_images_stat = client:ImagesImagesStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ImagesImagesStat():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImagesStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesMetadataKeyEntity

```lua
local images_metadata_key = client:ImagesMetadataKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ImagesMetadataKey():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesMetadataKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesSourcingkitConnectivityCheckEntity

```lua
local images_sourcingkit_connectivity_check = client:ImagesSourcingkitConnectivityCheck(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | Yes | The name of the storage bucket. |
| `region` | `string` | No | The region hint for the bucket (S3 only). |
| `result` | `table` | No |  |
| `secret` | `table` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `string` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ImagesSourcingkitConnectivityCheck():create({
  account_id = --[[ string ]],
  bucket = --[[ string ]],
  secret = --[[ table ]],
  vendor = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ImagesSourcingkitConnectivityCheck():load({ account_id = "account_id", source_id = "source_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitConnectivityCheckEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesSourcingkitMigrationEntity

```lua
local images_sourcingkit_migration = client:ImagesSourcingkitMigration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conflictBehaviour` | `string` | No | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `table` | No | Content types to skip during migration. |
| `pathPrefix` | `string` | No | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `string` | No | Only import objects under this prefix in the source bucket. |
| `sourceId` | `string` | Yes | The identifier of the source to migrate from. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ImagesSourcingkitMigration():create({
  account_id = --[[ string ]],
  sourceId = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitMigrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesSourcingkitMigrationListEntity

```lua
local images_sourcingkit_migration_list = client:ImagesSourcingkitMigrationList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ImagesSourcingkitMigrationList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitMigrationListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesSourcingkitMigrationLogListEntity

```lua
local images_sourcingkit_migration_log_list = client:ImagesSourcingkitMigrationLogList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ImagesSourcingkitMigrationLogList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitMigrationLogListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesSourcingkitMigrationProgressEntity

```lua
local images_sourcingkit_migration_progress = client:ImagesSourcingkitMigrationProgress(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ImagesSourcingkitMigrationProgress():load({ account_id = "account_id", migration_id = "migration_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitMigrationProgressEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesSourcingkitMigrationSingleEntity

```lua
local images_sourcingkit_migration_single = client:ImagesSourcingkitMigrationSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ImagesSourcingkitMigrationSingle():load({ account_id = "account_id", migration_id = "migration_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ImagesSourcingkitMigrationSingle():update({
  account_id = "account_id",
  migration_id = "migration_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitMigrationSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesSourcingkitSourceEntity

```lua
local images_sourcingkit_source = client:ImagesSourcingkitSource(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | Yes | The name of the storage bucket. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | A human-readable name for the source. |
| `secret` | `table` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `string` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ImagesSourcingkitSource():create({
  account_id = --[[ string ]],
  bucket = --[[ string ]],
  name = --[[ string ]],
  secret = --[[ table ]],
  vendor = --[[ string ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ImagesSourcingkitSource():update({
  account_id = "account_id",
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitSourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesSourcingkitSourceListEntity

```lua
local images_sourcingkit_source_list = client:ImagesSourcingkitSourceList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ImagesSourcingkitSourceList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitSourceListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImagesSourcingkitSourceSingleEntity

```lua
local images_sourcingkit_source_single = client:ImagesSourcingkitSourceSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ImagesSourcingkitSourceSingle():load({ account_id = "account_id", source_id = "source_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitSourceSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MigrationEntity

```lua
local migration = client:Migration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Migration():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SourceEntity

```lua
local source = client:Source(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Source():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## V1nEntity

```lua
local v1n = client:V1n(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:V1n():remove({ account_id = "account_id", image_id = "image_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `V1nEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
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

