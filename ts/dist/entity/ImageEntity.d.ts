import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { Image, ImageLoadMatch, ImageUpdateData } from '../CloudflareImagesTypes';
declare class ImageEntity extends CloudflareImagesEntityBase<Image> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImageEntity): ImageEntity;
    load(this: any, reqmatch?: ImageLoadMatch, ctrl?: Control): Promise<ImageEntity>;
    update(this: any, reqdata?: ImageUpdateData, ctrl?: Control): Promise<ImageEntity>;
}
export { ImageEntity };
