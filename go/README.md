# CloudflareImages Golang SDK



The Golang SDK for the CloudflareImages API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.CloudflareImage(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-images-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-images-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-images-sdk/go=../cloudflare-images-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-images-sdk/go"
)

func main() {
    client := sdk.NewCloudflareImagesSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_IMAGES_APIKEY"),
    })

    // Load a single cloudflareImage — the value is the loaded record.
    cloudflareImage, err := client.CloudflareImage(nil).Load(map[string]any{"account_id": "example_account_id", "v1_id": "example_v1_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(cloudflareImage)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
imagesimageresponsesingle, err := client.ImagesImageResponseSingle(nil).Load(map[string]any{"account_id": "example", "image_id": "example"}, nil)
if err != nil {
    // handle err
    return
}
_ = imagesimageresponsesingle
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

imagesImageResponseSingle, err := client.ImagesImageResponseSingle(nil).Load(
    map[string]any{"account_id": "example", "image_id": "example"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(imagesImageResponseSingle) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareImagesSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudflareImagesSDK

```go
func NewCloudflareImagesSDK(options map[string]any) *CloudflareImagesSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareImagesSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareImagesSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `CloudflareImage` | `(data map[string]any) CloudflareImagesEntity` | Create a CloudflareImage entity instance. |
| `Image` | `(data map[string]any) CloudflareImagesEntity` | Create an Image entity instance. |
| `ImagesDeleted` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesDeleted entity instance. |
| `ImagesImageDirectUpload` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesImageDirectUpload entity instance. |
| `ImagesImageKeyResponseCollection` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesImageKeyResponseCollection entity instance. |
| `ImagesImageResponseSingle` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesImageResponseSingle entity instance. |
| `ImagesImageVariantFlat` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesImageVariantFlat entity instance. |
| `ImagesImageVariantList` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesImageVariantList entity instance. |
| `ImagesImageVariantSimple` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesImageVariantSimple entity instance. |
| `ImagesImagesList` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesImagesList entity instance. |
| `ImagesImagesStat` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesImagesStat entity instance. |
| `ImagesMetadataKey` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesMetadataKey entity instance. |
| `ImagesSourcingkitConnectivityCheck` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesSourcingkitConnectivityCheck entity instance. |
| `ImagesSourcingkitMigration` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesSourcingkitMigration entity instance. |
| `ImagesSourcingkitMigrationList` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesSourcingkitMigrationList entity instance. |
| `ImagesSourcingkitMigrationLogList` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesSourcingkitMigrationLogList entity instance. |
| `ImagesSourcingkitMigrationProgress` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesSourcingkitMigrationProgress entity instance. |
| `ImagesSourcingkitMigrationSingle` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesSourcingkitMigrationSingle entity instance. |
| `ImagesSourcingkitSource` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesSourcingkitSource entity instance. |
| `ImagesSourcingkitSourceList` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesSourcingkitSourceList entity instance. |
| `ImagesSourcingkitSourceSingle` | `(data map[string]any) CloudflareImagesEntity` | Create an ImagesSourcingkitSourceSingle entity instance. |
| `Migration` | `(data map[string]any) CloudflareImagesEntity` | Create a Migration entity instance. |
| `Source` | `(data map[string]any) CloudflareImagesEntity` | Create a Source entity instance. |
| `V1n` | `(data map[string]any) CloudflareImagesEntity` | Create a V1n entity instance. |

### Entity interface (CloudflareImagesEntity)

All entities implement the `CloudflareImagesEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    cloudflareImage, err := client.CloudflareImage(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // cloudflareImage is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### CloudflareImage

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/accounts/{account_id}/images/v1/{image_id}/blob`

#### Image

| Field | Description |
| --- | --- |
| `"etag"` |  |
| `"flows"` |  |
| `"version"` |  |

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
| `"expiry"` | The date after which the upload will not be accepted. |

Operations: Create.

API path: `/accounts/{account_id}/images/v1/direct_upload`

#### ImagesImageKeyResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: List, Remove, Update.

API path: `/accounts/{account_id}/images/v1/keys`

#### ImagesImageResponseSingle

| Field | Description |
| --- | --- |
| `"creator"` | Can set the creator field with an internal user ID. |
| `"metadata"` | User modifiable key-value store. |
| `"requireSignedURLs"` | Indicates whether the image can be accessed using only its UID. |
| `"result"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/images/v1`

#### ImagesImageVariantFlat

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/images/v1/variants/{variant_id}/flat`

#### ImagesImageVariantList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/images/v1/variants`

#### ImagesImageVariantSimple

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"neverRequireSignedURLs"` | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `"options"` | Allows you to define image resizing sizes for different use cases. |
| `"result"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/images/v1/variants`

#### ImagesImagesList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: List, Load.

API path: `/accounts/{account_id}/images/v1`

#### ImagesImagesStat

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/images/v1/stats`

#### ImagesMetadataKey

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/images/v2/metadata/keys`

#### ImagesSourcingkitConnectivityCheck

| Field | Description |
| --- | --- |
| `"account"` | Account identifier for the bucket (required for R2 vendor). |
| `"bucket"` | The name of the storage bucket. |
| `"region"` | The region hint for the bucket (S3 only). |
| `"result"` |  |
| `"secret"` | Storage credentials for accessing the bucket. |
| `"vendor"` | The cloud storage vendor of the source bucket. |

Operations: Create, Load.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources/connectivity-precheck`

#### ImagesSourcingkitMigration

| Field | Description |
| --- | --- |
| `"conflictBehaviour"` | How to handle objects that already exist at the destination. |
| `"excludedContentTypes"` | Content types to skip during migration. |
| `"pathPrefix"` | Prefix to prepend to image custom IDs. |
| `"rootDirectory"` | Only import objects under this prefix in the source bucket. |
| `"sourceId"` | The identifier of the source to migrate from. |

Operations: Create.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations`

#### ImagesSourcingkitMigrationList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations`

#### ImagesSourcingkitMigrationLogList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/logs`

#### ImagesSourcingkitMigrationProgress

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle`

#### ImagesSourcingkitMigrationSingle

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load, Update.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}`

#### ImagesSourcingkitSource

| Field | Description |
| --- | --- |
| `"account"` | Account identifier for the bucket (required for R2 vendor). |
| `"bucket"` | The name of the storage bucket. |
| `"id"` |  |
| `"name"` | A human-readable name for the source. |
| `"secret"` | Storage credentials for accessing the bucket. |
| `"vendor"` | The cloud storage vendor of the source bucket. |

Operations: Create, Update.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources`

#### ImagesSourcingkitSourceList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources`

#### ImagesSourcingkitSourceSingle

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}`

#### Migration

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}`

#### Source

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}`

#### V1n

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/images/v1/{image_id}`



## Entities


### CloudflareImage

Create an instance: `cloudflareImage := client.CloudflareImage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
cloudflareImage, err := client.CloudflareImage(nil).Load(map[string]any{"account_id": "account_id", "v1_id": "v1_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cloudflareImage) // the loaded record
```


### Image

Create an instance: `image := client.Image(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `etag` | `string` |  |
| `flows` | `[]any` |  |
| `version` | `float64` |  |

#### Example: Load

```go
image, err := client.Image(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(image) // the loaded record
```


### ImagesDeleted

Create an instance: `imagesDeleted := client.ImagesDeleted(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### ImagesImageDirectUpload

Create an instance: `imagesImageDirectUpload := client.ImagesImageDirectUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `string` | The date after which the upload will not be accepted. |

#### Example: Create

```go
result, err := client.ImagesImageDirectUpload(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ImagesImageKeyResponseCollection

Create an instance: `imagesImageKeyResponseCollection := client.ImagesImageKeyResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```go
imagesImageKeyResponseCollections, err := client.ImagesImageKeyResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesImageKeyResponseCollections) // the array of records
```


### ImagesImageResponseSingle

Create an instance: `imagesImageResponseSingle := client.ImagesImageResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `creator` | `string` | Can set the creator field with an internal user ID. |
| `metadata` | `map[string]any` | User modifiable key-value store. |
| `requireSignedURLs` | `bool` | Indicates whether the image can be accessed using only its UID. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
imagesImageResponseSingle, err := client.ImagesImageResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "image_id": "image_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesImageResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.ImagesImageResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ImagesImageVariantFlat

Create an instance: `imagesImageVariantFlat := client.ImagesImageVariantFlat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
imagesImageVariantFlat, err := client.ImagesImageVariantFlat(nil).Load(map[string]any{"account_id": "account_id", "variant_id": "variant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesImageVariantFlat) // the loaded record
```


### ImagesImageVariantList

Create an instance: `imagesImageVariantList := client.ImagesImageVariantList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```go
imagesImageVariantLists, err := client.ImagesImageVariantList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesImageVariantLists) // the array of records
```


### ImagesImageVariantSimple

Create an instance: `imagesImageVariantSimple := client.ImagesImageVariantSimple(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `neverRequireSignedURLs` | `bool` | Indicates whether the variant can access an image without a signature, regardless of image access control. |
| `options` | `map[string]any` | Allows you to define image resizing sizes for different use cases. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
imagesImageVariantSimple, err := client.ImagesImageVariantSimple(nil).Load(map[string]any{"account_id": "account_id", "variant_id": "variant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesImageVariantSimple) // the loaded record
```

#### Example: Create

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


### ImagesImagesList

Create an instance: `imagesImagesList := client.ImagesImagesList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```go
imagesImagesList, err := client.ImagesImagesList(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesImagesList) // the loaded record
```

#### Example: List

```go
imagesImagesLists, err := client.ImagesImagesList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesImagesLists) // the array of records
```


### ImagesImagesStat

Create an instance: `imagesImagesStat := client.ImagesImagesStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
imagesImagesStat, err := client.ImagesImagesStat(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesImagesStat) // the loaded record
```


### ImagesMetadataKey

Create an instance: `imagesMetadataKey := client.ImagesMetadataKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```go
imagesMetadataKeys, err := client.ImagesMetadataKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesMetadataKeys) // the array of records
```


### ImagesSourcingkitConnectivityCheck

Create an instance: `imagesSourcingkitConnectivityCheck := client.ImagesSourcingkitConnectivityCheck(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | The name of the storage bucket. |
| `region` | `string` | The region hint for the bucket (S3 only). |
| `result` | `map[string]any` |  |
| `secret` | `map[string]any` | Storage credentials for accessing the bucket. |
| `vendor` | `string` | The cloud storage vendor of the source bucket. |

#### Example: Load

```go
imagesSourcingkitConnectivityCheck, err := client.ImagesSourcingkitConnectivityCheck(nil).Load(map[string]any{"account_id": "account_id", "source_id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesSourcingkitConnectivityCheck) // the loaded record
```

#### Example: Create

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


### ImagesSourcingkitMigration

Create an instance: `imagesSourcingkitMigration := client.ImagesSourcingkitMigration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conflictBehaviour` | `string` | How to handle objects that already exist at the destination. |
| `excludedContentTypes` | `[]any` | Content types to skip during migration. |
| `pathPrefix` | `string` | Prefix to prepend to image custom IDs. |
| `rootDirectory` | `string` | Only import objects under this prefix in the source bucket. |
| `sourceId` | `string` | The identifier of the source to migrate from. |

#### Example: Create

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


### ImagesSourcingkitMigrationList

Create an instance: `imagesSourcingkitMigrationList := client.ImagesSourcingkitMigrationList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```go
imagesSourcingkitMigrationLists, err := client.ImagesSourcingkitMigrationList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesSourcingkitMigrationLists) // the array of records
```


### ImagesSourcingkitMigrationLogList

Create an instance: `imagesSourcingkitMigrationLogList := client.ImagesSourcingkitMigrationLogList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```go
imagesSourcingkitMigrationLogLists, err := client.ImagesSourcingkitMigrationLogList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesSourcingkitMigrationLogLists) // the array of records
```


### ImagesSourcingkitMigrationProgress

Create an instance: `imagesSourcingkitMigrationProgress := client.ImagesSourcingkitMigrationProgress(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
imagesSourcingkitMigrationProgress, err := client.ImagesSourcingkitMigrationProgress(nil).Load(map[string]any{"account_id": "account_id", "migration_id": "migration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesSourcingkitMigrationProgress) // the loaded record
```


### ImagesSourcingkitMigrationSingle

Create an instance: `imagesSourcingkitMigrationSingle := client.ImagesSourcingkitMigrationSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
imagesSourcingkitMigrationSingle, err := client.ImagesSourcingkitMigrationSingle(nil).Load(map[string]any{"account_id": "account_id", "migration_id": "migration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesSourcingkitMigrationSingle) // the loaded record
```


### ImagesSourcingkitSource

Create an instance: `imagesSourcingkitSource := client.ImagesSourcingkitSource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | Account identifier for the bucket (required for R2 vendor). |
| `bucket` | `string` | The name of the storage bucket. |
| `id` | `string` |  |
| `name` | `string` | A human-readable name for the source. |
| `secret` | `map[string]any` | Storage credentials for accessing the bucket. |
| `vendor` | `string` | The cloud storage vendor of the source bucket. |

#### Example: Create

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


### ImagesSourcingkitSourceList

Create an instance: `imagesSourcingkitSourceList := client.ImagesSourcingkitSourceList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```go
imagesSourcingkitSourceLists, err := client.ImagesSourcingkitSourceList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesSourcingkitSourceLists) // the array of records
```


### ImagesSourcingkitSourceSingle

Create an instance: `imagesSourcingkitSourceSingle := client.ImagesSourcingkitSourceSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
imagesSourcingkitSourceSingle, err := client.ImagesSourcingkitSourceSingle(nil).Load(map[string]any{"account_id": "account_id", "source_id": "source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(imagesSourcingkitSourceSingle) // the loaded record
```


### Migration

Create an instance: `migration := client.Migration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Source

Create an instance: `source := client.Source(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### V1n

Create an instance: `v1n := client.V1n(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-images-sdk/go/
├── cloudflare-images.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-images-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
imagesimageresponsesingle := client.ImagesImageResponseSingle(nil)
imagesimageresponsesingle.Load(map[string]any{"account_id": "example", "image_id": "example"}, nil)

// imagesimageresponsesingle.Data() now returns the imagesimageresponsesingle data from the last load
// imagesimageresponsesingle.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
