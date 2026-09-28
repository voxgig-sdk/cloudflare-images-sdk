"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ImagesImageVariantSimpleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IMAGES_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareImagesSDK.test();
        const ent = testsdk.ImagesImageVariantSimple();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'images_image_variant_simple.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 0 }, "neverRequireSignedURLs": { "a": true, "h": "Never Require Signed Ur Ls", "n": "neverRequireSignedURLs", "r": false, "sh": "Indicates whether the variant can access an image without a signature, regardless of image access control.", "t": "`$BOOLEAN`", "key$": "neverRequireSignedURLs", "index$": 1 }, "options": { "a": true, "h": "Options", "n": "options", "r": true, "sh": "Allows you to define image resizing sizes for different use cases.", "t": "`$OBJECT`", "key$": "options", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "images_image_variant_simple", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/images/v1/variants", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/images/v1/variants", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "images" }, { "lit": "v1" }, { "lit": "variants" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/images/v1/variants/{variant_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "hero", "k": "param", "n": "variant_id", "or": "variant_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/images/v1/variants/{variant_id}", "q": { "exist": ["account_id", "variant_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "images" }, { "lit": "v1" }, { "lit": "variants" }, { "var": "variant_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/images/v1/variants/{variant_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "hero", "k": "param", "n": "variant_id", "or": "variant_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/images/v1/variants/{variant_id}", "q": { "exist": ["account_id", "variant_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "images" }, { "lit": "v1" }, { "lit": "variants" }, { "var": "variant_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "images_image_variant_simple", "name__orig": "images_image_variant_simple", "Name": "ImagesImageVariantSimple", "name_": "images_image_variant_simple", "name-": "images-image-variant-simple", "NAME": "IMAGES_IMAGE_VARIANT_SIMPLE", "index$": 8 }, { "active": true, "entity": "images_image_variant_simple", "key$": "BasicImagesImageVariantSimpleFlow", "kind": "basic", "name": "BasicImagesImageVariantSimpleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "images_image_variant_simple_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "images_image_variant_simple_ref01", "srcdatavar": "images_image_variant_simple_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-images_image_variant_simple_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "images_image_variant_simple_ref01", "srcdatavar": "images_image_variant_simple_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "images_image_variant_simple01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-images_image_variant_simple_ref01" } }], "index$": 2 }] }, 'ImagesImageVariantSimple', { "POST /accounts/{account_id}/images/v1/variants": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "example": "hero", "maxLength": 99, "pattern": "^[a-zA-Z0-9]+$", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_identifier", "key$": "id" }, "neverRequireSignedURLs": { "default": false, "description": "Indicates whether the variant can access an image without a signature, regardless of image access control.", "example": true, "type": "boolean", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_neverRequireSignedURLs", "key$": "neverRequireSignedURLs" }, "options": { "description": "Allows you to define image resizing sizes for different use cases.", "properties": { "fit": { "description": "The fit property describes how the width and height dimensions should be interpreted.", "enum": ["scale-down", "contain", "cover", "crop", "pad"], "example": "scale-down", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_fit" }, "height": { "description": "Maximum height in image pixels.", "example": 768, "minimum": 1, "type": "number", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_height" }, "metadata": { "description": "What EXIF data should be preserved in the output image.", "enum": ["keep", "copyright", "none"], "example": "none", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_schemas_metadata" }, "width": { "description": "Maximum width in image pixels.", "example": 1366, "minimum": 1, "type": "number", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_width" } }, "required": ["fit", "metadata", "width", "height"], "type": "object", "x-ref": "#/components/schemas/images_image_variant_options", "key$": "options" } }, "required": ["id", "options"], "x-ref": "#/components/schemas/images_image_variant_definition", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/images_account_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/images/v1/variants/{variant_id}": { "protocol": "http", "parameters": [{ "name": "variant_id", "in": "path", "required": true, "schema": { "type": "string", "example": "hero", "maxLength": 99, "pattern": "^[a-zA-Z0-9]+$", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_identifier" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/images_account_identifier" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/images/v1/variants/{variant_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "neverRequireSignedURLs": { "description": "Indicates whether the variant can access an image without a signature, regardless of image access control.", "type": "boolean", "example": true, "default": false, "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_neverRequireSignedURLs", "key$": "neverRequireSignedURLs" }, "options": { "description": "Allows you to define image resizing sizes for different use cases.", "type": "object", "properties": { "fit": { "description": "The fit property describes how the width and height dimensions should be interpreted.", "enum": ["scale-down", "contain", "cover", "crop", "pad"], "example": "scale-down", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_fit" }, "height": { "description": "Maximum height in image pixels.", "example": 768, "minimum": 1, "type": "number", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_height" }, "metadata": { "description": "What EXIF data should be preserved in the output image.", "enum": ["keep", "copyright", "none"], "example": "none", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_schemas_metadata" }, "width": { "description": "Maximum width in image pixels.", "example": 1366, "minimum": 1, "type": "number", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_width" } }, "required": ["fit", "metadata", "width", "height"], "x-ref": "#/components/schemas/images_image_variant_options", "key$": "options" } }, "required": ["options"], "x-ref": "#/components/schemas/images_image_variant_patch_request", "index$": 1 } } } }, "parameters": [{ "name": "variant_id", "in": "path", "required": true, "schema": { "type": "string", "example": "hero", "maxLength": 99, "pattern": "^[a-zA-Z0-9]+$", "x-auditable": true, "x-ref": "#/components/schemas/images_image_variant_identifier" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/images_account_identifier" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const images_image_variant_simple_ref01_ent = client.ImagesImageVariantSimple();
        let images_image_variant_simple_ref01_data = setup.data.new.images_image_variant_simple['images_image_variant_simple_ref01'];
        images_image_variant_simple_ref01_data['account_id'] = setup.idmap['account01'];
        images_image_variant_simple_ref01_data = (await images_image_variant_simple_ref01_ent.create(images_image_variant_simple_ref01_data)).data();
        (0, node_assert_1.default)(null != images_image_variant_simple_ref01_data.id);
        // UPDATE
        const images_image_variant_simple_ref01_data_up0 = {};
        images_image_variant_simple_ref01_data_up0.id = images_image_variant_simple_ref01_data.id;
        images_image_variant_simple_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const images_image_variant_simple_ref01_resdata_up0 = (await images_image_variant_simple_ref01_ent.update(images_image_variant_simple_ref01_data_up0)).data();
        (0, node_assert_1.default)(images_image_variant_simple_ref01_resdata_up0.id === images_image_variant_simple_ref01_data_up0.id);
        // LOAD
        const images_image_variant_simple_ref01_match_dt0 = {};
        images_image_variant_simple_ref01_match_dt0.id = images_image_variant_simple_ref01_data.id;
        const images_image_variant_simple_ref01_data_dt0 = (await images_image_variant_simple_ref01_ent.load(images_image_variant_simple_ref01_match_dt0)).data();
        (0, node_assert_1.default)(images_image_variant_simple_ref01_data_dt0.id === images_image_variant_simple_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/images_image_variant_simple/ImagesImageVariantSimpleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareImagesSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['images_image_variant_simple01', 'images_image_variant_simple02', 'images_image_variant_simple03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_VARIANT_SIMPLE_ENTID': idmap,
        'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IMAGES_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_VARIANT_SIMPLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_VARIANT_SIMPLE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareImagesSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_IMAGES_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ImagesImageVariantSimpleEntity.test.js.map