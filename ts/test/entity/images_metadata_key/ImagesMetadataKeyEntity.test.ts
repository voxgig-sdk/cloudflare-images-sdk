

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


describe('ImagesMetadataKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IMAGES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareImagesSDK.test()
    const ent = testsdk.ImagesMetadataKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'images_metadata_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","union":{"branches":3,"count":2,"depth":6},"key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful","t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"images_metadata_key","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/images/v2/metadata/keys","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/images/v2/metadata/keys","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v2"},{"lit":"metadata"},{"lit":"keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"images_metadata_key","name__orig":"images_metadata_key","Name":"ImagesMetadataKey","name_":"images_metadata_key","name-":"images-metadata-key","NAME":"IMAGES_METADATA_KEY","index$":11}, {"active":true,"entity":"images_metadata_key","key$":"BasicImagesMetadataKeyFlow","kind":"basic","name":"BasicImagesMetadataKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"images_metadata_key_ref01"}}],"index$":0}]}, 'ImagesMetadataKey', {"GET /accounts/{account_id}/images/v2/metadata/keys":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let images_metadata_key_ref01_data = Object.values(setup.data.existing.images_metadata_key)[0] as any

    // LIST
    const images_metadata_key_ref01_ent = client.ImagesMetadataKey()
    const images_metadata_key_ref01_match: any = {}
    images_metadata_key_ref01_match['account_id'] = setup.idmap['account01']

    const images_metadata_key_ref01_list = (await images_metadata_key_ref01_ent.list(images_metadata_key_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/images_metadata_key/ImagesMetadataKeyTestData.json')

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
    ['images_metadata_key01','images_metadata_key02','images_metadata_key03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IMAGES_TEST_IMAGES_METADATA_KEY_ENTID': idmap,
    'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IMAGES_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGES_METADATA_KEY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGES_METADATA_KEY_ENTID']
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
  
