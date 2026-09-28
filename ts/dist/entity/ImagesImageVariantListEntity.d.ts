import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesImageVariantList, ImagesImageVariantListListMatch } from '../CloudflareImagesTypes';
declare class ImagesImageVariantListEntity extends CloudflareImagesEntityBase<ImagesImageVariantList> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesImageVariantListEntity): ImagesImageVariantListEntity;
    list(this: any, reqmatch?: ImagesImageVariantListListMatch, ctrl?: Control): Promise<ImagesImageVariantListEntity[]>;
}
export { ImagesImageVariantListEntity };
