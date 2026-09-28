# frozen_string_literal: true

# Typed models for the CloudflareImages SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# CloudflareImage entity data model.
class CloudflareImage
end

# Request payload for CloudflareImage#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] v1_id
#   @return [String]
CloudflareImageLoadMatch = Struct.new(
  :account_id,
  :v1_id,
  keyword_init: true
)

# Image entity data model.
#
# @!attribute [rw] etag
#   @return [String, nil]
#
# @!attribute [rw] flows
#   @return [Array]
#
# @!attribute [rw] version
#   @return [Float]
Image = Struct.new(
  :etag,
  :flows,
  :version,
  keyword_init: true
)

# Request payload for Image#load.
#
# @!attribute [rw] zone_id
#   @return [String]
ImageLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for Image#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] etag
#   @return [String, nil]
#
# @!attribute [rw] flows
#   @return [Array, nil]
#
# @!attribute [rw] version
#   @return [Float, nil]
ImageUpdateData = Struct.new(
  :zone_id,
  :etag,
  :flows,
  :version,
  keyword_init: true
)

# ImagesDeleted entity data model.
class ImagesDeleted
end

# Request payload for ImagesDeleted#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] variant_id
#   @return [String]
ImagesDeletedRemoveMatch = Struct.new(
  :account_id,
  :variant_id,
  keyword_init: true
)

# ImagesImageDirectUpload entity data model.
#
# @!attribute [rw] expiry
#   @return [String, nil]
ImagesImageDirectUpload = Struct.new(
  :expiry,
  keyword_init: true
)

# Request payload for ImagesImageDirectUpload#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] expiry
#   @return [String, nil]
ImagesImageDirectUploadCreateData = Struct.new(
  :account_id,
  :expiry,
  keyword_init: true
)

# ImagesImageKeyResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
ImagesImageKeyResponseCollection = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ImagesImageKeyResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
ImagesImageKeyResponseCollectionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for ImagesImageKeyResponseCollection#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] signing_key_name
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
ImagesImageKeyResponseCollectionUpdateData = Struct.new(
  :account_id,
  :signing_key_name,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ImagesImageKeyResponseCollection#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] signing_key_name
#   @return [String]
ImagesImageKeyResponseCollectionRemoveMatch = Struct.new(
  :account_id,
  :signing_key_name,
  keyword_init: true
)

# ImagesImageResponseSingle entity data model.
#
# @!attribute [rw] creator
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] requireSignedURLs
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesImageResponseSingle = Struct.new(
  :creator,
  :metadata,
  :requireSignedURLs,
  :result,
  keyword_init: true
)

# Request payload for ImagesImageResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] image_id
#   @return [String]
ImagesImageResponseSingleLoadMatch = Struct.new(
  :account_id,
  :image_id,
  keyword_init: true
)

# Request payload for ImagesImageResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] creator
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] requireSignedURLs
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesImageResponseSingleCreateData = Struct.new(
  :account_id,
  :creator,
  :metadata,
  :requireSignedURLs,
  :result,
  keyword_init: true
)

# Request payload for ImagesImageResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] image_id
#   @return [String]
#
# @!attribute [rw] creator
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] requireSignedURLs
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesImageResponseSingleUpdateData = Struct.new(
  :account_id,
  :image_id,
  :creator,
  :metadata,
  :requireSignedURLs,
  :result,
  keyword_init: true
)

# ImagesImageVariantFlat entity data model.
#
# @!attribute [rw] result
#   @return [Hash]
ImagesImageVariantFlat = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ImagesImageVariantFlat#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] variant_id
#   @return [String]
ImagesImageVariantFlatLoadMatch = Struct.new(
  :account_id,
  :variant_id,
  keyword_init: true
)

# ImagesImageVariantList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
ImagesImageVariantList = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ImagesImageVariantList#list.
#
# @!attribute [rw] account_id
#   @return [String]
ImagesImageVariantListListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# ImagesImageVariantSimple entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] neverRequireSignedURLs
#   @return [Boolean, nil]
#
# @!attribute [rw] options
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesImageVariantSimple = Struct.new(
  :id,
  :neverRequireSignedURLs,
  :options,
  :result,
  keyword_init: true
)

