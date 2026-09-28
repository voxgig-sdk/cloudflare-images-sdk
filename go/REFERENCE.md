# CloudflareImages Golang SDK Reference

Complete API reference for the CloudflareImages Golang SDK.


## CloudflareImagesSDK

### Constructor

```go
func NewCloudflareImagesSDK(options map[string]any) *CloudflareImagesSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareImagesSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareImagesSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `CloudflareImage(data map[string]any) CloudflareImagesEntity`

Create a new `CloudflareImage` entity instance. Pass `nil` for no initial data.

#### `Image(data map[string]any) CloudflareImagesEntity`

Create a new `Image` entity instance. Pass `nil` for no initial data.

#### `ImagesDeleted(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesDeleted` entity instance. Pass `nil` for no initial data.

#### `ImagesImageDirectUpload(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesImageDirectUpload` entity instance. Pass `nil` for no initial data.

#### `ImagesImageKeyResponseCollection(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesImageKeyResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ImagesImageResponseSingle(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesImageResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ImagesImageVariantFlat(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesImageVariantFlat` entity instance. Pass `nil` for no initial data.

#### `ImagesImageVariantList(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesImageVariantList` entity instance. Pass `nil` for no initial data.

#### `ImagesImageVariantSimple(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesImageVariantSimple` entity instance. Pass `nil` for no initial data.

#### `ImagesImagesList(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesImagesList` entity instance. Pass `nil` for no initial data.

#### `ImagesImagesStat(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesImagesStat` entity instance. Pass `nil` for no initial data.

#### `ImagesMetadataKey(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesMetadataKey` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitConnectivityCheck(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesSourcingkitConnectivityCheck` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigration(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesSourcingkitMigration` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationList(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesSourcingkitMigrationList` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationLogList(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesSourcingkitMigrationLogList` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationProgress(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesSourcingkitMigrationProgress` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitMigrationSingle(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesSourcingkitMigrationSingle` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitSource(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesSourcingkitSource` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitSourceList(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesSourcingkitSourceList` entity instance. Pass `nil` for no initial data.

#### `ImagesSourcingkitSourceSingle(data map[string]any) CloudflareImagesEntity`

Create a new `ImagesSourcingkitSourceSingle` entity instance. Pass `nil` for no initial data.

#### `Migration(data map[string]any) CloudflareImagesEntity`

Create a new `Migration` entity instance. Pass `nil` for no initial data.

#### `Source(data map[string]any) CloudflareImagesEntity`

Create a new `Source` entity instance. Pass `nil` for no initial data.

#### `V1n(data map[string]any) CloudflareImagesEntity`

Create a new `V1n` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CloudflareImageEntity

```go
cloudflareImage := client.CloudflareImage(nil)
fmt.Println(cloudflareImage.GetName()) // "cloudflare_image"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CloudflareImage(nil).Load(map[string]any{"account_id": "account_id", "v1_id": "v1_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloudflareImageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImageEntity

```go
image := client.Image(nil)
fmt.Println(image.GetName()) // "image"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `string` | No |  |
| `flows` | `[]any` | Yes |  |
| `version` | `float64` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Image(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Image(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesDeletedEntity

```go
imagesDeleted := client.ImagesDeleted(nil)
fmt.Println(imagesDeleted.GetName()) // "images_deleted"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ImagesDeleted(nil).Remove(map[string]any{"account_id": "account_id", "variant_id": "variant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesDeletedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesImageDirectUploadEntity

```go
imagesImageDirectUpload := client.ImagesImageDirectUpload(nil)
fmt.Println(imagesImageDirectUpload.GetName()) // "images_image_direct_upload"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `string` | No | The date after which the upload will not be accepted. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ImagesImageDirectUpload(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesImageDirectUploadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesImageKeyResponseCollectionEntity

```go
imagesImageKeyResponseCollection := client.ImagesImageKeyResponseCollection(nil)
fmt.Println(imagesImageKeyResponseCollection.GetName()) // "images_image_key_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ImagesImageKeyResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ImagesImageKeyResponseCollection(nil).Update(map[string]any{
    "account_id": "account_id",
    "signing_key_name": "signing_key_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ImagesImageKeyResponseCollection(nil).Remove(map[string]any{"account_id": "account_id", "signing_key_name": "signing_key_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesImageKeyResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesImageResponseSingleEntity

```go
imagesImageResponseSingle := client.ImagesImageResponseSingle(nil)
fmt.Println(imagesImageResponseSingle.GetName()) // "images_image_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | `string` | No | Can set the creator field with an internal user ID. |
| `metadata` | `map[string]any` | No | User modifiable key-value store. |
| `requireSignedURLs` | `bool` | No | Indicates whether the image can be accessed using only its UID. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ImagesImageResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "image_id": "image_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ImagesImageResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ImagesImageResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "image_id": "image_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesImageResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesImageVariantFlatEntity

```go
imagesImageVariantFlat := client.ImagesImageVariantFlat(nil)
fmt.Println(imagesImageVariantFlat.GetName()) // "images_image_variant_flat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ImagesImageVariantFlat(nil).Load(map[string]any{"account_id": "account_id", "variant_id": "variant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesImageVariantFlatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesImageVariantListEntity

```go
imagesImageVariantList := client.ImagesImageVariantList(nil)
fmt.Println(imagesImageVariantList.GetName()) // "images_image_variant_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ImagesImageVariantList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesImageVariantListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesImageVariantSimpleEntity

```go
imagesImageVariantSimple := client.ImagesImageVariantSimple(nil)
fmt.Println(imagesImageVariantSimple.GetName()) // "images_image_variant_simple"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `neverRequireSignedURLs` | `bool` | No | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `map[string]any` | Yes | Allows you to define image resizing sizes for different use cases. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ImagesImageVariantSimple(nil).Load(map[string]any{"account_id": "account_id", "variant_id": "variant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ImagesImageVariantSimple(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "id": "example_id",
    "options": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ImagesImageVariantSimple(nil).Update(map[string]any{
    "account_id": "account_id",
    "variant_id": "variant_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesImageVariantSimpleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesImagesListEntity

```go
imagesImagesList := client.ImagesImagesList(nil)
fmt.Println(imagesImagesList.GetName()) // "images_images_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | - | Yes |
| `success` | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ImagesImagesList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ImagesImagesList(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesImagesListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesImagesStatEntity

```go
imagesImagesStat := client.ImagesImagesStat(nil)
fmt.Println(imagesImagesStat.GetName()) // "images_images_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ImagesImagesStat(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesImagesStatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesMetadataKeyEntity

```go
imagesMetadataKey := client.ImagesMetadataKey(nil)
fmt.Println(imagesMetadataKey.GetName()) // "images_metadata_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ImagesMetadataKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesMetadataKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesSourcingkitConnectivityCheckEntity

```go
imagesSourcingkitConnectivityCheck := client.ImagesSourcingkitConnectivityCheck(nil)
fmt.Println(imagesSourcingkitConnectivityCheck.GetName()) // "images_sourcingkit_connectivity_check"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | Yes | The name of the storage bucket. |
| `region` | `string` | No | The region hint for the bucket (S3 only). |
| `result` | `map[string]any` | No |  |
| `secret` | `map[string]any` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `string` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ImagesSourcingkitConnectivityCheck(nil).Load(map[string]any{"account_id": "account_id", "source_id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ImagesSourcingkitConnectivityCheck(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "bucket": "example_bucket",
    "secret": map[string]any{},
    "vendor": "example_vendor",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesSourcingkitConnectivityCheckEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesSourcingkitMigrationEntity

```go
imagesSourcingkitMigration := client.ImagesSourcingkitMigration(nil)
fmt.Println(imagesSourcingkitMigration.GetName()) // "images_sourcingkit_migration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conflictBehaviour` | `string` | No | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `[]any` | No | Content types to skip during migration. |
| `pathPrefix` | `string` | No | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `string` | No | Only import objects under this prefix in the source bucket. |
| `sourceId` | `string` | Yes | The identifier of the source to migrate from. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ImagesSourcingkitMigration(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "sourceId": "example_sourceId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesSourcingkitMigrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesSourcingkitMigrationListEntity

```go
imagesSourcingkitMigrationList := client.ImagesSourcingkitMigrationList(nil)
fmt.Println(imagesSourcingkitMigrationList.GetName()) // "images_sourcingkit_migration_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ImagesSourcingkitMigrationList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesSourcingkitMigrationListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesSourcingkitMigrationLogListEntity

```go
imagesSourcingkitMigrationLogList := client.ImagesSourcingkitMigrationLogList(nil)
fmt.Println(imagesSourcingkitMigrationLogList.GetName()) // "images_sourcingkit_migration_log_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ImagesSourcingkitMigrationLogList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesSourcingkitMigrationLogListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesSourcingkitMigrationProgressEntity

```go
imagesSourcingkitMigrationProgress := client.ImagesSourcingkitMigrationProgress(nil)
fmt.Println(imagesSourcingkitMigrationProgress.GetName()) // "images_sourcingkit_migration_progress"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ImagesSourcingkitMigrationProgress(nil).Load(map[string]any{"account_id": "account_id", "migration_id": "migration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesSourcingkitMigrationProgressEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesSourcingkitMigrationSingleEntity

```go
imagesSourcingkitMigrationSingle := client.ImagesSourcingkitMigrationSingle(nil)
fmt.Println(imagesSourcingkitMigrationSingle.GetName()) // "images_sourcingkit_migration_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ImagesSourcingkitMigrationSingle(nil).Load(map[string]any{"account_id": "account_id", "migration_id": "migration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ImagesSourcingkitMigrationSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "migration_id": "migration_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesSourcingkitMigrationSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesSourcingkitSourceEntity

```go
imagesSourcingkitSource := client.ImagesSourcingkitSource(nil)
fmt.Println(imagesSourcingkitSource.GetName()) // "images_sourcingkit_source"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | Yes | The name of the storage bucket. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | A human-readable name for the source. |
| `secret` | `map[string]any` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `string` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ImagesSourcingkitSource(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "bucket": "example_bucket",
    "name": "example_name",
    "secret": map[string]any{},
    "vendor": "example_vendor",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ImagesSourcingkitSource(nil).Update(map[string]any{
    "account_id": "account_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesSourcingkitSourceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesSourcingkitSourceListEntity

```go
imagesSourcingkitSourceList := client.ImagesSourcingkitSourceList(nil)
fmt.Println(imagesSourcingkitSourceList.GetName()) // "images_sourcingkit_source_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ImagesSourcingkitSourceList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesSourcingkitSourceListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImagesSourcingkitSourceSingleEntity

```go
imagesSourcingkitSourceSingle := client.ImagesSourcingkitSourceSingle(nil)
fmt.Println(imagesSourcingkitSourceSingle.GetName()) // "images_sourcingkit_source_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ImagesSourcingkitSourceSingle(nil).Load(map[string]any{"account_id": "account_id", "source_id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImagesSourcingkitSourceSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MigrationEntity

```go
migration := client.Migration(nil)
fmt.Println(migration.GetName()) // "migration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Migration(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SourceEntity

```go
source := client.Source(nil)
fmt.Println(source.GetName()) // "source"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Source(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SourceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## V1nEntity

```go
v1n := client.V1n(nil)
fmt.Println(v1n.GetName()) // "v1n"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.V1n(nil).Remove(map[string]any{"account_id": "account_id", "image_id": "image_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `V1nEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareImagesSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

