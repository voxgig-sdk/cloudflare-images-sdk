import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesImagesStat, ImagesImagesStatLoadMatch } from '../CloudflareImagesTypes';
declare class ImagesImagesStatEntity extends CloudflareImagesEntityBase<ImagesImagesStat> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesImagesStatEntity): ImagesImagesStatEntity;
    load(this: any, reqmatch?: ImagesImagesStatLoadMatch, ctrl?: Control): Promise<ImagesImagesStatEntity>;
}
export { ImagesImagesStatEntity };
