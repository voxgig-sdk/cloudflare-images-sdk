<?php
declare(strict_types=1);

// CloudflareImages SDK utility: result_body

class CloudflareImagesResultBody
{
    public static function call(CloudflareImagesContext $ctx): ?CloudflareImagesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
