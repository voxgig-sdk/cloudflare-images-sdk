# ImagesSourcingkitSource entity test

import json
import os
import time

import pytest

from cloudflareimages_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareimages_sdk import CloudflareImagesSDK
from cloudflareimages_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestImagesSourcingkitSourceEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareImagesSDK.test(None, None)
        ent = testsdk.ImagesSourcingkitSource(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _images_sourcingkit_source_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "images_sourcingkit_source." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_SOURCE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        images_sourcingkit_source_ref01_ent = client.ImagesSourcingkitSource(None)
        images_sourcingkit_source_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.images_sourcingkit_source"), "images_sourcingkit_source_ref01"))
        images_sourcingkit_source_ref01_data["account_id"] = setup["idmap"]["account01"]

        images_sourcingkit_source_ref01_data = helpers.to_map(runner.entity_data(images_sourcingkit_source_ref01_ent.create(images_sourcingkit_source_ref01_data, None)))
        assert images_sourcingkit_source_ref01_data is not None
        assert images_sourcingkit_source_ref01_data["id"] is not None

        # UPDATE
        images_sourcingkit_source_ref01_data_up0_up = {
            "id": images_sourcingkit_source_ref01_data["id"],
            "account_id": setup["idmap"]["account_id"],
        }

        images_sourcingkit_source_ref01_markdef_up0_name = "account"
        images_sourcingkit_source_ref01_markdef_up0_value = "Mark01-images_sourcingkit_source_ref01_" + str(setup["now"])
        images_sourcingkit_source_ref01_data_up0_up[images_sourcingkit_source_ref01_markdef_up0_name] = images_sourcingkit_source_ref01_markdef_up0_value

        images_sourcingkit_source_ref01_resdata_up0 = helpers.to_map(runner.entity_data(images_sourcingkit_source_ref01_ent.update(images_sourcingkit_source_ref01_data_up0_up, None)))
        assert images_sourcingkit_source_ref01_resdata_up0 is not None
        assert images_sourcingkit_source_ref01_resdata_up0["id"] == images_sourcingkit_source_ref01_data_up0_up["id"]
        assert images_sourcingkit_source_ref01_resdata_up0[images_sourcingkit_source_ref01_markdef_up0_name] == images_sourcingkit_source_ref01_markdef_up0_value



def _images_sourcingkit_source_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/images_sourcingkit_source/ImagesSourcingkitSourceTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareImagesSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["images_sourcingkit_source01", "images_sourcingkit_source02", "images_sourcingkit_source03", "account01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_SOURCE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_SOURCE_ENTID": idmap,
        "CLOUDFLARE_IMAGES_TEST_LIVE": "FALSE",
        "CLOUDFLARE_IMAGES_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_IMAGES_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_SOURCE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("account_id") is None:
        idmap_resolved["account_id"] = idmap_resolved.get("account01")

    if env.get("CLOUDFLARE_IMAGES_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CLOUDFLARE_IMAGES_APIKEY"),
            },
            extra or {},
        ])
        client = CloudflareImagesSDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDFLARE_IMAGES_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDFLARE_IMAGES_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
