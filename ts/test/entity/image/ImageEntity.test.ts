

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


describe('ImageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IMAGES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareImagesSDK.test()
    const ent = testsdk.Image()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'image.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"etag":{"a":true,"h":"Etag","n":"etag","r":false,"t":"`$STRING`","key$":"etag","index$":0},"flows":{"a":true,"h":"Flows","n":"flows","r":true,"t":"`$ARRAY`","union":{"branches":5,"count":2,"depth":5},"key$":"flows","index$":1},"version":{"a":true,"h":"Version","n":"version","r":true,"t":"`$NUMBER`","key$":"version","index$":2}},"name":"image","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/images/v1/flows","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/images/v1/flows","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"images"},{"lit":"v1"},{"lit":"flows"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /zones/{zone_id}/images/v1/flows","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/images/v1/flows","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"images"},{"lit":"v1"},{"lit":"flows"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"image","name__orig":"image","Name":"Image","name_":"image","name-":"image","NAME":"IMAGE","index$":1}, {"active":true,"entity":"image","key$":"BasicImageFlow","kind":"basic","name":"BasicImageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"image_ref01","srcdatavar":"image_ref01_data","suffix":"_up0","textfield":"etag"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-image_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"image_ref01","srcdatavar":"image_ref01_data","suffix":"_dt0"},"m":{"id":"image01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-image_ref01"}}],"index$":1}]}, 'Image', {"GET /zones/{zone_id}/images/v1/flows":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","description":"Zone identifier.","required":true,"schema":{"description":"Zone identifier.","type":"string","x-auditable":true},"index$":0}]},"PUT /zones/{zone_id}/images/v1/flows":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"etag":{"type":"string","key$":"etag"},"flows":{"type":"array","items":{"oneOf":[{"properties":{},"required":[],"type":"object"},{"properties":{},"required":[],"type":"object"}]},"maxItems":10,"key$":"flows"},"version":{"type":"number","enum":[2],"x-fern-property-name":"config-version","key$":"version"}},"required":["version","flows"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","description":"Zone identifier.","required":true,"schema":{"description":"Zone identifier.","type":"string","x-auditable":true},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let image_ref01_data = Object.values(setup.data.existing.image)[0] as any

    // UPDATE
    const image_ref01_ent = client.Image()
    const image_ref01_data_up0: any = {}

    const image_ref01_markdef_up0 = { name: 'etag', value: 'Mark01-image_ref01_' + setup.now }
    ;(image_ref01_data_up0 as any)[image_ref01_markdef_up0.name] = image_ref01_markdef_up0.value

    const image_ref01_resdata_up0 = (await image_ref01_ent.update(image_ref01_data_up0)).data()
    assert(null != image_ref01_resdata_up0)

    assert((image_ref01_resdata_up0 as any)[image_ref01_markdef_up0.name] === image_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/image/ImageTestData.json')

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
    ['image01','image02','image03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IMAGES_TEST_IMAGE_ENTID': idmap,
    'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IMAGES_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGE_ENTID']
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
  
