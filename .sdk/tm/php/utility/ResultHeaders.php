<?php
declare(strict_types=1);

// CloudflareImages SDK utility: result_headers

class CloudflareImagesResultHeaders
{
    public static function call(CloudflareImagesContext $ctx): ?CloudflareImagesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
