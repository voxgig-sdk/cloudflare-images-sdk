package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCloudflareImageEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImageEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesDeletedEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesImageDirectUploadEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesImageKeyResponseCollectionEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesImageResponseSingleEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesImageVariantFlatEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesImageVariantListEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesImageVariantSimpleEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesImagesListEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesImagesStatEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesMetadataKeyEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesSourcingkitConnectivityCheckEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesSourcingkitMigrationEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesSourcingkitMigrationListEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesSourcingkitMigrationLogListEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesSourcingkitMigrationProgressEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesSourcingkitMigrationSingleEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesSourcingkitSourceEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesSourcingkitSourceListEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewImagesSourcingkitSourceSingleEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewMigrationEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewSourceEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

var NewV1nEntityFunc func(client *CloudflareImagesSDK, entopts map[string]any) CloudflareImagesEntity

