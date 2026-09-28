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
(0, node_test_1.describe)('ImagesSourcingkitMigrationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IMAGES_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareImagesSDK.test();
        const ent = testsdk.ImagesSourcingkitMigration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'images_sourcingkit_migration.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "conflictBehaviour": { "a": true, "h": "Conflict Behaviour", "n": "conflictBehaviour", "r": false, "sh": "How to handle objects that already exist at the destination.", "t": "`$STRING`", "key$": "conflictBehaviour", "index$": 0 }, "excludedContentTypes": { "a": true, "h": "Excluded Content Types", "n": "excludedContentTypes", "r": false, "sh": "Content types to skip during migration.", "t": "`$ARRAY`", "key$": "excludedContentTypes", "index$": 1 }, "pathPrefix": { "a": true, "h": "Path Prefix", "n": "pathPrefix", "r": false, "sh": "Prefix to prepend to image custom IDs.", "t": "`$STRING`", "key$": "pathPrefix", "index$": 2 }, "rootDirectory": { "a": true, "h": "Root Directory", "n": "rootDirectory", "r": false, "sh": "Only import objects under this prefix in the source bucket.", "t": "`$STRING`", "key$": "rootDirectory", "index$": 3 }, "sourceId": { "a": true, "fo": "uuid", "h": "Source Id", "n": "sourceId", "r": true, "sh": "The identifier of the source to migrate from.", "t": "`$STRING`", "key$": "sourceId", "index$": 4 } }, "name": "images_sourcingkit_migration", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/images/v2/sourcingkit/migrations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/images/v2/sourcingkit/migrations", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "images" }, { "lit": "v2" }, { "lit": "sourcingkit" }, { "lit": "migrations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "images_sourcingkit_migration", "name__orig": "images_sourcingkit_migration", "Name": "ImagesSourcingkitMigration", "name_": "images_sourcingkit_migration", "name-": "images-sourcingkit-migration", "NAME": "IMAGES_SOURCINGKIT_MIGRATION", "index$": 13 }, { "active": true, "entity": "images_sourcingkit_migration", "key$": "BasicImagesSourcingkitMigrationFlow", "kind": "basic", "name": "BasicImagesSourcingkitMigrationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "images_sourcingkit_migration_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ImagesSourcingkitMigration', { "POST /accounts/{account_id}/images/v2/sourcingkit/migrations": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "conflictBehaviour": { "description": "How to handle objects that already exist at the destination.", "type": "string", "default": "skip", "enum": ["skip", "overwrite"], "x-ref": "#/components/schemas/images_sourcingkit_conflict_behaviour", "key$": "conflictBehaviour" }, "excludedContentTypes": { "description": "Content types to skip during migration.", "type": "array", "items": { "description": "A MIME type that can be excluded from migration.", "type": "string", "enum": ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif", "image/heic", "image/svg+xml"], "x-ref": "#/components/schemas/images_sourcingkit_acceptable_content_type" }, "key$": "excludedContentTypes" }, "pathPrefix": { "description": "Prefix to prepend to image custom IDs.", "type": "string", "maxLength": 128, "minLength": 1, "key$": "pathPrefix" }, "rootDirectory": { "description": "Only import objects under this prefix in the source bucket.", "type": "string", "maxLength": 128, "minLength": 1, "key$": "rootDirectory" }, "sourceId": { "description": "The identifier of the source to migrate from.", "type": "string", "format": "uuid", "key$": "sourceId" } }, "required": ["sourceId"], "x-ref": "#/components/schemas/images_sourcingkit_migration_create_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/images_account_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const images_sourcingkit_migration_ref01_ent = client.ImagesSourcingkitMigration();
        let images_sourcingkit_migration_ref01_data = setup.data.new.images_sourcingkit_migration['images_sourcingkit_migration_ref01'];
        images_sourcingkit_migration_ref01_data['account_id'] = setup.idmap['account01'];
        images_sourcingkit_migration_ref01_data = (await images_sourcingkit_migration_ref01_ent.create(images_sourcingkit_migration_ref01_data)).data();
        (0, node_assert_1.default)(null != images_sourcingkit_migration_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/images_sourcingkit_migration/ImagesSourcingkitMigrationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareImagesSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['images_sourcingkit_migration01', 'images_sourcingkit_migration02', 'images_sourcingkit_migration03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_ENTID': idmap,
        'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IMAGES_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_ENTID'];
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
//# sourceMappingURL=ImagesSourcingkitMigrationEntity.test.js.map