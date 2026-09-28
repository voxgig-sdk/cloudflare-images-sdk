// Typed models for the CloudflareImages SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface CloudflareImage {
}

export interface CloudflareImageLoadMatch {
  account_id: string
  v1_id: string
}

export interface Image {
  etag?: string
  flows: any[]
  version: number
}

export interface ImageLoadMatch {
  zone_id: string
}

export interface ImageUpdateData {
  zone_id: string
  etag?: string
  flows?: any[]
  version?: number
}

export interface ImagesDeleted {
}

export interface ImagesDeletedRemoveMatch {
  account_id: string
  variant_id: string
}

export interface ImagesImageDirectUpload {
  expiry?: string
}

export interface ImagesImageDirectUploadCreateData {
  account_id: string
  expiry?: string
}

export interface ImagesImageKeyResponseCollection {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface ImagesImageKeyResponseCollectionListMatch {
  account_id: string
}

export interface ImagesImageKeyResponseCollectionUpdateData {
  account_id: string
  signing_key_name: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface ImagesImageKeyResponseCollectionRemoveMatch {
  account_id: string
  signing_key_name: string
}

export interface ImagesImageResponseSingle {
  creator?: string
  metadata?: Record<string, any>
  requireSignedURLs?: boolean
  result?: Record<string, any>
}

export interface ImagesImageResponseSingleLoadMatch {
  account_id: string
  image_id: string
}

export interface ImagesImageResponseSingleCreateData {
  account_id: string
  creator?: string
  metadata?: Record<string, any>
  requireSignedURLs?: boolean
  result?: Record<string, any>
}

export interface ImagesImageResponseSingleUpdateData {
  account_id: string
  image_id: string
  creator?: string
  metadata?: Record<string, any>
  requireSignedURLs?: boolean
  result?: Record<string, any>
}

export interface ImagesImageVariantFlat {
  result: Record<string, any>
}

export interface ImagesImageVariantFlatLoadMatch {
  account_id: string
  variant_id: string
}

export interface ImagesImageVariantList {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface ImagesImageVariantListListMatch {
  account_id: string
}

export interface ImagesImageVariantSimple {
  id: string
  neverRequireSignedURLs?: boolean
  options: Record<string, any>
  result?: Record<string, any>
}

export interface ImagesImageVariantSimpleLoadMatch {
  account_id: string
  variant_id: string
}

export interface ImagesImageVariantSimpleCreateData {
  account_id: string
  id: string
  neverRequireSignedURLs?: boolean
  options: Record<string, any>
  result?: Record<string, any>
}

export interface ImagesImageVariantSimpleUpdateData {
  account_id: string
  variant_id: string
  id?: string
  neverRequireSignedURLs?: boolean
  options?: Record<string, any>
  result?: Record<string, any>
}

export interface ImagesImagesList {
  errors: any[]
  messages: any[]
  result?: Record<string, any>
  success: boolean
}

export interface ImagesImagesListLoadMatch {
  account_id: string
  continuation_token?: string
  creator?: string
  "meta_<field>_<operator>"?: string
  per_page?: number
  sort_order?: string
}

export interface ImagesImagesListListMatch {
  account_id: string
  creator?: string
  page?: number
  per_page?: number
}

export interface ImagesImagesStat {
  result?: Record<string, any>
}

export interface ImagesImagesStatLoadMatch {
  account_id: string
}

export interface ImagesMetadataKey {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface ImagesMetadataKeyListMatch {
  account_id: string
}

export interface ImagesSourcingkitConnectivityCheck {
  account?: string
  bucket: string
  region?: string
  result?: Record<string, any>
  secret: Record<string, any>
  vendor: string
}

export interface ImagesSourcingkitConnectivityCheckLoadMatch {
  account_id: string
  source_id: string
}

export interface ImagesSourcingkitConnectivityCheckCreateData {
  account_id: string
  account?: string
  bucket: string
  region?: string
  result?: Record<string, any>
  secret: Record<string, any>
  vendor: string
}

export interface ImagesSourcingkitMigration {
  conflictBehaviour?: string
  excludedContentTypes?: any[]
  pathPrefix?: string
  rootDirectory?: string
  sourceId: string
}

export interface ImagesSourcingkitMigrationCreateData {
  account_id: string
  conflictBehaviour?: string
  excludedContentTypes?: any[]
  pathPrefix?: string
  rootDirectory?: string
  sourceId: string
}

export interface ImagesSourcingkitMigrationList {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface ImagesSourcingkitMigrationListListMatch {
  account_id: string
  limit?: number
  offset?: number
}

export interface ImagesSourcingkitMigrationLogList {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface ImagesSourcingkitMigrationLogListListMatch {
  account_id: string
  migration_id: string
  limit?: number
  offset?: number
}

export interface ImagesSourcingkitMigrationProgress {
  result?: Record<string, any>
}

export interface ImagesSourcingkitMigrationProgressLoadMatch {
  account_id: string
  migration_id: string
}

export interface ImagesSourcingkitMigrationSingle {
  result?: Record<string, any>
}

export interface ImagesSourcingkitMigrationSingleLoadMatch {
  account_id: string
  migration_id: string
}

export interface ImagesSourcingkitMigrationSingleUpdateData {
  account_id: string
  migration_id: string
  result?: Record<string, any>
}

export interface ImagesSourcingkitSource {
  account?: string
  bucket: string
  id?: string
  name: string
  secret: Record<string, any>
  vendor: string
}

export interface ImagesSourcingkitSourceCreateData {
  account_id: string
  account?: string
  bucket: string
  id?: string
  name: string
  secret: Record<string, any>
  vendor: string
}

export interface ImagesSourcingkitSourceUpdateData {
  account_id: string
  id: string
  account?: string
  bucket?: string
  name?: string
  secret?: Record<string, any>
  vendor?: string
}

export interface ImagesSourcingkitSourceList {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface ImagesSourcingkitSourceListListMatch {
  account_id: string
  limit?: number
  name?: string
  offset?: number
}

export interface ImagesSourcingkitSourceSingle {
  result?: Record<string, any>
}

export interface ImagesSourcingkitSourceSingleLoadMatch {
  account_id: string
  source_id: string
}

export interface Migration {
  id?: string
}

export interface MigrationRemoveMatch {
  account_id: string
  id: string
}

export interface Source {
  id?: string
}

export interface SourceRemoveMatch {
  account_id: string
  id: string
}

export interface V1n {
}

export interface V1nRemoveMatch {
  account_id: string
  image_id: string
}

