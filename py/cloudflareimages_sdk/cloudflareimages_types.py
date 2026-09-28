# Typed models for the CloudflareImages SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CloudflareImage(TypedDict):
    pass


class CloudflareImageLoadMatch(TypedDict):
    account_id: str
    v1_id: str


class ImageRequired(TypedDict):
    flows: list
    version: float


class Image(ImageRequired, total=False):
    etag: str


class ImageLoadMatch(TypedDict):
    zone_id: str


class ImageUpdateDataRequired(TypedDict):
    zone_id: str


class ImageUpdateData(ImageUpdateDataRequired, total=False):
    etag: str
    flows: list
    version: float


class ImagesDeleted(TypedDict):
    pass


class ImagesDeletedRemoveMatch(TypedDict):
    account_id: str
    variant_id: str


class ImagesImageDirectUpload(TypedDict, total=False):
    expiry: str


class ImagesImageDirectUploadCreateDataRequired(TypedDict):
    account_id: str


class ImagesImageDirectUploadCreateData(ImagesImageDirectUploadCreateDataRequired, total=False):
    expiry: str


class ImagesImageKeyResponseCollection(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class ImagesImageKeyResponseCollectionListMatch(TypedDict):
    account_id: str


class ImagesImageKeyResponseCollectionUpdateDataRequired(TypedDict):
    account_id: str
    signing_key_name: str


class ImagesImageKeyResponseCollectionUpdateData(ImagesImageKeyResponseCollectionUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool


class ImagesImageKeyResponseCollectionRemoveMatch(TypedDict):
    account_id: str
    signing_key_name: str


class ImagesImageResponseSingle(TypedDict, total=False):
    creator: str
    metadata: dict
    requireSignedURLs: bool
    result: dict


class ImagesImageResponseSingleLoadMatch(TypedDict):
    account_id: str
    image_id: str


class ImagesImageResponseSingleCreateDataRequired(TypedDict):
    account_id: str


class ImagesImageResponseSingleCreateData(ImagesImageResponseSingleCreateDataRequired, total=False):
    creator: str
    metadata: dict
    requireSignedURLs: bool
    result: dict


class ImagesImageResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    image_id: str


class ImagesImageResponseSingleUpdateData(ImagesImageResponseSingleUpdateDataRequired, total=False):
    creator: str
    metadata: dict
    requireSignedURLs: bool
    result: dict


class ImagesImageVariantFlat(TypedDict):
    result: dict


class ImagesImageVariantFlatLoadMatch(TypedDict):
    account_id: str
    variant_id: str


class ImagesImageVariantList(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class ImagesImageVariantListListMatch(TypedDict):
    account_id: str


class ImagesImageVariantSimpleRequired(TypedDict):
    id: str
    options: dict


class ImagesImageVariantSimple(ImagesImageVariantSimpleRequired, total=False):
    neverRequireSignedURLs: bool
    result: dict


class ImagesImageVariantSimpleLoadMatch(TypedDict):
    account_id: str
    variant_id: str


class ImagesImageVariantSimpleCreateDataRequired(TypedDict):
    account_id: str
    id: str
    options: dict


class ImagesImageVariantSimpleCreateData(ImagesImageVariantSimpleCreateDataRequired, total=False):
    neverRequireSignedURLs: bool
    result: dict


class ImagesImageVariantSimpleUpdateDataRequired(TypedDict):
    account_id: str
    variant_id: str


class ImagesImageVariantSimpleUpdateData(ImagesImageVariantSimpleUpdateDataRequired, total=False):
    id: str
    neverRequireSignedURLs: bool
    options: dict
    result: dict


class ImagesImagesListRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class ImagesImagesList(ImagesImagesListRequired, total=False):
    result: dict


class ImagesImagesListLoadMatchRequired(TypedDict):
    account_id: str


class ImagesImagesListLoadMatch(ImagesImagesListLoadMatchRequired, total=False):
    continuation_token: str
    creator: str
    per_page: float
    sort_order: str


class ImagesImagesListListMatchRequired(TypedDict):
    account_id: str


class ImagesImagesListListMatch(ImagesImagesListListMatchRequired, total=False):
    creator: str
    page: float
    per_page: float


class ImagesImagesStat(TypedDict, total=False):
    result: dict


class ImagesImagesStatLoadMatch(TypedDict):
    account_id: str


class ImagesMetadataKey(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class ImagesMetadataKeyListMatch(TypedDict):
    account_id: str


class ImagesSourcingkitConnectivityCheckRequired(TypedDict):
    bucket: str
    secret: dict
    vendor: str


class ImagesSourcingkitConnectivityCheck(ImagesSourcingkitConnectivityCheckRequired, total=False):
    account: str
    region: str
    result: dict


class ImagesSourcingkitConnectivityCheckLoadMatch(TypedDict):
    account_id: str
    source_id: str


class ImagesSourcingkitConnectivityCheckCreateDataRequired(TypedDict):
    account_id: str
    bucket: str
    secret: dict
    vendor: str


class ImagesSourcingkitConnectivityCheckCreateData(ImagesSourcingkitConnectivityCheckCreateDataRequired, total=False):
    account: str
    region: str
    result: dict


class ImagesSourcingkitMigrationRequired(TypedDict):
    sourceId: str


class ImagesSourcingkitMigration(ImagesSourcingkitMigrationRequired, total=False):
    conflictBehaviour: str
    excludedContentTypes: list
    pathPrefix: str
    rootDirectory: str


class ImagesSourcingkitMigrationCreateDataRequired(TypedDict):
    account_id: str
    sourceId: str


class ImagesSourcingkitMigrationCreateData(ImagesSourcingkitMigrationCreateDataRequired, total=False):
    conflictBehaviour: str
    excludedContentTypes: list
    pathPrefix: str
    rootDirectory: str


class ImagesSourcingkitMigrationList(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class ImagesSourcingkitMigrationListListMatchRequired(TypedDict):
    account_id: str


class ImagesSourcingkitMigrationListListMatch(ImagesSourcingkitMigrationListListMatchRequired, total=False):
    limit: int
    offset: int


class ImagesSourcingkitMigrationLogList(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class ImagesSourcingkitMigrationLogListListMatchRequired(TypedDict):
    account_id: str
    migration_id: str


class ImagesSourcingkitMigrationLogListListMatch(ImagesSourcingkitMigrationLogListListMatchRequired, total=False):
    limit: int
    offset: int


class ImagesSourcingkitMigrationProgress(TypedDict, total=False):
    result: dict


class ImagesSourcingkitMigrationProgressLoadMatch(TypedDict):
    account_id: str
    migration_id: str


class ImagesSourcingkitMigrationSingle(TypedDict, total=False):
    result: dict


class ImagesSourcingkitMigrationSingleLoadMatch(TypedDict):
    account_id: str
    migration_id: str


class ImagesSourcingkitMigrationSingleUpdateDataRequired(TypedDict):
    account_id: str
    migration_id: str


class ImagesSourcingkitMigrationSingleUpdateData(ImagesSourcingkitMigrationSingleUpdateDataRequired, total=False):
    result: dict


class ImagesSourcingkitSourceRequired(TypedDict):
    bucket: str
    name: str
    secret: dict
    vendor: str


class ImagesSourcingkitSource(ImagesSourcingkitSourceRequired, total=False):
    account: str
    id: str


class ImagesSourcingkitSourceCreateDataRequired(TypedDict):
    account_id: str
    bucket: str
    name: str
    secret: dict
    vendor: str


class ImagesSourcingkitSourceCreateData(ImagesSourcingkitSourceCreateDataRequired, total=False):
    account: str
    id: str


class ImagesSourcingkitSourceUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class ImagesSourcingkitSourceUpdateData(ImagesSourcingkitSourceUpdateDataRequired, total=False):
    account: str
    bucket: str
    name: str
    secret: dict
    vendor: str


class ImagesSourcingkitSourceList(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class ImagesSourcingkitSourceListListMatchRequired(TypedDict):
    account_id: str


class ImagesSourcingkitSourceListListMatch(ImagesSourcingkitSourceListListMatchRequired, total=False):
    limit: int
    name: str
    offset: int


class ImagesSourcingkitSourceSingle(TypedDict, total=False):
    result: dict


class ImagesSourcingkitSourceSingleLoadMatch(TypedDict):
    account_id: str
    source_id: str


class Migration(TypedDict, total=False):
    id: str


class MigrationRemoveMatch(TypedDict):
    account_id: str
    id: str


class Source(TypedDict, total=False):
    id: str


class SourceRemoveMatch(TypedDict):
    account_id: str
    id: str


class V1n(TypedDict):
    pass


class V1nRemoveMatch(TypedDict):
    account_id: str
    image_id: str
