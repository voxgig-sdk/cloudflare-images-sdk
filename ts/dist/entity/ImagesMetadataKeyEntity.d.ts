import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesMetadataKey, ImagesMetadataKeyListMatch } from '../CloudflareImagesTypes';
declare class ImagesMetadataKeyEntity extends CloudflareImagesEntityBase<ImagesMetadataKey> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesMetadataKeyEntity): ImagesMetadataKeyEntity;
    list(this: any, reqmatch?: ImagesMetadataKeyListMatch, ctrl?: Control): Promise<ImagesMetadataKeyEntity[]>;
}
export { ImagesMetadataKeyEntity };
