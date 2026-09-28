# CloudflareImages SDK utility: make_context

from cloudflareimages_sdk.core.context import CloudflareImagesContext


def make_context_util(ctxmap, basectx):
    return CloudflareImagesContext(ctxmap, basectx)
