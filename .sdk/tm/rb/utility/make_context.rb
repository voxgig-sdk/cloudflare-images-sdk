# CloudflareImages SDK utility: make_context
require_relative '../core/context'
module CloudflareImagesUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareImagesContext.new(ctxmap, basectx)
  }
end
