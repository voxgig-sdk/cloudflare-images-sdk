// Typed models for the CloudflareImages SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-images-sdk/go/core"
)

// CloudflareImage is the typed data model for the cloudflare_image entity.
type CloudflareImage struct {
}

// CloudflareImageLoadMatch is the typed request payload for CloudflareImage.LoadTyped.
type CloudflareImageLoadMatch struct {
	AccountId string `json:"account_id"`
	V1Id string `json:"v1_id"`
}

// Image is the typed data model for the image entity.
type Image struct {
}

// ImageLoadMatch is the typed request payload for Image.LoadTyped.
type ImageLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// ImageUpdateData is the typed request payload for Image.UpdateTyped.
type ImageUpdateData struct {
	ZoneId string `json:"zone_id"`
	Etag *string `json:"etag,omitempty"`
	Flows *[]any `json:"flows,omitempty"`
	Version *float64 `json:"version,omitempty"`
}

// ImagesDeleted is the typed data model for the images_deleted entity.
type ImagesDeleted struct {
}

// ImagesDeletedRemoveMatch is the typed request payload for ImagesDeleted.RemoveTyped.
type ImagesDeletedRemoveMatch struct {
	AccountId string `json:"account_id"`
	VariantId string `json:"variant_id"`
}

// ImagesImageDirectUpload is the typed data model for the images_image_direct_upload entity.
type ImagesImageDirectUpload struct {
}

// ImagesImageDirectUploadCreateData is the typed request payload for ImagesImageDirectUpload.CreateTyped.
type ImagesImageDirectUploadCreateData struct {
	AccountId string `json:"account_id"`
	Expiry *string `json:"expiry,omitempty"`
}

// ImagesImageKeyResponseCollection is the typed data model for the images_image_key_response_collection entity.
type ImagesImageKeyResponseCollection struct {
}

// ImagesImageKeyResponseCollectionListMatch is the typed request payload for ImagesImageKeyResponseCollection.ListTyped.
type ImagesImageKeyResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
}

// ImagesImageKeyResponseCollectionUpdateData is the typed request payload for ImagesImageKeyResponseCollection.UpdateTyped.
type ImagesImageKeyResponseCollectionUpdateData struct {
	AccountId string `json:"account_id"`
	SigningKeyName string `json:"signing_key_name"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ImagesImageKeyResponseCollectionRemoveMatch is the typed request payload for ImagesImageKeyResponseCollection.RemoveTyped.
type ImagesImageKeyResponseCollectionRemoveMatch struct {
	AccountId string `json:"account_id"`
	SigningKeyName string `json:"signing_key_name"`
}

// ImagesImageResponseSingle is the typed data model for the images_image_response_single entity.
type ImagesImageResponseSingle struct {
}

// ImagesImageResponseSingleLoadMatch is the typed request payload for ImagesImageResponseSingle.LoadTyped.
type ImagesImageResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	ImageId string `json:"image_id"`
}

// ImagesImageResponseSingleCreateData is the typed request payload for ImagesImageResponseSingle.CreateTyped.
type ImagesImageResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Creator *string `json:"creator,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	RequireSignedURLs *bool `json:"requireSignedURLs,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// ImagesImageResponseSingleUpdateData is the typed request payload for ImagesImageResponseSingle.UpdateTyped.
type ImagesImageResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	ImageId string `json:"image_id"`
	Creator *string `json:"creator,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	RequireSignedURLs *bool `json:"requireSignedURLs,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// ImagesImageVariantFlat is the typed data model for the images_image_variant_flat entity.
type ImagesImageVariantFlat struct {
}

// ImagesImageVariantFlatLoadMatch is the typed request payload for ImagesImageVariantFlat.LoadTyped.
type ImagesImageVariantFlatLoadMatch struct {
	AccountId string `json:"account_id"`
	VariantId string `json:"variant_id"`
}

// ImagesImageVariantList is the typed data model for the images_image_variant_list entity.
type ImagesImageVariantList struct {
}

// ImagesImageVariantListListMatch is the typed request payload for ImagesImageVariantList.ListTyped.
type ImagesImageVariantListListMatch struct {
	AccountId string `json:"account_id"`
}

// ImagesImageVariantSimple is the typed data model for the images_image_variant_simple entity.
type ImagesImageVariantSimple struct {
}

// ImagesImageVariantSimpleLoadMatch is the typed request payload for ImagesImageVariantSimple.LoadTyped.
type ImagesImageVariantSimpleLoadMatch struct {
	AccountId string `json:"account_id"`
	VariantId string `json:"variant_id"`
}

// ImagesImageVariantSimpleCreateData is the typed request payload for ImagesImageVariantSimple.CreateTyped.
type ImagesImageVariantSimpleCreateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	NeverRequireSignedURLs *bool `json:"neverRequireSignedURLs,omitempty"`
	Options map[string]any `json:"options"`
	Result *map[string]any `json:"result,omitempty"`
}

