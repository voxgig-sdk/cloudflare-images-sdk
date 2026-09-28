import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { Source, SourceRemoveMatch } from '../CloudflareImagesTypes';
declare class SourceEntity extends CloudflareImagesEntityBase<Source> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: SourceEntity): SourceEntity;
    remove(this: any, reqmatch?: SourceRemoveMatch, ctrl?: Control): Promise<SourceEntity>;
}
export { SourceEntity };
