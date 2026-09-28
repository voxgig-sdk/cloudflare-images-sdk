# Cloudflare Images

Cloudflare Images: image upload, variants, keys, and delivery optimization.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 24 entities and 37 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [CloudflareImage](docs/api/cloudflare_image.html)

Results: Base image response. Returns uploaded image data.

SDK operations: `load`.

### [Image](docs/api/image.html)

Results: Get flows config; Update flows config.

SDK operations: `load`, `update`.

### [ImagesDeleted](docs/api/images_deleted.html)

Results: Delete a variant response.

SDK operations: `remove`.

### [ImagesImageDirectUpload](docs/api/images_image_direct_upload.html)

Results: Create authenticated direct upload URL V1 response; Create authenticated direct upload URL V2 response.

SDK operations: `create`.

Key fields to recognise:

- `expiry`: The date after which the upload will not be accepted.

### [ImagesImageKeyResponseCollection](docs/api/images_image_key_response_collection.html)

Results: List Signing Keys response; Delete Signing Key response; Add Signing Key response.

SDK operations: `list`, `remove`, `update`.

Key fields to recognise:

- `success`: Whether the API call was successful

### [ImagesImageResponseSingle](docs/api/images_image_response_single.html)

Results: Upload an image response; Image details response; Update image response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `creator`: Can set the creator field with an internal user ID.
- `metadata`: What EXIF data should be preserved in the output image.
- `requireSignedURLs`: Indicates whether the image can be a accessed only using it&#39;s UID. If set to true, a signed token needs to be generated with a signing key to view the image.

### [ImagesImageVariantFlat](docs/api/images_image_variant_flat.html)

Results: Variant details flat response.

SDK operations: `load`.

### [ImagesImageVariantList](docs/api/images_image_variant_list.html)

Results: List variants response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful

### [ImagesImageVariantSimple](docs/api/images_image_variant_simple.html)

Results: Create a variant response; Variant details response; Update a variant response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `id`: Image unique identifier.
- `neverRequireSignedURLs`: Indicates whether the variant can access an image without a signature, regardless of image access control.
- `options`: Allows you to define image resizing sizes for different use cases.

### [ImagesImagesList](docs/api/images_images_list.html)

Results: List images response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `success`: Whether the API call was successful

### [ImagesImagesStat](docs/api/images_images_stat.html)

Results: Images usage statistics response.

SDK operations: `load`.

### [ImagesMetadataKey](docs/api/images_metadata_key.html)

Results: Metadata key list response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful

### [ImagesSourcingkitConnectivityCheck](docs/api/images_sourcingkit_connectivity_check.html)

Results: Connectivity precheck response; Source connectivity status response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `account`: Account identifier for the bucket (required for R2 vendor).
- `bucket`: The name of the storage bucket.
- `region`: The region of the storage bucket (S3 sources only).
- `secret`: Storage credentials for accessing the bucket.
- `vendor`: The cloud storage vendor of the source bucket.

### [ImagesSourcingkitMigration](docs/api/images_sourcingkit_migration.html)

Results: Create sourcing kit migration response.

SDK operations: `create`.

Key fields to recognise:

- `conflictBehaviour`: How to handle objects that already exist at the destination.
- `excludedContentTypes`: Content types to skip during migration.
- `pathPrefix`: Prefix to prepend to image custom IDs.
- `rootDirectory`: Only import objects under this prefix in the source bucket.
- `sourceId`: The source this migration imports from.

### [ImagesSourcingkitMigrationList](docs/api/images_sourcingkit_migration_list.html)

Results: List sourcing kit migrations response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful

### [ImagesSourcingkitMigrationLogList](docs/api/images_sourcingkit_migration_log_list.html)

Results: List migration logs response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful

### [ImagesSourcingkitMigrationProgress](docs/api/images_sourcingkit_migration_progress.html)

Results: Migration progress response.

SDK operations: `load`.