// ImagesImageVariantSimpleUpdateData is the typed request payload for ImagesImageVariantSimple.UpdateTyped.
type ImagesImageVariantSimpleUpdateData struct {
	AccountId string `json:"account_id"`
	VariantId string `json:"variant_id"`
	Id *string `json:"id,omitempty"`
	NeverRequireSignedURLs *bool `json:"neverRequireSignedURLs,omitempty"`
	Options *map[string]any `json:"options,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// ImagesImagesList is the typed data model for the images_images_list entity.
type ImagesImagesList struct {
}

// ImagesImagesListLoadMatch is the typed request payload for ImagesImagesList.LoadTyped.
type ImagesImagesListLoadMatch struct {
	AccountId string `json:"account_id"`
	ContinuationToken *string `json:"continuation_token,omitempty"`
	Creator *string `json:"creator,omitempty"`
	MetaFieldOperator *string `json:"meta_<field>_<operator>,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
}

// ImagesImagesListListMatch is the typed request payload for ImagesImagesList.ListTyped.
type ImagesImagesListListMatch struct {
	AccountId string `json:"account_id"`
	Creator *string `json:"creator,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// ImagesImagesStat is the typed data model for the images_images_stat entity.
type ImagesImagesStat struct {
}

// ImagesImagesStatLoadMatch is the typed request payload for ImagesImagesStat.LoadTyped.
type ImagesImagesStatLoadMatch struct {
	AccountId string `json:"account_id"`
}

// ImagesMetadataKey is the typed data model for the images_metadata_key entity.
type ImagesMetadataKey struct {
}

// ImagesMetadataKeyListMatch is the typed request payload for ImagesMetadataKey.ListTyped.
type ImagesMetadataKeyListMatch struct {
	AccountId string `json:"account_id"`
}

// ImagesSourcingkitConnectivityCheck is the typed data model for the images_sourcingkit_connectivity_check entity.
type ImagesSourcingkitConnectivityCheck struct {
}

// ImagesSourcingkitConnectivityCheckLoadMatch is the typed request payload for ImagesSourcingkitConnectivityCheck.LoadTyped.
type ImagesSourcingkitConnectivityCheckLoadMatch struct {
	AccountId string `json:"account_id"`
	SourceId string `json:"source_id"`
}

// ImagesSourcingkitConnectivityCheckCreateData is the typed request payload for ImagesSourcingkitConnectivityCheck.CreateTyped.
type ImagesSourcingkitConnectivityCheckCreateData struct {
	AccountId string `json:"account_id"`
	Account *string `json:"account,omitempty"`
	Bucket string `json:"bucket"`
	Region *string `json:"region,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Secret map[string]any `json:"secret"`
	Vendor string `json:"vendor"`
}

// ImagesSourcingkitMigration is the typed data model for the images_sourcingkit_migration entity.
type ImagesSourcingkitMigration struct {
}

// ImagesSourcingkitMigrationCreateData is the typed request payload for ImagesSourcingkitMigration.CreateTyped.
type ImagesSourcingkitMigrationCreateData struct {
	AccountId string `json:"account_id"`
	ConflictBehaviour *string `json:"conflictBehaviour,omitempty"`
	ExcludedContentTypes *[]any `json:"excludedContentTypes,omitempty"`
	PathPrefix *string `json:"pathPrefix,omitempty"`
	RootDirectory *string `json:"rootDirectory,omitempty"`
	SourceId string `json:"sourceId"`
}

// ImagesSourcingkitMigrationList is the typed data model for the images_sourcingkit_migration_list entity.
type ImagesSourcingkitMigrationList struct {
}

