import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { CloudflareImage, CloudflareImageLoadMatch } from '../CloudflareImagesTypes';
declare class CloudflareImageEntity extends CloudflareImagesEntityBase<CloudflareImage> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: CloudflareImageEntity): CloudflareImageEntity;
    load(this: any, reqmatch?: CloudflareImageLoadMatch, ctrl?: Control): Promise<CloudflareImageEntity>;
}
export { CloudflareImageEntity };
