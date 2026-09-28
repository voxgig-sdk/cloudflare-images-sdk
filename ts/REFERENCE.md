# CloudflareImages TypeScript SDK Reference

Complete API reference for the CloudflareImages TypeScript SDK.


## CloudflareImagesSDK

### Constructor

```ts
new CloudflareImagesSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareImagesSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareImagesSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareImagesSDK` instance in test mode.


### Instance Methods

#### `CloudflareImage(data?: object)`

Create a new `CloudflareImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloudflareImageEntity` instance.

#### `Image(data?: object)`

Create a new `Image` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImageEntity` instance.

#### `ImagesDeleted(data?: object)`

Create a new `ImagesDeleted` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesDeletedEntity` instance.

#### `ImagesImageDirectUpload(data?: object)`

Create a new `ImagesImageDirectUpload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesImageDirectUploadEntity` instance.

#### `ImagesImageKeyResponseCollection(data?: object)`

Create a new `ImagesImageKeyResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesImageKeyResponseCollectionEntity` instance.

#### `ImagesImageResponseSingle(data?: object)`

Create a new `ImagesImageResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesImageResponseSingleEntity` instance.

#### `ImagesImageVariantFlat(data?: object)`

Create a new `ImagesImageVariantFlat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesImageVariantFlatEntity` instance.

#### `ImagesImageVariantList(data?: object)`

Create a new `ImagesImageVariantList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesImageVariantListEntity` instance.

#### `ImagesImageVariantSimple(data?: object)`

Create a new `ImagesImageVariantSimple` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesImageVariantSimpleEntity` instance.

#### `ImagesImagesList(data?: object)`

Create a new `ImagesImagesList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesImagesListEntity` instance.

#### `ImagesImagesStat(data?: object)`

Create a new `ImagesImagesStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesImagesStatEntity` instance.

#### `ImagesMetadataKey(data?: object)`

Create a new `ImagesMetadataKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesMetadataKeyEntity` instance.

#### `ImagesSourcingkitConnectivityCheck(data?: object)`

Create a new `ImagesSourcingkitConnectivityCheck` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesSourcingkitConnectivityCheckEntity` instance.

#### `ImagesSourcingkitMigration(data?: object)`

Create a new `ImagesSourcingkitMigration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesSourcingkitMigrationEntity` instance.

#### `ImagesSourcingkitMigrationList(data?: object)`

Create a new `ImagesSourcingkitMigrationList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesSourcingkitMigrationListEntity` instance.

#### `ImagesSourcingkitMigrationLogList(data?: object)`

Create a new `ImagesSourcingkitMigrationLogList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesSourcingkitMigrationLogListEntity` instance.

#### `ImagesSourcingkitMigrationProgress(data?: object)`

Create a new `ImagesSourcingkitMigrationProgress` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesSourcingkitMigrationProgressEntity` instance.

#### `ImagesSourcingkitMigrationSingle(data?: object)`

Create a new `ImagesSourcingkitMigrationSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesSourcingkitMigrationSingleEntity` instance.

#### `ImagesSourcingkitSource(data?: object)`

Create a new `ImagesSourcingkitSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesSourcingkitSourceEntity` instance.

#### `ImagesSourcingkitSourceList(data?: object)`

Create a new `ImagesSourcingkitSourceList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesSourcingkitSourceListEntity` instance.

#### `ImagesSourcingkitSourceSingle(data?: object)`

Create a new `ImagesSourcingkitSourceSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImagesSourcingkitSourceSingleEntity` instance.

#### `Migration(data?: object)`

Create a new `Migration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MigrationEntity` instance.

#### `Source(data?: object)`

Create a new `Source` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SourceEntity` instance.

#### `V1n(data?: object)`

