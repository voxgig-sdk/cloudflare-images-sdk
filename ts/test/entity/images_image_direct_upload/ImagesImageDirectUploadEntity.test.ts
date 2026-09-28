

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


describe('ImagesImageDirectUploadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IMAGES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareImagesSDK.test()
    const ent = testsdk.ImagesImageDirectUpload()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'images_image_direct_upload.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"expiry":{"a":true,"fo":"date-time","h":"Expiry","n":"expiry","r":false,"sh":"The date after which the upload will not be accepted.","t":"`$STRING`","key$":"expiry","index$":0}},"name":"images_image_direct_upload","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/images/v1/direct_upload","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/images/v1/direct_upload","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v1"},{"lit":"direct_upload"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /accounts/{account_id}/images/v2/direct_upload","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/images/v2/direct_upload","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v2"},{"lit":"direct_upload"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"images_image_direct_upload","name__orig":"images_image_direct_upload","Name":"ImagesImageDirectUpload","name_":"images_image_direct_upload","name-":"images-image-direct-upload","NAME":"IMAGES_IMAGE_DIRECT_UPLOAD","index$":3}, {"active":true,"entity":"images_image_direct_upload","key$":"BasicImagesImageDirectUploadFlow","kind":"basic","name":"BasicImagesImageDirectUploadFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"images_image_direct_upload_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ImagesImageDirectUpload', {"POST /accounts/{account_id}/images/v1/direct_upload":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"expiry":{"description":"The date after which the upload will not be accepted. Minimum: Now + 2 minutes. Maximum: Now + 6 hours.","type":"string","format":"date-time","example":"2021-01-02T02:20:00Z","key$":"expiry"}},"x-ref":"#/components/schemas/images_image_direct_upload_request_v1","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0}]},"POST /accounts/{account_id}/images/v2/direct_upload":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"creator":{"description":"Can set the creator field with an internal user ID.","type":"string"},"expiry":{"description":"The date after which the upload will not be accepted. Minimum: Now + 2 minutes. Maximum: Now + 6 hours.","type":"string","format":"date-time","example":"2021-01-02T02:20:00Z","default":"Now + 30 minutes","x-auditable":true},"id":{"description":"Optional Image Custom ID. Up to 1024 chars. Can include any number of subpaths, and utf8 characters. Cannot start nor end with a / (forward slash). Cannot be a UUID.","type":"string","example":"this/is/my-customid","maxLength":1024,"x-auditable":true},"metadata":{"description":"User modifiable key-value store. Can be used for keeping references to another system of record, for managing images.","type":"object"},"requireSignedURLs":{"description":"Indicates whether the image requires a signature token to be accessed.","type":"boolean","example":true,"default":false,"x-auditable":true}},"x-ref":"#/components/schemas/images_image_direct_upload_request_v2"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const images_image_direct_upload_ref01_ent = client.ImagesImageDirectUpload()
    let images_image_direct_upload_ref01_data = setup.data.new.images_image_direct_upload['images_image_direct_upload_ref01']
    images_image_direct_upload_ref01_data['account_id'] = setup.idmap['account01']

    images_image_direct_upload_ref01_data = (await images_image_direct_upload_ref01_ent.create(images_image_direct_upload_ref01_data)).data()
    assert(null != images_image_direct_upload_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/images_image_direct_upload/ImagesImageDirectUploadTestData.json')

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
    ['images_image_direct_upload01','images_image_direct_upload02','images_image_direct_upload03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_DIRECT_UPLOAD_ENTID': idmap,
    'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IMAGES_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_DIRECT_UPLOAD_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_DIRECT_UPLOAD_ENTID']
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
  
