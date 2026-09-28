

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


describe('ImagesSourcingkitSourceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IMAGES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareImagesSDK.test()
    const ent = testsdk.ImagesSourcingkitSource()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'images_sourcingkit_source.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account":{"a":true,"h":"Account","n":"account","r":false,"sh":"Account identifier for the bucket (required for R2 vendor).","t":"`$STRING`","key$":"account","index$":0},"bucket":{"a":true,"h":"Bucket","n":"bucket","r":true,"sh":"The name of the storage bucket.","t":"`$STRING`","key$":"bucket","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"A human-readable name for the source.","t":"`$STRING`","key$":"name","index$":3},"secret":{"a":true,"h":"Secret","n":"secret","r":true,"sh":"Storage credentials for accessing the bucket.","t":"`$OBJECT`","wo":true,"key$":"secret","index$":4},"vendor":{"a":true,"h":"Vendor","n":"vendor","r":true,"sh":"The cloud storage vendor of the source bucket.","t":"`$STRING`","key$":"vendor","index$":5}},"id":{"field":"id","name":"id"},"name":"images_sourcingkit_source","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/images/v2/sourcingkit/sources","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/images/v2/sourcingkit/sources","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v2"},{"lit":"sourcingkit"},{"lit":"sources"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5ca167e6-4e40-4ced-a209-ca1b9dd6a265","k":"param","n":"id","or":"source_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}","q":{"exist":["account_id","id"]},"r":{"param":{"source_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v2"},{"lit":"sourcingkit"},{"lit":"sources"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"images_sourcingkit_source","name__orig":"images_sourcingkit_source","Name":"ImagesSourcingkitSource","name_":"images_sourcingkit_source","name-":"images-sourcingkit-source","NAME":"IMAGES_SOURCINGKIT_SOURCE","index$":18}, {"active":true,"entity":"images_sourcingkit_source","key$":"BasicImagesSourcingkitSourceFlow","kind":"basic","name":"BasicImagesSourcingkitSourceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"images_sourcingkit_source_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"images_sourcingkit_source_ref01","srcdatavar":"images_sourcingkit_source_ref01_data","suffix":"_up0","textfield":"account"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-images_sourcingkit_source_ref01"}}],"v":[],"index$":1}]}, 'ImagesSourcingkitSource', {"POST /accounts/{account_id}/images/v2/sourcingkit/sources":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"account":{"description":"Account identifier for the bucket (required for R2 vendor).","type":"string","key$":"account"},"bucket":{"description":"The name of the storage bucket.","type":"string","example":"my-images-bucket","maxLength":128,"minLength":1,"key$":"bucket"},"name":{"description":"A human-readable name for the source.","type":"string","example":"my-s3-bucket","maxLength":128,"minLength":1,"key$":"name"},"secret":{"description":"Storage credentials for accessing the bucket. Shape depends on vendor.","type":"object","writeOnly":true,"key$":"secret"},"vendor":{"description":"The cloud storage vendor of the source bucket.","type":"string","example":"s3","enum":["s3","r2"],"x-ref":"#/components/schemas/images_sourcingkit_vendor","key$":"vendor"}},"required":["name","bucket","vendor","secret"],"x-ref":"#/components/schemas/images_sourcingkit_source_create_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0}]},"PATCH /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"description":"Updated name for the source.","type":"string","example":"my-renamed-bucket","maxLength":128,"minLength":1,"key$":"name"}},"required":["name"],"x-ref":"#/components/schemas/images_sourcingkit_source_update_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0},{"name":"source_id","in":"path","required":true,"schema":{"description":"Sourcing kit resource identifier.","type":"string","format":"uuid","example":"5ca167e6-4e40-4ced-a209-ca1b9dd6a265","x-ref":"#/components/schemas/images_sourcingkit_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const images_sourcingkit_source_ref01_ent = client.ImagesSourcingkitSource()
    let images_sourcingkit_source_ref01_data = setup.data.new.images_sourcingkit_source['images_sourcingkit_source_ref01']
    images_sourcingkit_source_ref01_data['account_id'] = setup.idmap['account01']

    images_sourcingkit_source_ref01_data = (await images_sourcingkit_source_ref01_ent.create(images_sourcingkit_source_ref01_data)).data()
    assert(null != images_sourcingkit_source_ref01_data.id)


    // UPDATE
    const images_sourcingkit_source_ref01_data_up0: any = {}
    images_sourcingkit_source_ref01_data_up0.id = images_sourcingkit_source_ref01_data.id
    images_sourcingkit_source_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const images_sourcingkit_source_ref01_markdef_up0 = { name: 'account', value: 'Mark01-images_sourcingkit_source_ref01_' + setup.now }
    ;(images_sourcingkit_source_ref01_data_up0 as any)[images_sourcingkit_source_ref01_markdef_up0.name] = images_sourcingkit_source_ref01_markdef_up0.value

    const images_sourcingkit_source_ref01_resdata_up0 = (await images_sourcingkit_source_ref01_ent.update(images_sourcingkit_source_ref01_data_up0)).data()
    assert(images_sourcingkit_source_ref01_resdata_up0.id === images_sourcingkit_source_ref01_data_up0.id)

    assert((images_sourcingkit_source_ref01_resdata_up0 as any)[images_sourcingkit_source_ref01_markdef_up0.name] === images_sourcingkit_source_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/images_sourcingkit_source/ImagesSourcingkitSourceTestData.json')

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
    ['images_sourcingkit_source01','images_sourcingkit_source02','images_sourcingkit_source03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_SOURCE_ENTID': idmap,
    'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IMAGES_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_SOURCE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_SOURCE_ENTID']
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
  
