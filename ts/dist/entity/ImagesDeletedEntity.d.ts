import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesDeleted, ImagesDeletedRemoveMatch } from '../CloudflareImagesTypes';
declare class ImagesDeletedEntity extends CloudflareImagesEntityBase<ImagesDeleted> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesDeletedEntity): ImagesDeletedEntity;
    remove(this: any, reqmatch?: ImagesDeletedRemoveMatch, ctrl?: Control): Promise<ImagesDeletedEntity>;
}
export { ImagesDeletedEntity };
