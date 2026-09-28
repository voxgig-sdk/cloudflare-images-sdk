

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


describe('ImagesSourcingkitConnectivityCheckEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IMAGES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareImagesSDK.test()
    const ent = testsdk.ImagesSourcingkitConnectivityCheck()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'images_sourcingkit_connectivity_check.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account":{"a":true,"h":"Account","n":"account","r":false,"sh":"Account identifier for the bucket (required for R2 vendor).","t":"`$STRING`","key$":"account","index$":0},"bucket":{"a":true,"h":"Bucket","n":"bucket","r":true,"sh":"The name of the storage bucket.","t":"`$STRING`","key$":"bucket","index$":1},"region":{"a":true,"h":"Region","n":"region","r":false,"sh":"The region hint for the bucket (S3 only).","t":"`$STRING`","key$":"region","index$":2},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":3},"secret":{"a":true,"h":"Secret","n":"secret","r":true,"sh":"Storage credentials for accessing the bucket.","t":"`$OBJECT`","wo":true,"key$":"secret","index$":4},"vendor":{"a":true,"h":"Vendor","n":"vendor","r":true,"sh":"The cloud storage vendor of the source bucket.","t":"`$STRING`","key$":"vendor","index$":5}},"name":"images_sourcingkit_connectivity_check","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/images/v2/sourcingkit/sources/connectivity-precheck","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/images/v2/sourcingkit/sources/connectivity-precheck","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v2"},{"lit":"sourcingkit"},{"lit":"sources"},{"lit":"connectivity-precheck"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}/connectivity","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5ca167e6-4e40-4ced-a209-ca1b9dd6a265","k":"param","n":"source_id","or":"source_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}/connectivity","q":{"exist":["account_id","source_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v2"},{"lit":"sourcingkit"},{"lit":"sources"},{"var":"source_id"},{"lit":"connectivity"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.source"]]},"key$":"images_sourcingkit_connectivity_check","name__orig":"images_sourcingkit_connectivity_check","Name":"ImagesSourcingkitConnectivityCheck","name_":"images_sourcingkit_connectivity_check","name-":"images-sourcingkit-connectivity-check","NAME":"IMAGES_SOURCINGKIT_CONNECTIVITY_CHECK","index$":12}, {"active":true,"entity":"images_sourcingkit_connectivity_check","key$":"BasicImagesSourcingkitConnectivityCheckFlow","kind":"basic","name":"BasicImagesSourcingkitConnectivityCheckFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"images_sourcingkit_connectivity_check_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"images_sourcingkit_connectivity_check_ref01","srcdatavar":"images_sourcingkit_connectivity_check_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"images_sourcingkit_connectivity_check01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-images_sourcingkit_connectivity_check_ref01"}}],"index$":1}]}, 'ImagesSourcingkitConnectivityCheck', {"POST /accounts/{account_id}/images/v2/sourcingkit/sources/connectivity-precheck":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"account":{"description":"Account identifier for the bucket (required for R2 vendor).","type":"string","key$":"account"},"bucket":{"description":"The name of the storage bucket.","type":"string","maxLength":128,"minLength":1,"key$":"bucket"},"region":{"description":"The region hint for the bucket (S3 only).","type":"string","nullable":true,"key$":"region"},"secret":{"description":"Storage credentials for accessing the bucket.","type":"object","writeOnly":true,"key$":"secret"},"vendor":{"description":"The cloud storage vendor of the source bucket.","type":"string","example":"s3","enum":["s3","r2"],"x-ref":"#/components/schemas/images_sourcingkit_vendor","key$":"vendor"}},"required":["bucket","vendor","secret"],"x-ref":"#/components/schemas/images_sourcingkit_connectivity_precheck_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0}]},"GET /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}/connectivity":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0},{"name":"source_id","in":"path","required":true,"schema":{"description":"Sourcing kit resource identifier.","type":"string","format":"uuid","example":"5ca167e6-4e40-4ced-a209-ca1b9dd6a265","x-ref":"#/components/schemas/images_sourcingkit_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const images_sourcingkit_connectivity_check_ref01_ent = client.ImagesSourcingkitConnectivityCheck()
    let images_sourcingkit_connectivity_check_ref01_data = setup.data.new.images_sourcingkit_connectivity_check['images_sourcingkit_connectivity_check_ref01']
    images_sourcingkit_connectivity_check_ref01_data['account_id'] = setup.idmap['account01']

    images_sourcingkit_connectivity_check_ref01_data = (await images_sourcingkit_connectivity_check_ref01_ent.create(images_sourcingkit_connectivity_check_ref01_data)).data()
    assert(null != images_sourcingkit_connectivity_check_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/images_sourcingkit_connectivity_check/ImagesSourcingkitConnectivityCheckTestData.json')

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
    ['images_sourcingkit_connectivity_check01','images_sourcingkit_connectivity_check02','images_sourcingkit_connectivity_check03','source01','source02','source03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_CONNECTIVITY_CHECK_ENTID': idmap,
    'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IMAGES_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_CONNECTIVITY_CHECK_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_CONNECTIVITY_CHECK_ENTID']
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
  
