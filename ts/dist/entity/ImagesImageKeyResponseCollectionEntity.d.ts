import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesImageKeyResponseCollection, ImagesImageKeyResponseCollectionListMatch, ImagesImageKeyResponseCollectionUpdateData, ImagesImageKeyResponseCollectionRemoveMatch } from '../CloudflareImagesTypes';
declare class ImagesImageKeyResponseCollectionEntity extends CloudflareImagesEntityBase<ImagesImageKeyResponseCollection> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesImageKeyResponseCollectionEntity): ImagesImageKeyResponseCollectionEntity;
    list(this: any, reqmatch?: ImagesImageKeyResponseCollectionListMatch, ctrl?: Control): Promise<ImagesImageKeyResponseCollectionEntity[]>;
    update(this: any, reqdata?: ImagesImageKeyResponseCollectionUpdateData, ctrl?: Control): Promise<ImagesImageKeyResponseCollectionEntity>;
    remove(this: any, reqmatch?: ImagesImageKeyResponseCollectionRemoveMatch, ctrl?: Control): Promise<ImagesImageKeyResponseCollectionEntity>;
}
export { ImagesImageKeyResponseCollectionEntity };
