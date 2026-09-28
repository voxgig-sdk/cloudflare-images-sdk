-- CloudflareImages SDK exists test

local sdk = require("cloudflare-images_sdk")

describe("CloudflareImagesSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
