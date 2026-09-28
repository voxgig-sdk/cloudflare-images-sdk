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
(0, node_test_1.describe)('ImagesImageResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IMAGES_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareImagesSDK.test();
        const ent = testsdk.ImagesImageResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'images_image_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "Can set the creator field with an internal user ID.", "t": "`$STRING`", "key$": "creator", "index$": 0 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "User modifiable key-value store.", "t": "`$OBJECT`", "key$": "metadata", "index$": 1 }, "requireSignedURLs": { "a": true, "h": "Require Signed Ur Ls", "n": "requireSignedURLs", "r": false, "sh": "Indicates whether the image can be accessed using only its UID.", "t": "`$BOOLEAN`", "key$": "requireSignedURLs", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "union": { "branches": 3, "count": 1, "depth": 3 }, "key$": "result", "index$": 3 } }, "name": "images_image_response_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/images/v1", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/images/v1", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "images" }, { "lit": "v1" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/images/v1/{image_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "107b9558-dd06-4bbd-5fef-9c2c16bb7900", "k": "param", "n": "image_id", "or": "image_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/images/v1/{image_id}", "q": { "exist": ["account_id", "image_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "images" }, { "lit": "v1" }, { "var": "image_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/images/v1/{image_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "107b9558-dd06-4bbd-5fef-9c2c16bb7900", "k": "param", "n": "image_id", "or": "image_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/images/v1/{image_id}", "q": { "exist": ["account_id", "image_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "images" }, { "lit": "v1" }, { "var": "image_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "images_image_response_single", "name__orig": "images_image_response_single", "Name": "ImagesImageResponseSingle", "name_": "images_image_response_single", "name-": "images-image-response-single", "NAME": "IMAGES_IMAGE_RESPONSE_SINGLE", "index$": 5 }, { "active": true, "entity": "images_image_response_single", "key$": "BasicImagesImageResponseSingleFlow", "kind": "basic", "name": "BasicImagesImageResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "images_image_response_single_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "images_image_response_single_ref01", "srcdatavar": "images_image_response_single_ref01_data", "suffix": "_up0", "textfield": "creator" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-images_image_response_single_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "images_image_response_single_ref01", "srcdatavar": "images_image_response_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "images_image_response_single01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-images_image_response_single_ref01" } }], "index$": 2 }] }, 'ImagesImageResponseSingle', { "POST /accounts/{account_id}/images/v1": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "schema": { "type": "object", "properties": { "creator": { "description": "Can set the creator field with an internal user ID.", "type": "string", "maxLength": 1024 }, "file": { "description": "An image binary data. Only needed when type is uploading a file.", "type": "string", "format": "binary", "x-auditable": true }, "id": { "description": "An optional custom unique identifier for your image.", "type": "string", "x-auditable": true }, "metadata": { "description": "User modifiable key-value store. Can use used for keeping references to another system of record for managing images.", "type": "object" }, "requireSignedURLs": { "description": "Indicates whether the image requires a signature token for the access.", "type": "boolean", "example": true, "default": false, "x-auditable": true }, "url": { "description": "A URL to fetch an image from origin. Only needed when type is uploading from a URL.", "type": "string", "example": "https://example.com/path/to/logo.png", "x-auditable": true } }, "x-ref": "#/components/schemas/images_image_basic_upload" } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/images_account_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/images/v1/{image_id}": { "protocol": "http", "parameters": [{ "name": "image_id", "in": "path", "required": true, "schema": { "description": "Image unique identifier.", "type": "string", "example": "107b9558-dd06-4bbd-5fef-9c2c16bb7900", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/images_image_identifier" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/images_account_identifier" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/images/v1/{image_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "creator": { "description": "Can set the creator field with an internal user ID.", "type": "string", "key$": "creator" }, "metadata": { "description": "User modifiable key-value store. Can be used for keeping references to another system of record for managing images. No change if not specified.", "type": "object", "key$": "metadata" }, "requireSignedURLs": { "description": "Indicates whether the image can be accessed using only its UID. If set to `true`, a signed token needs to be generated with a signing key to view the image. Returns a new UID on a change. No change if not specified.", "type": "boolean", "example": true, "x-auditable": true, "key$": "requireSignedURLs" } }, "x-ref": "#/components/schemas/images_image_patch_request", "index$": 1 } } } }, "parameters": [{ "name": "image_id", "in": "path", "required": true, "schema": { "description": "Image unique identifier.", "type": "string", "example": "107b9558-dd06-4bbd-5fef-9c2c16bb7900", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/images_image_identifier" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/images_account_identifier" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const images_image_response_single_ref01_ent = client.ImagesImageResponseSingle();
        let images_image_response_single_ref01_data = setup.data.new.images_image_response_single['images_image_response_single_ref01'];
        images_image_response_single_ref01_data['account_id'] = setup.idmap['account01'];
        images_image_response_single_ref01_data = (await images_image_response_single_ref01_ent.create(images_image_response_single_ref01_data)).data();
        (0, node_assert_1.default)(null != images_image_response_single_ref01_data);
        // UPDATE
        const images_image_response_single_ref01_data_up0 = {};
        images_image_response_single_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const images_image_response_single_ref01_markdef_up0 = { name: 'creator', value: 'Mark01-images_image_response_single_ref01_' + setup.now };
        images_image_response_single_ref01_data_up0[images_image_response_single_ref01_markdef_up0.name] = images_image_response_single_ref01_markdef_up0.value;
        const images_image_response_single_ref01_resdata_up0 = (await images_image_response_single_ref01_ent.update(images_image_response_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != images_image_response_single_ref01_resdata_up0);
        (0, node_assert_1.default)(images_image_response_single_ref01_resdata_up0[images_image_response_single_ref01_markdef_up0.name] === images_image_response_single_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/images_image_response_single/ImagesImageResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareImagesSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['images_image_response_single01', 'images_image_response_single02', 'images_image_response_single03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IMAGES_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_RESPONSE_SINGLE_ENTID'];
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
//# sourceMappingURL=ImagesImageResponseSingleEntity.test.js.map