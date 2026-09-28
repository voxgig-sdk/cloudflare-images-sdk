

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareImagesSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ImagesSourcingkitMigrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IMAGES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareImagesSDK.test()
    const ent = testsdk.ImagesSourcingkitMigration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'images_sourcingkit_migration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conflictBehaviour":{"a":true,"h":"Conflict Behaviour","n":"conflictBehaviour","r":false,"sh":"How to handle objects that already exist at the destination.","t":"`$STRING`","key$":"conflictBehaviour","index$":0},"excludedContentTypes":{"a":true,"h":"Excluded Content Types","n":"excludedContentTypes","r":false,"sh":"Content types to skip during migration.","t":"`$ARRAY`","key$":"excludedContentTypes","index$":1},"pathPrefix":{"a":true,"h":"Path Prefix","n":"pathPrefix","r":false,"sh":"Prefix to prepend to image custom IDs.","t":"`$STRING`","key$":"pathPrefix","index$":2},"rootDirectory":{"a":true,"h":"Root Directory","n":"rootDirectory","r":false,"sh":"Only import objects under this prefix in the source bucket.","t":"`$STRING`","key$":"rootDirectory","index$":3},"sourceId":{"a":true,"fo":"uuid","h":"Source Id","n":"sourceId","r":true,"sh":"The identifier of the source to migrate from.","t":"`$STRING`","key$":"sourceId","index$":4}},"name":"images_sourcingkit_migration","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/images/v2/sourcingkit/migrations","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/images/v2/sourcingkit/migrations","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v2"},{"lit":"sourcingkit"},{"lit":"migrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"images_sourcingkit_migration","name__orig":"images_sourcingkit_migration","Name":"ImagesSourcingkitMigration","name_":"images_sourcingkit_migration","name-":"images-sourcingkit-migration","NAME":"IMAGES_SOURCINGKIT_MIGRATION","index$":13}, {"active":true,"entity":"images_sourcingkit_migration","key$":"BasicImagesSourcingkitMigrationFlow","kind":"basic","name":"BasicImagesSourcingkitMigrationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"images_sourcingkit_migration_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ImagesSourcingkitMigration', {"POST /accounts/{account_id}/images/v2/sourcingkit/migrations":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"conflictBehaviour":{"description":"How to handle objects that already exist at the destination.","type":"string","default":"skip","enum":["skip","overwrite"],"x-ref":"#/components/schemas/images_sourcingkit_conflict_behaviour","key$":"conflictBehaviour"},"excludedContentTypes":{"description":"Content types to skip during migration.","type":"array","items":{"description":"A MIME type that can be excluded from migration.","type":"string","enum":["image/jpeg","image/png","image/webp","image/gif","image/avif","image/heic","image/svg+xml"],"x-ref":"#/components/schemas/images_sourcingkit_acceptable_content_type"},"key$":"excludedContentTypes"},"pathPrefix":{"description":"Prefix to prepend to image custom IDs.","type":"string","maxLength":128,"minLength":1,"key$":"pathPrefix"},"rootDirectory":{"description":"Only import objects under this prefix in the source bucket.","type":"string","maxLength":128,"minLength":1,"key$":"rootDirectory"},"sourceId":{"description":"The identifier of the source to migrate from.","type":"string","format":"uuid","key$":"sourceId"}},"required":["sourceId"],"x-ref":"#/components/schemas/images_sourcingkit_migration_create_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const images_sourcingkit_migration_ref01_ent = client.ImagesSourcingkitMigration()
    let images_sourcingkit_migration_ref01_data = setup.data.new.images_sourcingkit_migration['images_sourcingkit_migration_ref01']
    images_sourcingkit_migration_ref01_data['account_id'] = setup.idmap['account01']

    images_sourcingkit_migration_ref01_data = (await images_sourcingkit_migration_ref01_ent.create(images_sourcingkit_migration_ref01_data)).data()
    assert(null != images_sourcingkit_migration_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/images_sourcingkit_migration/ImagesSourcingkitMigrationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareImagesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['images_sourcingkit_migration01','images_sourcingkit_migration02','images_sourcingkit_migration03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_ENTID': idmap,
    'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IMAGES_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareImagesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
