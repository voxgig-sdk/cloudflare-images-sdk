import { Context } from './Context';
declare class CloudflareImagesError extends Error {
    isCloudflareImagesError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CloudflareImagesError };
