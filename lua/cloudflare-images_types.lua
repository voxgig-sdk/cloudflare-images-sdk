-- Typed models for the CloudflareImages SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class CloudflareImage

---@class CloudflareImageLoadMatch
---@field account_id string
---@field v1_id string

---@class Image
---@field etag? string
---@field flows table
---@field version number

---@class ImageLoadMatch
---@field zone_id string

---@class ImageUpdateData
---@field zone_id string
---@field etag? string
---@field flows? table
---@field version? number

---@class ImagesDeleted

---@class ImagesDeletedRemoveMatch
---@field account_id string
---@field variant_id string

---@class ImagesImageDirectUpload
---@field expiry? string

---@class ImagesImageDirectUploadCreateData
---@field account_id string
---@field expiry? string

---@class ImagesImageKeyResponseCollection
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class ImagesImageKeyResponseCollectionListMatch
---@field account_id string

---@class ImagesImageKeyResponseCollectionUpdateData
---@field account_id string
---@field signing_key_name string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class ImagesImageKeyResponseCollectionRemoveMatch
---@field account_id string
---@field signing_key_name string

---@class ImagesImageResponseSingle
---@field creator? string
---@field metadata? table
---@field requireSignedURLs? boolean
---@field result? table

---@class ImagesImageResponseSingleLoadMatch
---@field account_id string
---@field image_id string

---@class ImagesImageResponseSingleCreateData
---@field account_id string
---@field creator? string
---@field metadata? table
---@field requireSignedURLs? boolean
---@field result? table

---@class ImagesImageResponseSingleUpdateData
---@field account_id string
---@field image_id string
---@field creator? string
---@field metadata? table
---@field requireSignedURLs? boolean
---@field result? table

---@class ImagesImageVariantFlat
---@field result table

---@class ImagesImageVariantFlatLoadMatch
---@field account_id string
---@field variant_id string

---@class ImagesImageVariantList
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class ImagesImageVariantListListMatch
---@field account_id string

---@class ImagesImageVariantSimple
---@field id string
---@field neverRequireSignedURLs? boolean
---@field options table
---@field result? table

---@class ImagesImageVariantSimpleLoadMatch
---@field account_id string
---@field variant_id string

---@class ImagesImageVariantSimpleCreateData
---@field account_id string
---@field id string
---@field neverRequireSignedURLs? boolean
---@field options table
---@field result? table

---@class ImagesImageVariantSimpleUpdateData
---@field account_id string
---@field variant_id string
---@field id? string
---@field neverRequireSignedURLs? boolean
---@field options? table
---@field result? table

---@class ImagesImagesList
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class ImagesImagesListLoadMatch
---@field account_id string
---@field continuation_token? string
---@field creator? string
---@field ["meta_<field>_<operator>"]? string
---@field per_page? number
---@field sort_order? string

---@class ImagesImagesListListMatch
---@field account_id string
---@field creator? string
---@field page? number
---@field per_page? number

---@class ImagesImagesStat
---@field result? table

---@class ImagesImagesStatLoadMatch
---@field account_id string

---@class ImagesMetadataKey
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class ImagesMetadataKeyListMatch
---@field account_id string

---@class ImagesSourcingkitConnectivityCheck
---@field account? string
---@field bucket string
---@field region? string
---@field result? table
---@field secret table
---@field vendor string

---@class ImagesSourcingkitConnectivityCheckLoadMatch
---@field account_id string
---@field source_id string

---@class ImagesSourcingkitConnectivityCheckCreateData
---@field account_id string
---@field account? string
---@field bucket string
---@field region? string
---@field result? table
---@field secret table
---@field vendor string

---@class ImagesSourcingkitMigration
---@field conflictBehaviour? string
---@field excludedContentTypes? table
---@field pathPrefix? string
---@field rootDirectory? string
---@field sourceId string

---@class ImagesSourcingkitMigrationCreateData
---@field account_id string
---@field conflictBehaviour? string
---@field excludedContentTypes? table
---@field pathPrefix? string
---@field rootDirectory? string
---@field sourceId string

---@class ImagesSourcingkitMigrationList
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class ImagesSourcingkitMigrationListListMatch
---@field account_id string
---@field limit? number
---@field offset? number

---@class ImagesSourcingkitMigrationLogList
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class ImagesSourcingkitMigrationLogListListMatch
---@field account_id string
---@field migration_id string
---@field limit? number
---@field offset? number

---@class ImagesSourcingkitMigrationProgress
---@field result? table

---@class ImagesSourcingkitMigrationProgressLoadMatch
---@field account_id string
---@field migration_id string

---@class ImagesSourcingkitMigrationSingle
---@field result? table

---@class ImagesSourcingkitMigrationSingleLoadMatch
---@field account_id string
---@field migration_id string

---@class ImagesSourcingkitMigrationSingleUpdateData
---@field account_id string
---@field migration_id string
---@field result? table

---@class ImagesSourcingkitSource
---@field account? string
---@field bucket string
---@field id? string
---@field name string
---@field secret table
---@field vendor string

---@class ImagesSourcingkitSourceCreateData
---@field account_id string
---@field account? string
---@field bucket string
---@field id? string
---@field name string
---@field secret table
---@field vendor string

---@class ImagesSourcingkitSourceUpdateData
---@field account_id string
---@field id string
---@field account? string
---@field bucket? string
---@field name? string
---@field secret? table
---@field vendor? string

---@class ImagesSourcingkitSourceList
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class ImagesSourcingkitSourceListListMatch
---@field account_id string
---@field limit? number
---@field name? string
---@field offset? number

---@class ImagesSourcingkitSourceSingle
---@field result? table

---@class ImagesSourcingkitSourceSingleLoadMatch
---@field account_id string
---@field source_id string

---@class Migration
---@field id? string

---@class MigrationRemoveMatch
---@field account_id string
---@field id string

---@class Source
---@field id? string

---@class SourceRemoveMatch
---@field account_id string
---@field id string

---@class V1n

---@class V1nRemoveMatch
---@field account_id string
---@field image_id string

local M = {}

return M
