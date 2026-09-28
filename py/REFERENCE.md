# CloudflareImages Python SDK Reference

Complete API reference for the CloudflareImages Python SDK.


## CloudflareImagesSDK

### Constructor

```python
from cloudflareimages_sdk import CloudflareImagesSDK

client = CloudflareImagesSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareImagesSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareImagesSDK.test()
```


### Instance Methods

#### `CloudflareImage(data=None)`

Create a new `CloudflareImageEntity` instance. Pass `None` for no initial data.

#### `Image(data=None)`

Create a new `ImageEntity` instance. Pass `None` for no initial data.

#### `ImagesDeleted(data=None)`

Create a new `ImagesDeletedEntity` instance. Pass `None` for no initial data.

#### `ImagesImageDirectUpload(data=None)`

Create a new `ImagesImageDirectUploadEntity` instance. Pass `None` for no initial data.

#### `ImagesImageKeyResponseCollection(data=None)`

Create a new `ImagesImageKeyResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `ImagesImageResponseSingle(data=None)`

Create a new `ImagesImageResponseSingleEntity` instance. Pass `None` for no initial data.

#### `ImagesImageVariantFlat(data=None)`

Create a new `ImagesImageVariantFlatEntity` instance. Pass `None` for no initial data.

#### `ImagesImageVariantList(data=None)`

Create a new `ImagesImageVariantListEntity` instance. Pass `None` for no initial data.

#### `ImagesImageVariantSimple(data=None)`

Create a new `ImagesImageVariantSimpleEntity` instance. Pass `None` for no initial data.

#### `ImagesImagesList(data=None)`

Create a new `ImagesImagesListEntity` instance. Pass `None` for no initial data.

#### `ImagesImagesStat(data=None)`

Create a new `ImagesImagesStatEntity` instance. Pass `None` for no initial data.

#### `ImagesMetadataKey(data=None)`

Create a new `ImagesMetadataKeyEntity` instance. Pass `None` for no initial data.

#### `ImagesSourcingkitConnectivityCheck(data=None)`

Create a new `ImagesSourcingkitConnectivityCheckEntity` instance. Pass `None` for no initial data.

#### `ImagesSourcingkitMigration(data=None)`

Create a new `ImagesSourcingkitMigrationEntity` instance. Pass `None` for no initial data.

#### `ImagesSourcingkitMigrationList(data=None)`

Create a new `ImagesSourcingkitMigrationListEntity` instance. Pass `None` for no initial data.

#### `ImagesSourcingkitMigrationLogList(data=None)`

Create a new `ImagesSourcingkitMigrationLogListEntity` instance. Pass `None` for no initial data.

#### `ImagesSourcingkitMigrationProgress(data=None)`

Create a new `ImagesSourcingkitMigrationProgressEntity` instance. Pass `None` for no initial data.

#### `ImagesSourcingkitMigrationSingle(data=None)`

Create a new `ImagesSourcingkitMigrationSingleEntity` instance. Pass `None` for no initial data.

#### `ImagesSourcingkitSource(data=None)`

Create a new `ImagesSourcingkitSourceEntity` instance. Pass `None` for no initial data.

#### `ImagesSourcingkitSourceList(data=None)`

Create a new `ImagesSourcingkitSourceListEntity` instance. Pass `None` for no initial data.

#### `ImagesSourcingkitSourceSingle(data=None)`

Create a new `ImagesSourcingkitSourceSingleEntity` instance. Pass `None` for no initial data.

#### `Migration(data=None)`

Create a new `MigrationEntity` instance. Pass `None` for no initial data.

#### `Source(data=None)`

Create a new `SourceEntity` instance. Pass `None` for no initial data.

#### `V1n(data=None)`

Create a new `V1nEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CloudflareImageEntity

