# CloudflareImages SDK utility: prepare_body
module CloudflareImagesUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
