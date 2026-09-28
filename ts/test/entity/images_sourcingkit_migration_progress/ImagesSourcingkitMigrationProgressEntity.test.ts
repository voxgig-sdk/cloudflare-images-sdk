

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


describe('ImagesSourcingkitMigrationProgressEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IMAGES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareImagesSDK.test()
    const ent = testsdk.ImagesSourcingkitMigrationProgress()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'images_sourcingkit_migration_progress.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":0}},"name":"images_sourcingkit_migration_progress","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5ca167e6-4e40-4ced-a209-ca1b9dd6a265","k":"param","n":"migration_id","or":"migration_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle","q":{"exist":["account_id","migration_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v2"},{"lit":"sourcingkit"},{"lit":"migrations"},{"var":"migration_id"},{"lit":"lifecycle"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.migration"]]},"key$":"images_sourcingkit_migration_progress","name__orig":"images_sourcingkit_migration_progress","Name":"ImagesSourcingkitMigrationProgress","name_":"images_sourcingkit_migration_progress","name-":"images-sourcingkit-migration-progress","NAME":"IMAGES_SOURCINGKIT_MIGRATION_PROGRESS","index$":16}, {"active":true,"entity":"images_sourcingkit_migration_progress","key$":"BasicImagesSourcingkitMigrationProgressFlow","kind":"basic","name":"BasicImagesSourcingkitMigrationProgressFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"images_sourcingkit_migration_progress_ref01","srcdatavar":"images_sourcingkit_migration_progress_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"images_sourcingkit_migration_progress01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-images_sourcingkit_migration_progress_ref01"}}],"index$":0}]}, 'ImagesSourcingkitMigrationProgress', {"GET /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0},{"name":"migration_id","in":"path","required":true,"schema":{"description":"Sourcing kit resource identifier.","type":"string","format":"uuid","example":"5ca167e6-4e40-4ced-a209-ca1b9dd6a265","x-ref":"#/components/schemas/images_sourcingkit_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let images_sourcingkit_migration_progress_ref01_data = Object.values(setup.data.existing.images_sourcingkit_migration_progress)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const images_sourcingkit_migration_progress_ref01_ent = client.ImagesSourcingkitMigrationProgress()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/images_sourcingkit_migration_progress/ImagesSourcingkitMigrationProgressTestData.json')

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
    ['images_sourcingkit_migration_progress01','images_sourcingkit_migration_progress02','images_sourcingkit_migration_progress03','migration01','migration02','migration03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_PROGRESS_ENTID': idmap,
    'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IMAGES_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_PROGRESS_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_PROGRESS_ENTID']
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
  
