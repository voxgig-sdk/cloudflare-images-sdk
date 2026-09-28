import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesSourcingkitMigrationSingle, ImagesSourcingkitMigrationSingleLoadMatch, ImagesSourcingkitMigrationSingleUpdateData } from '../CloudflareImagesTypes';
declare class ImagesSourcingkitMigrationSingleEntity extends CloudflareImagesEntityBase<ImagesSourcingkitMigrationSingle> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesSourcingkitMigrationSingleEntity): ImagesSourcingkitMigrationSingleEntity;
    load(this: any, reqmatch?: ImagesSourcingkitMigrationSingleLoadMatch, ctrl?: Control): Promise<ImagesSourcingkitMigrationSingleEntity>;
    update(this: any, reqdata?: ImagesSourcingkitMigrationSingleUpdateData, ctrl?: Control): Promise<ImagesSourcingkitMigrationSingleEntity>;
}
export { ImagesSourcingkitMigrationSingleEntity };