// ImagesSourcingkitMigrationListListMatch is the typed request payload for ImagesSourcingkitMigrationList.ListTyped.
type ImagesSourcingkitMigrationListListMatch struct {
	AccountId string `json:"account_id"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
}

// ImagesSourcingkitMigrationLogList is the typed data model for the images_sourcingkit_migration_log_list entity.
type ImagesSourcingkitMigrationLogList struct {
}

// ImagesSourcingkitMigrationLogListListMatch is the typed request payload for ImagesSourcingkitMigrationLogList.ListTyped.
type ImagesSourcingkitMigrationLogListListMatch struct {
	AccountId string `json:"account_id"`
	MigrationId string `json:"migration_id"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
}

// ImagesSourcingkitMigrationProgress is the typed data model for the images_sourcingkit_migration_progress entity.
type ImagesSourcingkitMigrationProgress struct {
}

// ImagesSourcingkitMigrationProgressLoadMatch is the typed request payload for ImagesSourcingkitMigrationProgress.LoadTyped.
type ImagesSourcingkitMigrationProgressLoadMatch struct {
	AccountId string `json:"account_id"`
	MigrationId string `json:"migration_id"`
}

// ImagesSourcingkitMigrationSingle is the typed data model for the images_sourcingkit_migration_single entity.
type ImagesSourcingkitMigrationSingle struct {
}

// ImagesSourcingkitMigrationSingleLoadMatch is the typed request payload for ImagesSourcingkitMigrationSingle.LoadTyped.
type ImagesSourcingkitMigrationSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	MigrationId string `json:"migration_id"`
}

// ImagesSourcingkitMigrationSingleUpdateData is the typed request payload for ImagesSourcingkitMigrationSingle.UpdateTyped.
type ImagesSourcingkitMigrationSingleUpdateData struct {
	AccountId string `json:"account_id"`
	MigrationId string `json:"migration_id"`
	Result *map[string]any `json:"result,omitempty"`
}

// ImagesSourcingkitSource is the typed data model for the images_sourcingkit_source entity.
type ImagesSourcingkitSource struct {
}

// ImagesSourcingkitSourceCreateData is the typed request payload for ImagesSourcingkitSource.CreateTyped.
type ImagesSourcingkitSourceCreateData struct {
	AccountId string `json:"account_id"`
	Account *string `json:"account,omitempty"`
	Bucket string `json:"bucket"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Secret map[string]any `json:"secret"`
	Vendor string `json:"vendor"`
}

// ImagesSourcingkitSourceUpdateData is the typed request payload for ImagesSourcingkitSource.UpdateTyped.
type ImagesSourcingkitSourceUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Account *string `json:"account,omitempty"`
	Bucket *string `json:"bucket,omitempty"`
	Name *string `json:"name,omitempty"`
	Secret *map[string]any `json:"secret,omitempty"`
	Vendor *string `json:"vendor,omitempty"`
}

// ImagesSourcingkitSourceList is the typed data model for the images_sourcingkit_source_list entity.
type ImagesSourcingkitSourceList struct {
}

// ImagesSourcingkitSourceListListMatch is the typed request payload for ImagesSourcingkitSourceList.ListTyped.
type ImagesSourcingkitSourceListListMatch struct {
	AccountId string `json:"account_id"`
	Limit *int `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	Offset *int `json:"offset,omitempty"`
}

// ImagesSourcingkitSourceSingle is the typed data model for the images_sourcingkit_source_single entity.
type ImagesSourcingkitSourceSingle struct {
}

// ImagesSourcingkitSourceSingleLoadMatch is the typed request payload for ImagesSourcingkitSourceSingle.LoadTyped.
type ImagesSourcingkitSourceSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	SourceId string `json:"source_id"`
}

// Migration is the typed data model for the migration entity.
type Migration struct {
}

// MigrationRemoveMatch is the typed request payload for Migration.RemoveTyped.
type MigrationRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Source is the typed data model for the source entity.
type Source struct {
}

// SourceRemoveMatch is the typed request payload for Source.RemoveTyped.
type SourceRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// V1n is the typed data model for the v1n entity.
type V1n struct {
}

// V1nRemoveMatch is the typed request payload for V1n.RemoveTyped.
type V1nRemoveMatch struct {
	AccountId string `json:"account_id"`
	ImageId string `json:"image_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