# Request payload for ImagesImageVariantSimple#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] variant_id
#   @return [String]
ImagesImageVariantSimpleLoadMatch = Struct.new(
  :account_id,
  :variant_id,
  keyword_init: true
)

# Request payload for ImagesImageVariantSimple#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] neverRequireSignedURLs
#   @return [Boolean, nil]
#
# @!attribute [rw] options
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesImageVariantSimpleCreateData = Struct.new(
  :account_id,
  :id,
  :neverRequireSignedURLs,
  :options,
  :result,
  keyword_init: true
)

# Request payload for ImagesImageVariantSimple#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] variant_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] neverRequireSignedURLs
#   @return [Boolean, nil]
#
# @!attribute [rw] options
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesImageVariantSimpleUpdateData = Struct.new(
  :account_id,
  :variant_id,
  :id,
  :neverRequireSignedURLs,
  :options,
  :result,
  keyword_init: true
)

# ImagesImagesList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ImagesImagesList = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ImagesImagesList#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] continuation_token
#   @return [String, nil]
#
# @!attribute [rw] creator
#   @return [String, nil]
#
# @!attribute [rw] meta_<field>_<operator>
#   @return [String, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
ImagesImagesListLoadMatch = Struct.new(
  :account_id,
  :continuation_token,
  :creator,
  :"meta_<field>_<operator>",
  :per_page,
  :sort_order,
  keyword_init: true
)

# Request payload for ImagesImagesList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] creator
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
ImagesImagesListListMatch = Struct.new(
  :account_id,
  :creator,
  :page,
  :per_page,
  keyword_init: true
)

# ImagesImagesStat entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesImagesStat = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ImagesImagesStat#load.
#
# @!attribute [rw] account_id
#   @return [String]
ImagesImagesStatLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# ImagesMetadataKey entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
ImagesMetadataKey = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ImagesMetadataKey#list.
#
# @!attribute [rw] account_id
#   @return [String]
ImagesMetadataKeyListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# ImagesSourcingkitConnectivityCheck entity data model.
#
# @!attribute [rw] account
#   @return [String, nil]
#
# @!attribute [rw] bucket
#   @return [String]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] secret
#   @return [Hash]
#
# @!attribute [rw] vendor
#   @return [String]
ImagesSourcingkitConnectivityCheck = Struct.new(
  :account,
  :bucket,
  :region,
  :result,
  :secret,
  :vendor,
  keyword_init: true
)

# Request payload for ImagesSourcingkitConnectivityCheck#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] source_id
#   @return [String]
ImagesSourcingkitConnectivityCheckLoadMatch = Struct.new(
  :account_id,
  :source_id,
  keyword_init: true
)

# Request payload for ImagesSourcingkitConnectivityCheck#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account
#   @return [String, nil]
#
# @!attribute [rw] bucket
#   @return [String]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] secret
#   @return [Hash]
#
# @!attribute [rw] vendor
#   @return [String]
ImagesSourcingkitConnectivityCheckCreateData = Struct.new(
  :account_id,
  :account,
  :bucket,
  :region,
  :result,
  :secret,
  :vendor,
  keyword_init: true
)

# ImagesSourcingkitMigration entity data model.
#
# @!attribute [rw] conflictBehaviour
#   @return [String, nil]
#
# @!attribute [rw] excludedContentTypes
#   @return [Array, nil]
#
# @!attribute [rw] pathPrefix
#   @return [String, nil]
#
# @!attribute [rw] rootDirectory
#   @return [String, nil]
#
# @!attribute [rw] sourceId
#   @return [String]
ImagesSourcingkitMigration = Struct.new(
  :conflictBehaviour,
  :excludedContentTypes,
  :pathPrefix,
  :rootDirectory,
  :sourceId,
  keyword_init: true
)

