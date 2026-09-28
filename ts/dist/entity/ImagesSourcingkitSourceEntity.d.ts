import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesSourcingkitSource, ImagesSourcingkitSourceCreateData, ImagesSourcingkitSourceUpdateData } from '../CloudflareImagesTypes';
declare class ImagesSourcingkitSourceEntity extends CloudflareImagesEntityBase<ImagesSourcingkitSource> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesSourcingkitSourceEntity): ImagesSourcingkitSourceEntity;
    create(this: any, reqdata?: ImagesSourcingkitSourceCreateData, ctrl?: Control): Promise<ImagesSourcingkitSourceEntity>;
    update(this: any, reqdata?: ImagesSourcingkitSourceUpdateData, ctrl?: Control): Promise<ImagesSourcingkitSourceEntity>;
}
export { ImagesSourcingkitSourceEntity };
