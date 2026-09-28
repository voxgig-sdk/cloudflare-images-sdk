-- CloudflareImages SDK error

local CloudflareImagesError = {}
CloudflareImagesError.__index = CloudflareImagesError


function CloudflareImagesError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareImagesError)
  self.is_sdk_error = true
  self.sdk = "CloudflareImages"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareImagesError:error()
  return self.msg
end


function CloudflareImagesError:__tostring()
  return self.msg
end


return CloudflareImagesError