```python
cloudflare_image = client.CloudflareImage()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CloudflareImage().load({"account_id": "account_id", "v1_id": "v1_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloudflareImageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImageEntity

```python
image = client.Image()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `str` | No |  |
| `flows` | `list` | Yes |  |
| `version` | `float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Image().load({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Image().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesDeletedEntity

```python
images_deleted = client.ImagesDeleted()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ImagesDeleted().remove({"account_id": "account_id", "variant_id": "variant_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesDeletedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesImageDirectUploadEntity

```python
images_image_direct_upload = client.ImagesImageDirectUpload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `str` | No | The date after which the upload will not be accepted. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ImagesImageDirectUpload().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageDirectUploadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesImageKeyResponseCollectionEntity

```python
images_image_key_response_collection = client.ImagesImageKeyResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImagesImageKeyResponseCollection().list({"account_id": "example"})
for images_image_key_response_collection in results:
    print(images_image_key_response_collection)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ImagesImageKeyResponseCollection().remove({"account_id": "account_id", "signing_key_name": "signing_key_name"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ImagesImageKeyResponseCollection().update({
    "account_id": "account_id",
    "signing_key_name": "signing_key_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageKeyResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesImageResponseSingleEntity

```python
images_image_response_single = client.ImagesImageResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | `str` | No | Can set the creator field with an internal user ID. |
| `metadata` | `dict` | No | User modifiable key-value store. |
| `requireSignedURLs` | `bool` | No | Indicates whether the image can be accessed using only its UID. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ImagesImageResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ImagesImageResponseSingle().load({"account_id": "account_id", "image_id": "image_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ImagesImageResponseSingle().update({
    "account_id": "account_id",
    "image_id": "image_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesImageVariantFlatEntity

```python
images_image_variant_flat = client.ImagesImageVariantFlat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ImagesImageVariantFlat().load({"account_id": "account_id", "variant_id": "variant_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageVariantFlatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesImageVariantListEntity

```python
images_image_variant_list = client.ImagesImageVariantList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImagesImageVariantList().list({"account_id": "example"})
for images_image_variant_list in results:
    print(images_image_variant_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageVariantListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesImageVariantSimpleEntity

```python
images_image_variant_simple = client.ImagesImageVariantSimple()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes |  |
| `neverRequireSignedURLs` | `bool` | No | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `dict` | Yes | Allows you to define image resizing sizes for different use cases. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ImagesImageVariantSimple().create({
    "account_id": "example_account_id",  # str
    "id": "example_id",  # str
    "options": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ImagesImageVariantSimple().load({"account_id": "account_id", "variant_id": "variant_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ImagesImageVariantSimple().update({
    "account_id": "account_id",
    "variant_id": "variant_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImageVariantSimpleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesImagesListEntity

```python
images_images_list = client.ImagesImagesList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | - | Yes |
| `success` | - | - |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImagesImagesList().list({"account_id": "example"})
for images_images_list in results:
    print(images_images_list)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ImagesImagesList().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImagesListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesImagesStatEntity

```python
images_images_stat = client.ImagesImagesStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ImagesImagesStat().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesImagesStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesMetadataKeyEntity

```python
images_metadata_key = client.ImagesMetadataKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImagesMetadataKey().list({"account_id": "example"})
for images_metadata_key in results:
    print(images_metadata_key)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesMetadataKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesSourcingkitConnectivityCheckEntity

```python
images_sourcingkit_connectivity_check = client.ImagesSourcingkitConnectivityCheck()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `str` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `str` | Yes | The name of the storage bucket. |
| `region` | `str` | No | The region hint for the bucket (S3 only). |
| `result` | `dict` | No |  |
| `secret` | `dict` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `str` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ImagesSourcingkitConnectivityCheck().create({
    "account_id": "example_account_id",  # str
    "bucket": "example_bucket",  # str
    "secret": {},  # dict
    "vendor": "example_vendor",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ImagesSourcingkitConnectivityCheck().load({"account_id": "account_id", "source_id": "source_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitConnectivityCheckEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesSourcingkitMigrationEntity

```python
images_sourcingkit_migration = client.ImagesSourcingkitMigration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conflictBehaviour` | `str` | No | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `list` | No | Content types to skip during migration. |
| `pathPrefix` | `str` | No | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `str` | No | Only import objects under this prefix in the source bucket. |
| `sourceId` | `str` | Yes | The identifier of the source to migrate from. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ImagesSourcingkitMigration().create({
    "account_id": "example_account_id",  # str
    "sourceId": "example_sourceId",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitMigrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesSourcingkitMigrationListEntity

```python
images_sourcingkit_migration_list = client.ImagesSourcingkitMigrationList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImagesSourcingkitMigrationList().list({"account_id": "example"})
for images_sourcingkit_migration_list in results:
    print(images_sourcingkit_migration_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitMigrationListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesSourcingkitMigrationLogListEntity

```python
images_sourcingkit_migration_log_list = client.ImagesSourcingkitMigrationLogList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImagesSourcingkitMigrationLogList().list({"account_id": "example", "migration_id": "example"})
for images_sourcingkit_migration_log_list in results:
    print(images_sourcingkit_migration_log_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitMigrationLogListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesSourcingkitMigrationProgressEntity

```python
images_sourcingkit_migration_progress = client.ImagesSourcingkitMigrationProgress()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ImagesSourcingkitMigrationProgress().load({"account_id": "account_id", "migration_id": "migration_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitMigrationProgressEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesSourcingkitMigrationSingleEntity

```python
images_sourcingkit_migration_single = client.ImagesSourcingkitMigrationSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ImagesSourcingkitMigrationSingle().load({"account_id": "account_id", "migration_id": "migration_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ImagesSourcingkitMigrationSingle().update({
    "account_id": "account_id",
    "migration_id": "migration_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitMigrationSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesSourcingkitSourceEntity

```python
images_sourcingkit_source = client.ImagesSourcingkitSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `str` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `str` | Yes | The name of the storage bucket. |
| `id` | `str` | No |  |
| `name` | `str` | Yes | A human-readable name for the source. |
| `secret` | `dict` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `str` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ImagesSourcingkitSource().create({
    "account_id": "example_account_id",  # str
    "bucket": "example_bucket",  # str
    "name": "example_name",  # str
    "secret": {},  # dict
    "vendor": "example_vendor",  # str
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ImagesSourcingkitSource().update({
    "account_id": "account_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitSourceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesSourcingkitSourceListEntity

```python
images_sourcingkit_source_list = client.ImagesSourcingkitSourceList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ImagesSourcingkitSourceList().list({"account_id": "example"})
for images_sourcingkit_source_list in results:
    print(images_sourcingkit_source_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitSourceListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImagesSourcingkitSourceSingleEntity

```python
images_sourcingkit_source_single = client.ImagesSourcingkitSourceSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ImagesSourcingkitSourceSingle().load({"account_id": "account_id", "source_id": "source_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImagesSourcingkitSourceSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MigrationEntity

```python
migration = client.Migration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Migration().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MigrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SourceEntity

```python
source = client.Source()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Source().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SourceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## V1nEntity

```python
v1n = client.V1n()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.V1n().remove({"account_id": "account_id", "image_id": "image_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `V1nEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareImagesSDK({
    "feature": {
        "test": {"active": True},
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

