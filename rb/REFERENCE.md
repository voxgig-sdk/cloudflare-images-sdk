# CloudflareImages Ruby SDK Reference

Complete API reference for the CloudflareImages Ruby SDK.


## CloudflareImagesSDK

### Constructor

```ruby
require_relative 'CloudflareImages_sdk'

client = CloudflareImagesSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareImagesSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareImagesSDK.test
```


### Instance Methods

#### `CloudflareImage(data = nil)`

Create a new `CloudflareImage` entity instance. Pass `nil` for no initial data.

#### `Image(data = nil)`

Create a new `Image` entity instance. Pass `nil` for no initial data.

#### `ImagesDeleted(data = nil)`

Create a new `ImagesDeleted` entity instance. Pass `nil` for no initial data.

#### `ImagesImageDirectUpload(data = nil)`

Create a new `ImagesImageDirectUpload` entity instance. Pass `nil` for no initial data.

#### `ImagesImageKeyResponseCollection(data = nil)`

Create a new `ImagesImageKeyResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ImagesImageResponseSingle(data = nil)`

Create a new `ImagesImageResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ImagesImageVariantFlat(data = nil)`

Create a new `ImagesImageVariantFlat` entity instance. Pass `nil` for no initial data.

#### `ImagesImageVariantList(data = nil)`

Create a new `ImagesImageVariantList` entity instance. Pass `nil` for no initial data.

#### `ImagesImageVariantSimple(data = nil)`

Create a new `ImagesImageVariantSimple` entity instance. Pass `nil` for no initial data.

#### `ImagesImagesList(data = nil)`

Create a new `ImagesImagesList` entity instance. Pass `nil` for no initial data.

#### `ImagesImagesStat(data = nil)`

Create a new `ImagesImagesStat` entity instance. Pass `nil` for no initial data.

#### `ImagesMetadataKey(data = nil)`

Create a new `ImagesMetadataKey` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitConnectivityCheck(data = nil)`

Create a new `ImagesSourcingkitConnectivityCheck` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigration(data = nil)`

Create a new `ImagesSourcingkitMigration` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationList(data = nil)`

Create a new `ImagesSourcingkitMigrationList` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationLogList(data = nil)`

Create a new `ImagesSourcingkitMigrationLogList` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationProgress(data = nil)`

Create a new `ImagesSourcingkitMigrationProgress` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationSingle(data = nil)`

Create a new `ImagesSourcingkitMigrationSingle` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitSource(data = nil)`

Create a new `ImagesSourcingkitSource` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitSourceList(data = nil)`

