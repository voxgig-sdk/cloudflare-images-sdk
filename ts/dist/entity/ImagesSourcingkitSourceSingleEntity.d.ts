import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesSourcingkitSourceSingle, ImagesSourcingkitSourceSingleLoadMatch } from '../CloudflareImagesTypes';
declare class ImagesSourcingkitSourceSingleEntity extends CloudflareImagesEntityBase<ImagesSourcingkitSourceSingle> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesSourcingkitSourceSingleEntity): ImagesSourcingkitSourceSingleEntity;
    load(this: any, reqmatch?: ImagesSourcingkitSourceSingleLoadMatch, ctrl?: Control): Promise<ImagesSourcingkitSourceSingleEntity>;
}
export { ImagesSourcingkitSourceSingleEntity };