Create a new `V1n` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1nEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareImagesSDK.test()`.

**Returns:** `CloudflareImagesSDK` instance in test mode.


---

## CloudflareImageEntity

```ts
const cloudflare_image = client.CloudflareImage()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CloudflareImage().load({ account_id: 'account_id', v1_id: 'v1_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloudflareImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImageEntity

```ts
const image = client.Image()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `string` | No |  |
| `flows` | `any[]` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Image().load({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Image().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesDeletedEntity

```ts
const images_deleted = client.ImagesDeleted()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ImagesDeleted().remove({ account_id: 'account_id', variant_id: 'variant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesDeletedEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesImageDirectUploadEntity

```ts
const images_image_direct_upload = client.ImagesImageDirectUpload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `string` | No | The date after which the upload will not be accepted. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ImagesImageDirectUpload().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesImageDirectUploadEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesImageKeyResponseCollectionEntity

```ts
const images_image_key_response_collection = client.ImagesImageKeyResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImagesImageKeyResponseCollection().list({ account_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ImagesImageKeyResponseCollection().remove({ account_id: 'account_id', signing_key_name: 'signing_key_name' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ImagesImageKeyResponseCollection().update({
  account_id: 'account_id',
  signing_key_name: 'signing_key_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesImageKeyResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesImageResponseSingleEntity

```ts
const images_image_response_single = client.ImagesImageResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | `string` | No | Can set the creator field with an internal user ID. |
| `metadata` | `Record<string, any>` | No | User modifiable key-value store. |
| `requireSignedURLs` | `boolean` | No | Indicates whether the image can be accessed using only its UID. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ImagesImageResponseSingle().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ImagesImageResponseSingle().load({ account_id: 'account_id', image_id: 'image_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ImagesImageResponseSingle().update({
  account_id: 'account_id',
  image_id: 'image_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesImageResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesImageVariantFlatEntity

```ts
const images_image_variant_flat = client.ImagesImageVariantFlat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ImagesImageVariantFlat().load({ account_id: 'account_id', variant_id: 'variant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesImageVariantFlatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesImageVariantListEntity

```ts
const images_image_variant_list = client.ImagesImageVariantList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImagesImageVariantList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesImageVariantListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesImageVariantSimpleEntity

```ts
const images_image_variant_simple = client.ImagesImageVariantSimple()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `neverRequireSignedURLs` | `boolean` | No | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `Record<string, any>` | Yes | Allows you to define image resizing sizes for different use cases. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ImagesImageVariantSimple().create({
  account_id: 'example_account_id',
  id: 'example_id',
  options: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ImagesImageVariantSimple().load({ account_id: 'account_id', variant_id: 'variant_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ImagesImageVariantSimple().update({
  account_id: 'account_id',
  variant_id: 'variant_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesImageVariantSimpleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesImagesListEntity

```ts
const images_images_list = client.ImagesImagesList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | - | Yes |
| `success` | - | - |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImagesImagesList().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ImagesImagesList().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesImagesListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesImagesStatEntity

```ts
const images_images_stat = client.ImagesImagesStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ImagesImagesStat().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesImagesStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesMetadataKeyEntity

```ts
const images_metadata_key = client.ImagesMetadataKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImagesMetadataKey().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesMetadataKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesSourcingkitConnectivityCheckEntity

```ts
const images_sourcingkit_connectivity_check = client.ImagesSourcingkitConnectivityCheck()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | Yes | The name of the storage bucket. |
| `region` | `string` | No | The region hint for the bucket (S3 only). |
| `result` | `Record<string, any>` | No |  |
| `secret` | `Record<string, any>` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `string` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ImagesSourcingkitConnectivityCheck().create({
  account_id: 'example_account_id',
  bucket: 'example_bucket',
  secret: {},
  vendor: 'example_vendor',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ImagesSourcingkitConnectivityCheck().load({ account_id: 'account_id', source_id: 'source_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesSourcingkitConnectivityCheckEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesSourcingkitMigrationEntity

```ts
const images_sourcingkit_migration = client.ImagesSourcingkitMigration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conflictBehaviour` | `string` | No | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `any[]` | No | Content types to skip during migration. |
| `pathPrefix` | `string` | No | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `string` | No | Only import objects under this prefix in the source bucket. |
| `sourceId` | `string` | Yes | The identifier of the source to migrate from. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ImagesSourcingkitMigration().create({
  account_id: 'example_account_id',
  sourceId: 'example_sourceId',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesSourcingkitMigrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesSourcingkitMigrationListEntity

```ts
const images_sourcingkit_migration_list = client.ImagesSourcingkitMigrationList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImagesSourcingkitMigrationList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesSourcingkitMigrationListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesSourcingkitMigrationLogListEntity

```ts
const images_sourcingkit_migration_log_list = client.ImagesSourcingkitMigrationLogList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImagesSourcingkitMigrationLogList().list({ account_id: "example", migration_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesSourcingkitMigrationLogListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesSourcingkitMigrationProgressEntity

```ts
const images_sourcingkit_migration_progress = client.ImagesSourcingkitMigrationProgress()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ImagesSourcingkitMigrationProgress().load({ account_id: 'account_id', migration_id: 'migration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesSourcingkitMigrationProgressEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesSourcingkitMigrationSingleEntity

```ts
const images_sourcingkit_migration_single = client.ImagesSourcingkitMigrationSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ImagesSourcingkitMigrationSingle().load({ account_id: 'account_id', migration_id: 'migration_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ImagesSourcingkitMigrationSingle().update({
  account_id: 'account_id',
  migration_id: 'migration_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesSourcingkitMigrationSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesSourcingkitSourceEntity

```ts
const images_sourcingkit_source = client.ImagesSourcingkitSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | Yes | The name of the storage bucket. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | A human-readable name for the source. |
| `secret` | `Record<string, any>` | Yes | Storage credentials for accessing the bucket. |
| `vendor` | `string` | Yes | The cloud storage vendor of the source bucket. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ImagesSourcingkitSource().create({
  account_id: 'example_account_id',
  bucket: 'example_bucket',
  name: 'example_name',
  secret: {},
  vendor: 'example_vendor',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ImagesSourcingkitSource().update({
  account_id: 'account_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesSourcingkitSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesSourcingkitSourceListEntity

```ts
const images_sourcingkit_source_list = client.ImagesSourcingkitSourceList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ImagesSourcingkitSourceList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesSourcingkitSourceListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImagesSourcingkitSourceSingleEntity

```ts
const images_sourcingkit_source_single = client.ImagesSourcingkitSourceSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ImagesSourcingkitSourceSingle().load({ account_id: 'account_id', source_id: 'source_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImagesSourcingkitSourceSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MigrationEntity

```ts
const migration = client.Migration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Migration().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MigrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SourceEntity

```ts
const source = client.Source()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Source().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1nEntity

```ts
const v1n = client.V1n()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.V1n().remove({ account_id: 'account_id', image_id: 'image_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1nEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareImagesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareImagesSDK({
  feature: {
    test: { active: true },
  }
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

