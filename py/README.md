# CloudflareImages Python SDK



The Python SDK for the CloudflareImages API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.CloudflareImage()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-images-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflareimages_sdk import CloudflareImagesSDK

client = CloudflareImagesSDK({
    "apikey": os.environ.get("CLOUDFLARE_IMAGES_APIKEY"),
})
```

### 3. Load an imagessourcingkitconnectivitycheck

ImagesSourcingkitConnectivityCheck is nested under account, so provide the `account_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    imagessourcingkitconnectivitycheck = client.ImagesSourcingkitConnectivityCheck().load({"account_id": "example_account_id", "source_id": "example_source_id"})
    print(imagessourcingkitconnectivitycheck)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    imagesimageresponsesingle = client.ImagesImageResponseSingle().load({"account_id": "example", "image_id": "example"})
    print(imagesimageresponsesingle)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareImagesSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
imagesimageresponsesingle = client.ImagesImageResponseSingle().load({"account_id": "example", "image_id": "example"})
# imagesimageresponsesingle contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareImagesSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CloudflareImagesSDK

```python
from cloudflareimages_sdk import CloudflareImagesSDK

client = CloudflareImagesSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareImagesSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareImagesSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `cloudflare_image = client.CloudflareImage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
cloudflare_image = client.CloudflareImage().load({"account_id": "account_id", "v1_id": "v1_id"})
```


### Image

Create an instance: `image = client.Image()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `etag` | `str` |  |
| `flows` | `list` |  |
| `version` | `float` |  |

#### Example: Load

```python
image = client.Image().load({"zone_id": "zone_id"})
```


### ImagesDeleted

Create an instance: `images_deleted = client.ImagesDeleted()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ImagesImageDirectUpload

Create an instance: `images_image_direct_upload = client.ImagesImageDirectUpload()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `str` | The date after which the upload will not be accepted. |

#### Example: Create

```python
images_image_direct_upload = client.ImagesImageDirectUpload().create({
    "account_id": "example_account_id",  # str
})
```


### ImagesImageKeyResponseCollection

Create an instance: `images_image_key_response_collection = client.ImagesImageKeyResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```python
images_image_key_response_collections = client.ImagesImageKeyResponseCollection().list({"account_id": "example"})
```


### ImagesImageResponseSingle

Create an instance: `images_image_response_single = client.ImagesImageResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `creator` | `str` | Can set the creator field with an internal user ID. |
| `metadata` | `dict` | User modifiable key-value store. |
| `requireSignedURLs` | `bool` | Indicates whether the image can be accessed using only its UID. |
| `result` | `dict` |  |

#### Example: Load

```python
images_image_response_single = client.ImagesImageResponseSingle().load({"account_id": "account_id", "image_id": "image_id"})
```

#### Example: Create

```python
images_image_response_single = client.ImagesImageResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```


### ImagesImageVariantFlat

Create an instance: `images_image_variant_flat = client.ImagesImageVariantFlat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
images_image_variant_flat = client.ImagesImageVariantFlat().load({"account_id": "account_id", "variant_id": "variant_id"})
```


### ImagesImageVariantList

Create an instance: `images_image_variant_list = client.ImagesImageVariantList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```python
images_image_variant_lists = client.ImagesImageVariantList().list({"account_id": "example"})
```


### ImagesImageVariantSimple

Create an instance: `images_image_variant_simple = client.ImagesImageVariantSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `neverRequireSignedURLs` | `bool` | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `dict` | Allows you to define image resizing sizes for different use cases. |
| `result` | `dict` |  |

#### Example: Load

```python
images_image_variant_simple = client.ImagesImageVariantSimple().load({"account_id": "account_id", "variant_id": "variant_id"})
```

#### Example: Create

```python
images_image_variant_simple = client.ImagesImageVariantSimple().create({
    "account_id": "example_account_id",  # str
    "id": "example_id",  # str
    "options": {},  # dict
})
```


### ImagesImagesList

Create an instance: `images_images_list = client.ImagesImagesList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```python
images_images_list = client.ImagesImagesList().load({"account_id": "account_id"})
```

#### Example: List

```python
images_images_lists = client.ImagesImagesList().list({"account_id": "example"})
```


### ImagesImagesStat

Create an instance: `images_images_stat = client.ImagesImagesStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
images_images_stat = client.ImagesImagesStat().load({"account_id": "account_id"})
```


### ImagesMetadataKey

Create an instance: `images_metadata_key = client.ImagesMetadataKey()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```python
images_metadata_keys = client.ImagesMetadataKey().list({"account_id": "example"})
```


