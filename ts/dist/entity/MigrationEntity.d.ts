import { CloudflareImagesEntityBase } from '../CloudflareImagesEntityBase';
import type { CloudflareImagesSDK } from '../CloudflareImagesSDK';
import type { Control } from '../types';
import type { Migration, MigrationRemoveMatch } from '../CloudflareImagesTypes';
declare class MigrationEntity extends CloudflareImagesEntityBase<Migration> {
    constructor(client: CloudflareImagesSDK, entopts: any);
    make(this: MigrationEntity): MigrationEntity;
    remove(this: any, reqmatch?: MigrationRemoveMatch, ctrl?: Control): Promise<MigrationEntity>;
}
export { MigrationEntity };
