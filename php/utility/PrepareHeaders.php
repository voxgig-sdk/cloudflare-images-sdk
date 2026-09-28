<?php
declare(strict_types=1);

// CloudflareImages SDK utility: prepare_headers

class CloudflareImagesPrepareHeaders
{
    public static function call(CloudflareImagesContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
