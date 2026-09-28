# CloudflareImages SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareImagesFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareImagesBaseFeature.new
    when "test"
      CloudflareImagesTestFeature.new
    else
      CloudflareImagesBaseFeature.new
    end
  end
end
