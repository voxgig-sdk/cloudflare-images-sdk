import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesImageResponseSingle, ImagesImageResponseSingleLoadMatch, ImagesImageResponseSingleCreateData, ImagesImageResponseSingleUpdateData } from '../CloudflareImagesTypes';
declare class ImagesImageResponseSingleEntity extends CloudflareImagesEntityBase<ImagesImageResponseSingle> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesImageResponseSingleEntity): ImagesImageResponseSingleEntity;
    load(this: any, reqmatch?: ImagesImageResponseSingleLoadMatch, ctrl?: Control): Promise<ImagesImageResponseSingleEntity>;
    create(this: any, reqdata?: ImagesImageResponseSingleCreateData, ctrl?: Control): Promise<ImagesImageResponseSingleEntity>;
    update(this: any, reqdata?: ImagesImageResponseSingleUpdateData, ctrl?: Control): Promise<ImagesImageResponseSingleEntity>;
}
export { ImagesImageResponseSingleEntity };