### [ImagesSourcingkitMigrationSingle](docs/api/images_sourcingkit_migration_single.html)

Results: Get sourcing kit migration response; Abort migration response; Start migration response.

SDK operations: `load`, `update`.

### [ImagesSourcingkitSource](docs/api/images_sourcingkit_source.html)

Results: Create sourcing kit source response; Update sourcing kit source response.

SDK operations: `create`, `update`.

Key fields to recognise:

- `account`: Account identifier for the bucket (required for R2 vendor).
- `bucket`: The name of the storage bucket.
- `id`: Image unique identifier.
- `name`: Key name.
- `secret`: Storage credentials for accessing the bucket.

### [ImagesSourcingkitSourceList](docs/api/images_sourcingkit_source_list.html)

Results: List sourcing kit sources response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful

### [ImagesSourcingkitSourceSingle](docs/api/images_sourcingkit_source_single.html)

Results: Get sourcing kit source response.

SDK operations: `load`.

### [Migration](docs/api/migration.html)

Results: Delete sourcing kit migration response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Image unique identifier.

### [Source](docs/api/source.html)

Results: Delete sourcing kit source response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Image unique identifier.

### [V1n](docs/api/v1n.html)

Results: Delete image response.

SDK operations: `remove`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [CloudflareImage](docs/api/cloudflare_image.html) | `load` | `GET /accounts/{account_id}/images/v1/{image_id}/blob` | Required |
| [Image](docs/api/image.html) | `load` | `GET /zones/{zone_id}/images/v1/flows` | Required |
| [Image](docs/api/image.html) | `update` | `PUT /zones/{zone_id}/images/v1/flows` | Required |
| [ImagesDeleted](docs/api/images_deleted.html) | `remove` | `DELETE /accounts/{account_id}/images/v1/variants/{variant_id}` | Required |
| [ImagesImageDirectUpload](docs/api/images_image_direct_upload.html) | `create` | `POST /accounts/{account_id}/images/v1/direct_upload` | Required |
| [ImagesImageDirectUpload](docs/api/images_image_direct_upload.html) | `create` | `POST /accounts/{account_id}/images/v2/direct_upload` | Required |
| [ImagesImageKeyResponseCollection](docs/api/images_image_key_response_collection.html) | `list` | `GET /accounts/{account_id}/images/v1/keys` | Required |
| [ImagesImageKeyResponseCollection](docs/api/images_image_key_response_collection.html) | `remove` | `DELETE /accounts/{account_id}/images/v1/keys/{signing_key_name}` | Required |
| [ImagesImageKeyResponseCollection](docs/api/images_image_key_response_collection.html) | `update` | `PUT /accounts/{account_id}/images/v1/keys/{signing_key_name}` | Required |
| [ImagesImageResponseSingle](docs/api/images_image_response_single.html) | `create` | `POST /accounts/{account_id}/images/v1` | Required |
| [ImagesImageResponseSingle](docs/api/images_image_response_single.html) | `load` | `GET /accounts/{account_id}/images/v1/{image_id}` | Required |
| [ImagesImageResponseSingle](docs/api/images_image_response_single.html) | `update` | `PATCH /accounts/{account_id}/images/v1/{image_id}` | Required |
| [ImagesImageVariantFlat](docs/api/images_image_variant_flat.html) | `load` | `GET /accounts/{account_id}/images/v1/variants/{variant_id}/flat` | Required |
| [ImagesImageVariantList](docs/api/images_image_variant_list.html) | `list` | `GET /accounts/{account_id}/images/v1/variants` | Required |
| [ImagesImageVariantSimple](docs/api/images_image_variant_simple.html) | `create` | `POST /accounts/{account_id}/images/v1/variants` | Required |
| [ImagesImageVariantSimple](docs/api/images_image_variant_simple.html) | `load` | `GET /accounts/{account_id}/images/v1/variants/{variant_id}` | Required |
| [ImagesImageVariantSimple](docs/api/images_image_variant_simple.html) | `update` | `PATCH /accounts/{account_id}/images/v1/variants/{variant_id}` | Required |
| [ImagesImagesList](docs/api/images_images_list.html) | `list` | `GET /accounts/{account_id}/images/v1` | Required |
| [ImagesImagesList](docs/api/images_images_list.html) | `load` | `GET /accounts/{account_id}/images/v2` | Required |
| [ImagesImagesStat](docs/api/images_images_stat.html) | `load` | `GET /accounts/{account_id}/images/v1/stats` | Required |
| [ImagesMetadataKey](docs/api/images_metadata_key.html) | `list` | `GET /accounts/{account_id}/images/v2/metadata/keys` | Required |
| [ImagesSourcingkitConnectivityCheck](docs/api/images_sourcingkit_connectivity_check.html) | `create` | `POST /accounts/{account_id}/images/v2/sourcingkit/sources/connectivity-precheck` | Required |
| [ImagesSourcingkitConnectivityCheck](docs/api/images_sourcingkit_connectivity_check.html) | `load` | `GET /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}/connectivity` | Required |
| [ImagesSourcingkitMigration](docs/api/images_sourcingkit_migration.html) | `create` | `POST /accounts/{account_id}/images/v2/sourcingkit/migrations` | Required |
| [ImagesSourcingkitMigrationList](docs/api/images_sourcingkit_migration_list.html) | `list` | `GET /accounts/{account_id}/images/v2/sourcingkit/migrations` | Required |
| [ImagesSourcingkitMigrationLogList](docs/api/images_sourcingkit_migration_log_list.html) | `list` | `GET /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/logs` | Required |
| [ImagesSourcingkitMigrationProgress](docs/api/images_sourcingkit_migration_progress.html) | `load` | `GET /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle` | Required |
| [ImagesSourcingkitMigrationSingle](docs/api/images_sourcingkit_migration_single.html) | `load` | `GET /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}` | Required |
| [ImagesSourcingkitMigrationSingle](docs/api/images_sourcingkit_migration_single.html) | `update` | `PATCH /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle/abort` | Required |
| [ImagesSourcingkitMigrationSingle](docs/api/images_sourcingkit_migration_single.html) | `update` | `PATCH /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle/start` | Required |
| [ImagesSourcingkitSource](docs/api/images_sourcingkit_source.html) | `create` | `POST /accounts/{account_id}/images/v2/sourcingkit/sources` | Required |
| [ImagesSourcingkitSource](docs/api/images_sourcingkit_source.html) | `update` | `PATCH /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}` | Required |
| [ImagesSourcingkitSourceList](docs/api/images_sourcingkit_source_list.html) | `list` | `GET /accounts/{account_id}/images/v2/sourcingkit/sources` | Required |
| [ImagesSourcingkitSourceSingle](docs/api/images_sourcingkit_source_single.html) | `load` | `GET /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}` | Required |
| [Migration](docs/api/migration.html) | `remove` | `DELETE /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}` | Required |
| [Source](docs/api/source.html) | `remove` | `DELETE /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}` | Required |
| [V1n](docs/api/v1n.html) | `remove` | `DELETE /accounts/{account_id}/images/v1/{image_id}` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-images_list`: List records for an entity. Supported entities: `images_image_key_response_collection`, `images_image_variant_list`, `images_images_list`, `images_metadata_key`, `images_sourcingkit_migration_list`, `images_sourcingkit_migration_log_list`, `images_sourcingkit_source_list`.
- `cloudflare-images_load`: Load one record for an entity. Supported entities: `cloudflare_image`, `image`, `images_image_response_single`, `images_image_variant_flat`, `images_image_variant_simple`, `images_images_list`, `images_images_stat`, `images_sourcingkit_connectivity_check`, `images_sourcingkit_migration_progress`, `images_sourcingkit_migration_single`, `images_sourcingkit_source_single`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