Create a new `ImagesSourcingkitSourceList` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitSourceSingle(data = nil)`

Create a new `ImagesSourcingkitSourceSingle` entity instance. Pass `nil` for no initial data.

#### `Migration(data = nil)`

Create a new `Migration` entity instance. Pass `nil` for no initial data.

#### `Source(data = nil)`

Create a new `Source` entity instance. Pass `nil` for no initial data.

#### `V1n(data = nil)`

Create a new `V1n` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CloudflareImageEntity

```ruby
cloudflare_image = client.CloudflareImage
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CloudflareImage.load({ "account_id" => "account_id", "v1_id" => "v1_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CloudflareImageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImageEntity

```ruby
image = client.Image
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `String` | No |  |
| `flows` | `Array` | Yes |  |
| `version` | `Float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Image.load({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Image.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesDeletedEntity

```ruby
images_deleted = client.ImagesDeleted
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesDeleted.remove({ "account_id" => "account_id", "variant_id" => "variant_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesDeletedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesImageDirectUploadEntity

```ruby
images_image_direct_upload = client.ImagesImageDirectUpload
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `String` | No | The date after which the upload will not be accepted. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ImagesImageDirectUpload.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesImageDirectUploadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesImageKeyResponseCollectionEntity

```ruby
images_image_key_response_collection = client.ImagesImageKeyResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImagesImageKeyResponseCollection.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesImageKeyResponseCollection.remove({ "account_id" => "account_id", "signing_key_name" => "signing_key_name" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ImagesImageKeyResponseCollection.update({
  "account_id" => "account_id",
  "signing_key_name" => "signing_key_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesImageKeyResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesImageResponseSingleEntity

```ruby
images_image_response_single = client.ImagesImageResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | `String` | No | Can set the creator field with an internal user ID. |
| `metadata` | `Hash` | No | User modifiable key-value store. |
| `requireSignedURLs` | `Boolean` | No | Indicates whether the image can be accessed using only its UID. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ImagesImageResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesImageResponseSingle.load({ "account_id" => "account_id", "image_id" => "image_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ImagesImageResponseSingle.update({
  "account_id" => "account_id",
  "image_id" => "image_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesImageResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesImageVariantFlatEntity

```ruby
images_image_variant_flat = client.ImagesImageVariantFlat
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesImageVariantFlat.load({ "account_id" => "account_id", "variant_id" => "variant_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesImageVariantFlatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesImageVariantListEntity

```ruby
images_image_variant_list = client.ImagesImageVariantList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImagesImageVariantList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesImageVariantListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesImageVariantSimpleEntity

```ruby
images_image_variant_simple = client.ImagesImageVariantSimple
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes |  |
| `neverRequireSignedURLs` | `Boolean` | No | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `Hash` | Yes | Allows you to define image resizing sizes for different use cases. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ImagesImageVariantSimple.create({
  "account_id" => "example_account_id", # String
  "id" => "example_id", # String
  "options" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesImageVariantSimple.load({ "account_id" => "account_id", "variant_id" => "variant_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ImagesImageVariantSimple.update({
  "account_id" => "account_id",
  "variant_id" => "variant_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesImageVariantSimpleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesImagesListEntity

```ruby
images_images_list = client.ImagesImagesList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | - | Yes |
| `success` | - | - |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImagesImagesList.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesImagesList.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesImagesListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesImagesStatEntity

```ruby
images_images_stat = client.ImagesImagesStat
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesImagesStat.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesImagesStatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesMetadataKeyEntity

```ruby
images_metadata_key = client.ImagesMetadataKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImagesMetadataKey.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesMetadataKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesSourcingkitConnectivityCheckEntity

```ruby
images_sourcingkit_connectivity_check = client.ImagesSourcingkitConnectivityCheck
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `String` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `String` | Yes | The name of the storage bucket. |
| `region` | `String` | No | The region hint for the bucket (S3 only). |
| `result` | `Hash` | No |  |
| `secret` | `Hash` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `String` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ImagesSourcingkitConnectivityCheck.create({
  "account_id" => "example_account_id", # String
  "bucket" => "example_bucket", # String
  "secret" => {}, # Hash
  "vendor" => "example_vendor", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesSourcingkitConnectivityCheck.load({ "account_id" => "account_id", "source_id" => "source_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesSourcingkitConnectivityCheckEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesSourcingkitMigrationEntity

```ruby
images_sourcingkit_migration = client.ImagesSourcingkitMigration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conflictBehaviour` | `String` | No | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `Array` | No | Content types to skip during migration. |
| `pathPrefix` | `String` | No | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `String` | No | Only import objects under this prefix in the source bucket. |
| `sourceId` | `String` | Yes | The identifier of the source to migrate from. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ImagesSourcingkitMigration.create({
  "account_id" => "example_account_id", # String
  "sourceId" => "example_sourceId", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesSourcingkitMigrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesSourcingkitMigrationListEntity

```ruby
images_sourcingkit_migration_list = client.ImagesSourcingkitMigrationList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImagesSourcingkitMigrationList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesSourcingkitMigrationListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesSourcingkitMigrationLogListEntity

```ruby
images_sourcingkit_migration_log_list = client.ImagesSourcingkitMigrationLogList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImagesSourcingkitMigrationLogList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesSourcingkitMigrationLogListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesSourcingkitMigrationProgressEntity

```ruby
images_sourcingkit_migration_progress = client.ImagesSourcingkitMigrationProgress
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesSourcingkitMigrationProgress.load({ "account_id" => "account_id", "migration_id" => "migration_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesSourcingkitMigrationProgressEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesSourcingkitMigrationSingleEntity

```ruby
images_sourcingkit_migration_single = client.ImagesSourcingkitMigrationSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesSourcingkitMigrationSingle.load({ "account_id" => "account_id", "migration_id" => "migration_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ImagesSourcingkitMigrationSingle.update({
  "account_id" => "account_id",
  "migration_id" => "migration_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesSourcingkitMigrationSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesSourcingkitSourceEntity

```ruby
images_sourcingkit_source = client.ImagesSourcingkitSource
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `String` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `String` | Yes | The name of the storage bucket. |
| `id` | `String` | No |  |
| `name` | `String` | Yes | A human-readable name for the source. |
| `secret` | `Hash` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `String` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ImagesSourcingkitSource.create({
  "account_id" => "example_account_id", # String
  "bucket" => "example_bucket", # String
  "name" => "example_name", # String
  "secret" => {}, # Hash
  "vendor" => "example_vendor", # String
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ImagesSourcingkitSource.update({
  "account_id" => "account_id",
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesSourcingkitSourceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesSourcingkitSourceListEntity

```ruby
images_sourcingkit_source_list = client.ImagesSourcingkitSourceList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ImagesSourcingkitSourceList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesSourcingkitSourceListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ImagesSourcingkitSourceSingleEntity

```ruby
images_sourcingkit_source_single = client.ImagesSourcingkitSourceSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ImagesSourcingkitSourceSingle.load({ "account_id" => "account_id", "source_id" => "source_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ImagesSourcingkitSourceSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MigrationEntity

```ruby
migration = client.Migration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Migration.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SourceEntity

```ruby
source = client.Source
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Source.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SourceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## V1nEntity

```ruby
v1n = client.V1n
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.V1n.remove({ "account_id" => "account_id", "image_id" => "image_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `V1nEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareImagesSDK.new({
  "feature" => {
    "test" => { "active" => true },
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