# Request payload for ImagesSourcingkitMigration#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] conflictBehaviour
#   @return [String, nil]
#
# @!attribute [rw] excludedContentTypes
#   @return [Array, nil]
#
# @!attribute [rw] pathPrefix
#   @return [String, nil]
#
# @!attribute [rw] rootDirectory
#   @return [String, nil]
#
# @!attribute [rw] sourceId
#   @return [String]
ImagesSourcingkitMigrationCreateData = Struct.new(
  :account_id,
  :conflictBehaviour,
  :excludedContentTypes,
  :pathPrefix,
  :rootDirectory,
  :sourceId,
  keyword_init: true
)

# ImagesSourcingkitMigrationList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
ImagesSourcingkitMigrationList = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ImagesSourcingkitMigrationList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
ImagesSourcingkitMigrationListListMatch = Struct.new(
  :account_id,
  :limit,
  :offset,
  keyword_init: true
)

# ImagesSourcingkitMigrationLogList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
ImagesSourcingkitMigrationLogList = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ImagesSourcingkitMigrationLogList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] migration_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
ImagesSourcingkitMigrationLogListListMatch = Struct.new(
  :account_id,
  :migration_id,
  :limit,
  :offset,
  keyword_init: true
)

# ImagesSourcingkitMigrationProgress entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesSourcingkitMigrationProgress = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ImagesSourcingkitMigrationProgress#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] migration_id
#   @return [String]
ImagesSourcingkitMigrationProgressLoadMatch = Struct.new(
  :account_id,
  :migration_id,
  keyword_init: true
)

# ImagesSourcingkitMigrationSingle entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesSourcingkitMigrationSingle = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ImagesSourcingkitMigrationSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] migration_id
#   @return [String]
ImagesSourcingkitMigrationSingleLoadMatch = Struct.new(
  :account_id,
  :migration_id,
  keyword_init: true
)

# Request payload for ImagesSourcingkitMigrationSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] migration_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesSourcingkitMigrationSingleUpdateData = Struct.new(
  :account_id,
  :migration_id,
  :result,
  keyword_init: true
)

# ImagesSourcingkitSource entity data model.
#
# @!attribute [rw] account
#   @return [String, nil]
#
# @!attribute [rw] bucket
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] secret
#   @return [Hash]
#
# @!attribute [rw] vendor
#   @return [String]
ImagesSourcingkitSource = Struct.new(
  :account,
  :bucket,
  :id,
  :name,
  :secret,
  :vendor,
  keyword_init: true
)

# Request payload for ImagesSourcingkitSource#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account
#   @return [String, nil]
#
# @!attribute [rw] bucket
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] secret
#   @return [Hash]
#
# @!attribute [rw] vendor
#   @return [String]
ImagesSourcingkitSourceCreateData = Struct.new(
  :account_id,
  :account,
  :bucket,
  :id,
  :name,
  :secret,
  :vendor,
  keyword_init: true
)

# Request payload for ImagesSourcingkitSource#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] account
#   @return [String, nil]
#
# @!attribute [rw] bucket
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] secret
#   @return [Hash, nil]
#
# @!attribute [rw] vendor
#   @return [String, nil]
ImagesSourcingkitSourceUpdateData = Struct.new(
  :account_id,
  :id,
  :account,
  :bucket,
  :name,
  :secret,
  :vendor,
  keyword_init: true
)

# ImagesSourcingkitSourceList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
ImagesSourcingkitSourceList = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ImagesSourcingkitSourceList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
ImagesSourcingkitSourceListListMatch = Struct.new(
  :account_id,
  :limit,
  :name,
  :offset,
  keyword_init: true
)

# ImagesSourcingkitSourceSingle entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
ImagesSourcingkitSourceSingle = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ImagesSourcingkitSourceSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] source_id
#   @return [String]
ImagesSourcingkitSourceSingleLoadMatch = Struct.new(
  :account_id,
  :source_id,
  keyword_init: true
)

# Migration entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Migration = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Migration#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
MigrationRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Source entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Source = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Source#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
SourceRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# V1n entity data model.
class V1n
end

# Request payload for V1n#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] image_id
#   @return [String]
V1nRemoveMatch = Struct.new(
  :account_id,
  :image_id,
  keyword_init: true
)

