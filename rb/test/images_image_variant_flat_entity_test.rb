# ImagesImageVariantFlat entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareImages_sdk"
require_relative "runner"

class ImagesImageVariantFlatEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareImagesSDK.test(nil, nil)
    ent = testsdk.ImagesImageVariantFlat(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = images_image_variant_flat_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "images_image_variant_flat." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_VARIANT_FLAT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    images_image_variant_flat_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.images_image_variant_flat")))
    images_image_variant_flat_ref01_data = nil
    if images_image_variant_flat_ref01_data_raw.length > 0
      images_image_variant_flat_ref01_data = Helpers.to_map(images_image_variant_flat_ref01_data_raw[0][1])
    end

    # LOAD
    images_image_variant_flat_ref01_ent = client.ImagesImageVariantFlat(nil)
    images_image_variant_flat_ref01_match_dt0 = {}
    images_image_variant_flat_ref01_data_dt0_loaded = images_image_variant_flat_ref01_ent.load(images_image_variant_flat_ref01_match_dt0, nil)
    assert !images_image_variant_flat_ref01_data_dt0_loaded.nil?

  end
end

def images_image_variant_flat_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "images_image_variant_flat", "ImagesImageVariantFlatTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareImagesSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["images_image_variant_flat01", "images_image_variant_flat02", "images_image_variant_flat03", "account01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_VARIANT_FLAT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_VARIANT_FLAT_ENTID" => idmap,
    "CLOUDFLARE_IMAGES_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_IMAGES_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_IMAGES_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_VARIANT_FLAT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CLOUDFLARE_IMAGES_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_IMAGES_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareImagesSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_IMAGES_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_IMAGES_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
