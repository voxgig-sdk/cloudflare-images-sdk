# CloudflareImages TypeScript SDK



The TypeScript SDK for the CloudflareImages API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.CloudflareImage()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-images-sdk/releases](https://github.com/voxgig-sdk/cloudflare-images-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareImagesSDK } from '@voxgig-sdk/cloudflare-images-sdk'

const client = new CloudflareImagesSDK({
  apikey: process.env.CLOUDFLARE_IMAGES_APIKEY,
})
```

### 3. Load an imagessourcingkitconnectivitycheck

ImagesSourcingkitConnectivityCheck is nested under account, so provide the `account_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const imagessourcingkitconnectivitycheck = await client.ImagesSourcingkitConnectivityCheck().load({
    account_id: 'example_account_id',
    source_id: 'example_source_id',
  })
  console.log(imagessourcingkitconnectivitycheck)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const imagesimageresponsesingle = await client.ImagesImageResponseSingle().load({ account_id: "example", image_id: "example" })
  console.log(imagesimageresponsesingle)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareImagesSDK.test()

const imagesimageresponsesingle = await client.ImagesImageResponseSingle().load({ account_id: 'example_account_id', image_id: 'example_image_id' })
// imagesimageresponsesingle is the entity, populated with mock response data
// — call imagesimageresponsesingle.data() for the record itself
console.log(imagesimageresponsesingle)
```

You can also use the instance method:

```ts
const client = new CloudflareImagesSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.ImagesImageResponseSingle()

// First call runs the operation and stores its result
await entity.load({ account_id: 'example_account_id', image_id: 'example_image_id' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareImagesSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareImagesSDK

#### Constructor

```ts
new CloudflareImagesSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `CloudflareImage(data?)` | `CloudflareImageEntity` | Create a CloudflareImage entity instance. |
| `Image(data?)` | `ImageEntity` | Create an Image entity instance. |
| `ImagesDeleted(data?)` | `ImagesDeletedEntity` | Create an ImagesDeleted entity instance. |
| `ImagesImageDirectUpload(data?)` | `ImagesImageDirectUploadEntity` | Create an ImagesImageDirectUpload entity instance. |
| `ImagesImageKeyResponseCollection(data?)` | `ImagesImageKeyResponseCollectionEntity` | Create an ImagesImageKeyResponseCollection entity instance. |
| `ImagesImageResponseSingle(data?)` | `ImagesImageResponseSingleEntity` | Create an ImagesImageResponseSingle entity instance. |
| `ImagesImageVariantFlat(data?)` | `ImagesImageVariantFlatEntity` | Create an ImagesImageVariantFlat entity instance. |
| `ImagesImageVariantList(data?)` | `ImagesImageVariantListEntity` | Create an ImagesImageVariantList entity instance. |
| `ImagesImageVariantSimple(data?)` | `ImagesImageVariantSimpleEntity` | Create an ImagesImageVariantSimple entity instance. |
| `ImagesImagesList(data?)` | `ImagesImagesListEntity` | Create an ImagesImagesList entity instance. |
| `ImagesImagesStat(data?)` | `ImagesImagesStatEntity` | Create an ImagesImagesStat entity instance. |
| `ImagesMetadataKey(data?)` | `ImagesMetadataKeyEntity` | Create an ImagesMetadataKey entity instance. |
| `ImagesSourcingkitConnectivityCheck(data?)` | `ImagesSourcingkitConnectivityCheckEntity` | Create an ImagesSourcingkitConnectivityCheck entity instance. |
| `ImagesSourcingkitMigration(data?)` | `ImagesSourcingkitMigrationEntity` | Create an ImagesSourcingkitMigration entity instance. |
| `ImagesSourcingkitMigrationList(data?)` | `ImagesSourcingkitMigrationListEntity` | Create an ImagesSourcingkitMigrationList entity instance. |
| `ImagesSourcingkitMigrationLogList(data?)` | `ImagesSourcingkitMigrationLogListEntity` | Create an ImagesSourcingkitMigrationLogList entity instance. |
| `ImagesSourcingkitMigrationProgress(data?)` | `ImagesSourcingkitMigrationProgressEntity` | Create an ImagesSourcingkitMigrationProgress entity instance. |
| `ImagesSourcingkitMigrationSingle(data?)` | `ImagesSourcingkitMigrationSingleEntity` | Create an ImagesSourcingkitMigrationSingle entity instance. |
| `ImagesSourcingkitSource(data?)` | `ImagesSourcingkitSourceEntity` | Create an ImagesSourcingkitSource entity instance. |
| `ImagesSourcingkitSourceList(data?)` | `ImagesSourcingkitSourceListEntity` | Create an ImagesSourcingkitSourceList entity instance. |
| `ImagesSourcingkitSourceSingle(data?)` | `ImagesSourcingkitSourceSingleEntity` | Create an ImagesSourcingkitSourceSingle entity instance. |
| `Migration(data?)` | `MigrationEntity` | Create a Migration entity instance. |
| `Source(data?)` | `SourceEntity` | Create a Source entity instance. |
| `V1n(data?)` | `V1nEntity` | Create a V1n entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareImagesSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareImagesSDK.test(testopts?, sdkopts?)` | `CloudflareImagesSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareImagesSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### CloudflareImage

| Field | Description |
| --- | --- |

Operations: load.

API path: `/accounts/{account_id}/images/v1/{image_id}/blob`

#### Image

| Field | Description |
| --- | --- |
| `etag` |  |
| `flows` |  |
| `version` |  |

Operations: load, update.

API path: `/zones/{zone_id}/images/v1/flows`

#### ImagesDeleted

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/images/v1/variants/{variant_id}`

#### ImagesImageDirectUpload

| Field | Description |
| --- | --- |
| `expiry` | The date after which the upload will not be accepted. |

Operations: create.

API path: `/accounts/{account_id}/images/v1/direct_upload`

#### ImagesImageKeyResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: list, remove, update.

API path: `/accounts/{account_id}/images/v1/keys`

#### ImagesImageResponseSingle

| Field | Description |
| --- | --- |
| `creator` | Can set the creator field with an internal user ID. |
| `metadata` | User modifiable key-value store. |
| `requireSignedURLs` | Indicates whether the image can be accessed using only its UID. |
| `result` |  |

Operations: create, load, update.

API path: `/accounts/{account_id}/images/v1`

#### ImagesImageVariantFlat

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/images/v1/variants/{variant_id}/flat`

#### ImagesImageVariantList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: list.

API path: `/accounts/{account_id}/images/v1/variants`

#### ImagesImageVariantSimple

| Field | Description |
| --- | --- |
| `id` |  |
| `neverRequireSignedURLs` | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | Allows you to define image resizing sizes for different use cases. |
| `result` |  |

Operations: create, load, update.

API path: `/accounts/{account_id}/images/v1/variants`

#### ImagesImagesList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: list, load.

API path: `/accounts/{account_id}/images/v1`

#### ImagesImagesStat

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/images/v1/stats`

#### ImagesMetadataKey

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: list.

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

Operations: create, load.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources/connectivity-precheck`

#### ImagesSourcingkitMigration

| Field | Description |
| --- | --- |
| `conflictBehaviour` | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | Content types to skip during migration. |
| `pathPrefix` | Prefix to prepend to image custom IDs. |
| `rootDirectory` | Only import objects under this prefix in the source bucket. |
| `sourceId` | The identifier of the source to migrate from. |

Operations: create.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations`

#### ImagesSourcingkitMigrationList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: list.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations`

#### ImagesSourcingkitMigrationLogList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: list.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/logs`

#### ImagesSourcingkitMigrationProgress

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle`

#### ImagesSourcingkitMigrationSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load, update.

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

Operations: create, update.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources`

#### ImagesSourcingkitSourceList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: list.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources`

#### ImagesSourcingkitSourceSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}`

#### Migration

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}`

#### Source

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}`

#### V1n

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/images/v1/{image_id}`



## Entities


### CloudflareImage

Create an instance: `const cloudflare_image = client.CloudflareImage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const cloudflare_image = await client.CloudflareImage().load({ account_id: 'account_id', v1_id: 'v1_id' })
```


### Image

Create an instance: `const image = client.Image()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `etag` | `string` |  |
| `flows` | `any[]` |  |
| `version` | `number` |  |

#### Example: Load

```ts
const image = await client.Image().load({ zone_id: 'zone_id' })
```


### ImagesDeleted

Create an instance: `const images_deleted = client.ImagesDeleted()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### ImagesImageDirectUpload

Create an instance: `const images_image_direct_upload = client.ImagesImageDirectUpload()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `string` | The date after which the upload will not be accepted. |

#### Example: Create

```ts
const images_image_direct_upload = await client.ImagesImageDirectUpload().create({
  account_id: 'example_account_id',
})
```


### ImagesImageKeyResponseCollection

Create an instance: `const images_image_key_response_collection = client.ImagesImageKeyResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```ts
const images_image_key_response_collections = await client.ImagesImageKeyResponseCollection().list({ account_id: "example" })
```


### ImagesImageResponseSingle

Create an instance: `const images_image_response_single = client.ImagesImageResponseSingle()`

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
| `metadata` | `Record<string, any>` | User modifiable key-value store. |
| `requireSignedURLs` | `boolean` | Indicates whether the image can be accessed using only its UID. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const images_image_response_single = await client.ImagesImageResponseSingle().load({ account_id: 'account_id', image_id: 'image_id' })
```

#### Example: Create

```ts
const images_image_response_single = await client.ImagesImageResponseSingle().create({
  account_id: 'example_account_id',
})
```


### ImagesImageVariantFlat

Create an instance: `const images_image_variant_flat = client.ImagesImageVariantFlat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const images_image_variant_flat = await client.ImagesImageVariantFlat().load({ account_id: 'account_id', variant_id: 'variant_id' })
```


### ImagesImageVariantList

Create an instance: `const images_image_variant_list = client.ImagesImageVariantList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```ts
const images_image_variant_lists = await client.ImagesImageVariantList().list({ account_id: "example" })
```


### ImagesImageVariantSimple

Create an instance: `const images_image_variant_simple = client.ImagesImageVariantSimple()`

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
| `options` | `Record<string, any>` | Allows you to define image resizing sizes for different use cases. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const images_image_variant_simple = await client.ImagesImageVariantSimple().load({ account_id: 'account_id', variant_id: 'variant_id' })
```

#### Example: Create

```ts
const images_image_variant_simple = await client.ImagesImageVariantSimple().create({
  account_id: 'example_account_id',
  id: 'example_id',
  options: {},
})
```


### ImagesImagesList

Create an instance: `const images_images_list = client.ImagesImagesList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```ts
const images_images_list = await client.ImagesImagesList().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const images_images_lists = await client.ImagesImagesList().list({ account_id: "example" })
```


### ImagesImagesStat

Create an instance: `const images_images_stat = client.ImagesImagesStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const images_images_stat = await client.ImagesImagesStat().load({ account_id: 'account_id' })
```


### ImagesMetadataKey

Create an instance: `const images_metadata_key = client.ImagesMetadataKey()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```ts
const images_metadata_keys = await client.ImagesMetadataKey().list({ account_id: "example" })
```


### ImagesSourcingkitConnectivityCheck

Create an instance: `const images_sourcingkit_connectivity_check = client.ImagesSourcingkitConnectivityCheck()`

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
| `result` | `Record<string, any>` |  |
| `secret` | `Record<string, any>` | Storage credentials for accessing the bucket. |
| `vendor` | `string` | The cloud storage vendor of the source bucket. |

#### Example: Load

```ts
const images_sourcingkit_connectivity_check = await client.ImagesSourcingkitConnectivityCheck().load({ account_id: 'account_id', source_id: 'source_id' })
```

#### Example: Create

```ts
const images_sourcingkit_connectivity_check = await client.ImagesSourcingkitConnectivityCheck().create({
  account_id: 'example_account_id',
  bucket: 'example_bucket',
  secret: {},
  vendor: 'example_vendor',
})
```


### ImagesSourcingkitMigration

Create an instance: `const images_sourcingkit_migration = client.ImagesSourcingkitMigration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conflictBehaviour` | `string` | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `any[]` | Content types to skip during migration. |
| `pathPrefix` | `string` | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `string` | Only import objects under this prefix in the source bucket. |
| `sourceId` | `string` | The identifier of the source to migrate from. |

#### Example: Create

```ts
const images_sourcingkit_migration = await client.ImagesSourcingkitMigration().create({
  account_id: 'example_account_id',
  sourceId: 'example_sourceId',
})
```


### ImagesSourcingkitMigrationList

Create an instance: `const images_sourcingkit_migration_list = client.ImagesSourcingkitMigrationList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```ts
const images_sourcingkit_migration_lists = await client.ImagesSourcingkitMigrationList().list({ account_id: "example" })
```


### ImagesSourcingkitMigrationLogList

Create an instance: `const images_sourcingkit_migration_log_list = client.ImagesSourcingkitMigrationLogList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```ts
const images_sourcingkit_migration_log_lists = await client.ImagesSourcingkitMigrationLogList().list({ account_id: "example", migration_id: "example" })
```


### ImagesSourcingkitMigrationProgress

Create an instance: `const images_sourcingkit_migration_progress = client.ImagesSourcingkitMigrationProgress()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const images_sourcingkit_migration_progress = await client.ImagesSourcingkitMigrationProgress().load({ account_id: 'account_id', migration_id: 'migration_id' })
```


### ImagesSourcingkitMigrationSingle

Create an instance: `const images_sourcingkit_migration_single = client.ImagesSourcingkitMigrationSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const images_sourcingkit_migration_single = await client.ImagesSourcingkitMigrationSingle().load({ account_id: 'account_id', migration_id: 'migration_id' })
```


### ImagesSourcingkitSource

Create an instance: `const images_sourcingkit_source = client.ImagesSourcingkitSource()`

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
| `secret` | `Record<string, any>` | Storage credentials for accessing the bucket. |
| `vendor` | `string` | The cloud storage vendor of the source bucket. |

#### Example: Create

```ts
const images_sourcingkit_source = await client.ImagesSourcingkitSource().create({
  account_id: 'example_account_id',
  bucket: 'example_bucket',
  name: 'example_name',
  secret: {},
  vendor: 'example_vendor',
})
```


### ImagesSourcingkitSourceList

Create an instance: `const images_sourcingkit_source_list = client.ImagesSourcingkitSourceList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```ts
const images_sourcingkit_source_lists = await client.ImagesSourcingkitSourceList().list({ account_id: "example" })
```


### ImagesSourcingkitSourceSingle

Create an instance: `const images_sourcingkit_source_single = client.ImagesSourcingkitSourceSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const images_sourcingkit_source_single = await client.ImagesSourcingkitSourceSingle().load({ account_id: 'account_id', source_id: 'source_id' })
```


### Migration

Create an instance: `const migration = client.Migration()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Source

Create an instance: `const source = client.Source()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### V1n

Create an instance: `const v1n = client.V1n()`

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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-images/
├── src/
│   ├── CloudflareImagesSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareImagesSDK } from '@voxgig-sdk/cloudflare-images-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const imagesimageresponsesingle = client.ImagesImageResponseSingle()
await imagesimageresponsesingle.load({ account_id: "example", image_id: "example" })

// imagesimageresponsesingle.data() now returns the imagesimageresponsesingle data from the last `load`
// imagesimageresponsesingle.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
