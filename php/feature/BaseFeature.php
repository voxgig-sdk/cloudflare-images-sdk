<?php
declare(strict_types=1);

// CloudflareImages SDK base feature

class CloudflareImagesBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudflareImagesContext $ctx, array $options): void {}
    public function PostConstruct(CloudflareImagesContext $ctx): void {}
    public function PostConstructEntity(CloudflareImagesContext $ctx): void {}
    public function SetData(CloudflareImagesContext $ctx): void {}
    public function GetData(CloudflareImagesContext $ctx): void {}
    public function GetMatch(CloudflareImagesContext $ctx): void {}
    public function SetMatch(CloudflareImagesContext $ctx): void {}
    public function PrePoint(CloudflareImagesContext $ctx): void {}
    public function PreSpec(CloudflareImagesContext $ctx): void {}
    public function PreRequest(CloudflareImagesContext $ctx): void {}
    public function PreResponse(CloudflareImagesContext $ctx): void {}
    public function PreResult(CloudflareImagesContext $ctx): void {}
    public function PreDone(CloudflareImagesContext $ctx): void {}
    public function PreUnexpected(CloudflareImagesContext $ctx): void {}
}
