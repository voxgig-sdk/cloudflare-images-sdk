# CloudflareImages SDK exists test

import pytest
from cloudflareimages_sdk import CloudflareImagesSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareImagesSDK.test(None, None)
        assert testsdk is not None
