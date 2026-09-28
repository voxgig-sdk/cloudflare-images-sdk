import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesImageVariantFlat, ImagesImageVariantFlatLoadMatch } from '../CloudflareImagesTypes';
declare class ImagesImageVariantFlatEntity extends CloudflareImagesEntityBase<ImagesImageVariantFlat> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesImageVariantFlatEntity): ImagesImageVariantFlatEntity;
    load(this: any, reqmatch?: ImagesImageVariantFlatLoadMatch, ctrl?: Control): Promise<ImagesImageVariantFlatEntity>;
}
export { ImagesImageVariantFlatEntity };
