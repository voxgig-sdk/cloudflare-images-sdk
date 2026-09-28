import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesSourcingkitMigration, ImagesSourcingkitMigrationCreateData } from '../CloudflareImagesTypes';
declare class ImagesSourcingkitMigrationEntity extends CloudflareImagesEntityBase<ImagesSourcingkitMigration> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesSourcingkitMigrationEntity): ImagesSourcingkitMigrationEntity;
    create(this: any, reqdata?: ImagesSourcingkitMigrationCreateData, ctrl?: Control): Promise<ImagesSourcingkitMigrationEntity>;
}
export { ImagesSourcingkitMigrationEntity };