### ImagesSourcingkitConnectivityCheck

Create an instance: `images_sourcingkit_connectivity_check = client.ImagesSourcingkitConnectivityCheck()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `str` | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `str` | The name of the storage bucket. |
| `region` | `str` | The region hint for the bucket (S3 only). |
| `result` | `dict` |  |
| `secret` | `dict` | Storage credentials for accessing the bucket. |
| `vendor` | `str` | The cloud storage vendor of the source bucket. |

#### Example: Load

```python
images_sourcingkit_connectivity_check = client.ImagesSourcingkitConnectivityCheck().load({"account_id": "account_id", "source_id": "source_id"})
```

#### Example: Create

```python
images_sourcingkit_connectivity_check = client.ImagesSourcingkitConnectivityCheck().create({
    "account_id": "example_account_id",  # str
    "bucket": "example_bucket",  # str
    "secret": {},  # dict
    "vendor": "example_vendor",  # str
})
```


### ImagesSourcingkitMigration

Create an instance: `images_sourcingkit_migration = client.ImagesSourcingkitMigration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conflictBehaviour` | `str` | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `list` | Content types to skip during migration. |
| `pathPrefix` | `str` | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `str` | Only import objects under this prefix in the source bucket. |
| `sourceId` | `str` | The identifier of the source to migrate from. |

#### Example: Create

```python
images_sourcingkit_migration = client.ImagesSourcingkitMigration().create({
    "account_id": "example_account_id",  # str
    "sourceId": "example_sourceId",  # str
})
```


### ImagesSourcingkitMigrationList

Create an instance: `images_sourcingkit_migration_list = client.ImagesSourcingkitMigrationList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```python
images_sourcingkit_migration_lists = client.ImagesSourcingkitMigrationList().list({"account_id": "example"})
```


### ImagesSourcingkitMigrationLogList

Create an instance: `images_sourcingkit_migration_log_list = client.ImagesSourcingkitMigrationLogList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```python
images_sourcingkit_migration_log_lists = client.ImagesSourcingkitMigrationLogList().list({"account_id": "example", "migration_id": "example"})
```


### ImagesSourcingkitMigrationProgress

Create an instance: `images_sourcingkit_migration_progress = client.ImagesSourcingkitMigrationProgress()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
images_sourcingkit_migration_progress = client.ImagesSourcingkitMigrationProgress().load({"account_id": "account_id", "migration_id": "migration_id"})
```


### ImagesSourcingkitMigrationSingle

Create an instance: `images_sourcingkit_migration_single = client.ImagesSourcingkitMigrationSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
images_sourcingkit_migration_single = client.ImagesSourcingkitMigrationSingle().load({"account_id": "account_id", "migration_id": "migration_id"})
```


### ImagesSourcingkitSource

Create an instance: `images_sourcingkit_source = client.ImagesSourcingkitSource()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `str` | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `str` | The name of the storage bucket. |
| `id` | `str` |  |
| `name` | `str` | A human-readable name for the source. |
| `secret` | `dict` | Storage credentials for accessing the bucket. |
| `vendor` | `str` | The cloud storage vendor of the source bucket. |

#### Example: Create

```python
images_sourcingkit_source = client.ImagesSourcingkitSource().create({
    "account_id": "example_account_id",  # str
    "bucket": "example_bucket",  # str
    "name": "example_name",  # str
    "secret": {},  # dict
    "vendor": "example_vendor",  # str
})
```


### ImagesSourcingkitSourceList

Create an instance: `images_sourcingkit_source_list = client.ImagesSourcingkitSourceList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```python
images_sourcingkit_source_lists = client.ImagesSourcingkitSourceList().list({"account_id": "example"})
```


### ImagesSourcingkitSourceSingle

Create an instance: `images_sourcingkit_source_single = client.ImagesSourcingkitSourceSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
images_sourcingkit_source_single = client.ImagesSourcingkitSourceSingle().load({"account_id": "account_id", "source_id": "source_id"})
```


### Migration

Create an instance: `migration = client.Migration()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Source

Create an instance: `source = client.Source()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### V1n

Create an instance: `v1n = client.V1n()`

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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflareimages_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflareimages_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
imagesimageresponsesingle = client.ImagesImageResponseSingle()
imagesimageresponsesingle.load({"account_id": "example", "image_id": "example"})

# imagesimageresponsesingle.data_get() now returns the imagesimageresponsesingle data from the last load
# imagesimageresponsesingle.match_get() returns the last match criteria
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
