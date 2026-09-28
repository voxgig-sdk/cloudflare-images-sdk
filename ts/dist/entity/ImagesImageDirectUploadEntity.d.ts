import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesImageDirectUpload, ImagesImageDirectUploadCreateData } from '../CloudflareImagesTypes';
declare class ImagesImageDirectUploadEntity extends CloudflareImagesEntityBase<ImagesImageDirectUpload> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesImageDirectUploadEntity): ImagesImageDirectUploadEntity;
    create(this: any, reqdata?: ImagesImageDirectUploadCreateData, ctrl?: Control): Promise<ImagesImageDirectUploadEntity>;
}
export { ImagesImageDirectUploadEntity };
