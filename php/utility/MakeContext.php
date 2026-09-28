<?php
declare(strict_types=1);

// CloudflareImages SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareImagesMakeContext
{
    public static function call(array $ctxmap, ?CloudflareImagesContext $basectx): CloudflareImagesContext
    {
        return new CloudflareImagesContext($ctxmap, $basectx);
    }
}
