package voxgigcloudflareimagessdk

import (
	"github.com/voxgig-sdk/cloudflare-images-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-images-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-images-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-images-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareImagesSDK = core.CloudflareImagesSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareImagesEntity = core.CloudflareImagesEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareImagesError = core.CloudflareImagesError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCloudflareImageEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewCloudflareImageEntity(client, entopts)
	}
	core.NewImageEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImageEntity(client, entopts)
	}
	core.NewImagesDeletedEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesDeletedEntity(client, entopts)
	}
	core.NewImagesImageDirectUploadEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesImageDirectUploadEntity(client, entopts)
	}
	core.NewImagesImageKeyResponseCollectionEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesImageKeyResponseCollectionEntity(client, entopts)
	}
	core.NewImagesImageResponseSingleEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesImageResponseSingleEntity(client, entopts)
	}
	core.NewImagesImageVariantFlatEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesImageVariantFlatEntity(client, entopts)
	}
	core.NewImagesImageVariantListEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesImageVariantListEntity(client, entopts)
	}
	core.NewImagesImageVariantSimpleEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesImageVariantSimpleEntity(client, entopts)
	}
	core.NewImagesImagesListEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesImagesListEntity(client, entopts)
	}
	core.NewImagesImagesStatEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesImagesStatEntity(client, entopts)
	}
	core.NewImagesMetadataKeyEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesMetadataKeyEntity(client, entopts)
	}
	core.NewImagesSourcingkitConnectivityCheckEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesSourcingkitConnectivityCheckEntity(client, entopts)
	}
	core.NewImagesSourcingkitMigrationEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesSourcingkitMigrationEntity(client, entopts)
	}
	core.NewImagesSourcingkitMigrationListEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesSourcingkitMigrationListEntity(client, entopts)
	}
	core.NewImagesSourcingkitMigrationLogListEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesSourcingkitMigrationLogListEntity(client, entopts)
	}
	core.NewImagesSourcingkitMigrationProgressEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesSourcingkitMigrationProgressEntity(client, entopts)
	}
	core.NewImagesSourcingkitMigrationSingleEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesSourcingkitMigrationSingleEntity(client, entopts)
	}
	core.NewImagesSourcingkitSourceEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesSourcingkitSourceEntity(client, entopts)
	}
	core.NewImagesSourcingkitSourceListEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesSourcingkitSourceListEntity(client, entopts)
	}
	core.NewImagesSourcingkitSourceSingleEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewImagesSourcingkitSourceSingleEntity(client, entopts)
	}
	core.NewMigrationEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewMigrationEntity(client, entopts)
	}
	core.NewSourceEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewSourceEntity(client, entopts)
	}
	core.NewV1nEntityFunc = func(client *core.CloudflareImagesSDK, entopts map[string]any) core.CloudflareImagesEntity {
		return entity.NewV1nEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareImagesSDK = core.NewCloudflareImagesSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareImagesSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareImagesSDK  { return NewCloudflareImagesSDK(nil) }
func Test() *CloudflareImagesSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
