import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesSourcingkitMigrationLogList, ImagesSourcingkitMigrationLogListListMatch } from '../CloudflareImagesTypes';
declare class ImagesSourcingkitMigrationLogListEntity extends CloudflareImagesEntityBase<ImagesSourcingkitMigrationLogList> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesSourcingkitMigrationLogListEntity): ImagesSourcingkitMigrationLogListEntity;
    list(this: any, reqmatch?: ImagesSourcingkitMigrationLogListListMatch, ctrl?: Control): Promise<ImagesSourcingkitMigrationLogListEntity[]>;
}
export { ImagesSourcingkitMigrationLogListEntity };
