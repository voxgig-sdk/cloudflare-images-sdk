import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { ImagesSourcingkitConnectivityCheck, ImagesSourcingkitConnectivityCheckLoadMatch, ImagesSourcingkitConnectivityCheckCreateData } from '../CloudflareImagesTypes';
declare class ImagesSourcingkitConnectivityCheckEntity extends CloudflareImagesEntityBase<ImagesSourcingkitConnectivityCheck> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: ImagesSourcingkitConnectivityCheckEntity): ImagesSourcingkitConnectivityCheckEntity;
    load(this: any, reqmatch?: ImagesSourcingkitConnectivityCheckLoadMatch, ctrl?: Control): Promise<ImagesSourcingkitConnectivityCheckEntity>;
    create(this: any, reqdata?: ImagesSourcingkitConnectivityCheckCreateData, ctrl?: Control): Promise<ImagesSourcingkitConnectivityCheckEntity>;
}
export { ImagesSourcingkitConnectivityCheckEntity };
