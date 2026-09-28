# CloudflareImages SDK exists test

require "minitest/autorun"
require_relative "../CloudflareImages_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareImagesSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
