import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesImageVariantSimple, ImagesImageVariantSimpleLoadMatch, ImagesImageVariantSimpleCreateData, ImagesImageVariantSimpleUpdateData } from '../CloudflareImagesTypes';
declare class ImagesImageVariantSimpleEntity extends CloudflareImagesEntityBase<ImagesImageVariantSimple> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesImageVariantSimpleEntity): ImagesImageVariantSimpleEntity;
    load(this: any, reqmatch?: ImagesImageVariantSimpleLoadMatch, ctrl?: Control): Promise<ImagesImageVariantSimpleEntity>;
    create(this: any, reqdata?: ImagesImageVariantSimpleCreateData, ctrl?: Control): Promise<ImagesImageVariantSimpleEntity>;
    update(this: any, reqdata?: ImagesImageVariantSimpleUpdateData, ctrl?: Control): Promise<ImagesImageVariantSimpleEntity>;
}
export { ImagesImageVariantSimpleEntity };
