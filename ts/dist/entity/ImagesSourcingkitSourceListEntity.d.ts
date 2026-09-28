import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesSourcingkitSourceList, ImagesSourcingkitSourceListListMatch } from '../CloudflareImagesTypes';
declare class ImagesSourcingkitSourceListEntity extends CloudflareImagesEntityBase<ImagesSourcingkitSourceList> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesSourcingkitSourceListEntity): ImagesSourcingkitSourceListEntity;
    list(this: any, reqmatch?: ImagesSourcingkitSourceListListMatch, ctrl?: Control): Promise<ImagesSourcingkitSourceListEntity[]>;
}
export { ImagesSourcingkitSourceListEntity };
