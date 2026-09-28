import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesImagesList, ImagesImagesListLoadMatch, ImagesImagesListListMatch } from '../CloudflareImagesTypes';
declare class ImagesImagesListEntity extends CloudflareImagesEntityBase<ImagesImagesList> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesImagesListEntity): ImagesImagesListEntity;
    load(this: any, reqmatch?: ImagesImagesListLoadMatch, ctrl?: Control): Promise<ImagesImagesListEntity>;
    list(this: any, reqmatch?: ImagesImagesListListMatch, ctrl?: Control): Promise<ImagesImagesListEntity[]>;
}
export { ImagesImagesListEntity };
