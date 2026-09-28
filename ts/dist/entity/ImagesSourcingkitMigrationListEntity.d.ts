import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesSourcingkitMigrationList, ImagesSourcingkitMigrationListListMatch } from '../CloudflareImagesTypes';
declare class ImagesSourcingkitMigrationListEntity extends CloudflareImagesEntityBase<ImagesSourcingkitMigrationList> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesSourcingkitMigrationListEntity): ImagesSourcingkitMigrationListEntity;
    list(this: any, reqmatch?: ImagesSourcingkitMigrationListListMatch, ctrl?: Control): Promise<ImagesSourcingkitMigrationListEntity[]>;
}
export { ImagesSourcingkitMigrationListEntity };
