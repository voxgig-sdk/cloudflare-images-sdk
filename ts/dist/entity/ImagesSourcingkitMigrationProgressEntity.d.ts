import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesSourcingkitMigrationProgress, ImagesSourcingkitMigrationProgressLoadMatch } from '../CloudflareImagesTypes';
declare class ImagesSourcingkitMigrationProgressEntity extends CloudflareImagesEntityBase<ImagesSourcingkitMigrationProgress> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesSourcingkitMigrationProgressEntity): ImagesSourcingkitMigrationProgressEntity;
    load(this: any, reqmatch?: ImagesSourcingkitMigrationProgressLoadMatch, ctrl?: Control): Promise<ImagesSourcingkitMigrationProgressEntity>;
}
export { ImagesSourcingkitMigrationProgressEntity };
