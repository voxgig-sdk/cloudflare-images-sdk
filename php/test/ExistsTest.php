<?php
declare(strict_types=1);

// CloudflareImages SDK exists test

require_once __DIR__ . '/../cloudflareimages_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CloudflareImagesSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
