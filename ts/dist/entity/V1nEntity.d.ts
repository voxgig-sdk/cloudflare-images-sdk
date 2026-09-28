import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { V1n, V1nRemoveMatch } from '../CloudflareImagesTypes';
declare class V1nEntity extends CloudflareImagesEntityBase<V1n> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: V1nEntity): V1nEntity;
    remove(this: any, reqmatch?: V1nRemoveMatch, ctrl?: Control): Promise<V1nEntity>;
}
export { V1nEntity };
