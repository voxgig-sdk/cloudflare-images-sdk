

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


describe('ImagesImagesListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IMAGES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IMAGES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareImagesSDK.test()
    const ent = testsdk.ImagesImagesList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IMAGES_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'images_images_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","op":{"list":{"req":true,"type":"`$OBJECT`"}},"r":false,"t":"`$OBJECT`","union":{"branches":3,"count":1,"depth":6},"key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful","t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"images_images_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/images/v1","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"creator","or":"creator","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"ex":1000,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/images/v1","q":{"exist":["account_id","creator","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v1"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/images/v2","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"iD0bxlWFSVUWsDHbzIqvDkgBW4otifAAuGXLz1n8BQA","k":"query","n":"continuation_token","or":"continuation_token","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"creator","or":"creator","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"meta_<field>_<operator>","or":"meta_<field>_<operator>","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":1000,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":3},{"a":true,"ex":"desc","k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/accounts/{account_id}/images/v2","q":{"exist":["account_id","continuation_token","creator","meta_<field>_<operator>","per_page","sort_order"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"images"},{"lit":"v2"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"images_images_list","name__orig":"images_images_list","Name":"ImagesImagesList","name_":"images_images_list","name-":"images-images-list","NAME":"IMAGES_IMAGES_LIST","index$":9}, {"active":true,"entity":"images_images_list","key$":"BasicImagesImagesListFlow","kind":"basic","name":"BasicImagesImagesListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"images_images_list_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"images_images_list_ref01","srcdatavar":"images_images_list_ref01_data","suffix":"_dt0"},"m":{"id":"images_images_list01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-images_images_list_ref01"}}],"index$":1}]}, 'ImagesImagesList', {"GET /accounts/{account_id}/images/v1":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0},{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","schema":{"description":"Number of items per page.","type":"number","default":1000,"maximum":10000,"minimum":10},"index$":2},{"name":"creator","in":"query","schema":{"description":"Internal user ID set within the creator field. Setting to empty string \"\" will return images where creator field is not set","type":"string","nullable":true},"index$":3}]},"GET /accounts/{account_id}/images/v2":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_account_identifier"},"index$":0},{"name":"continuation_token","in":"query","schema":{"description":"Continuation token to fetch next page. Passed as a query param when requesting List V2 api endpoint.","type":"string","example":"iD0bxlWFSVUWsDHbzIqvDkgBW4otifAAuGXLz1n8BQA","maxLength":32,"nullable":true,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/images_images_list_continuation_token"},"index$":1},{"name":"per_page","in":"query","schema":{"description":"Number of items per page","type":"number","default":1000,"maximum":10000,"minimum":10},"index$":2},{"name":"sort_order","in":"query","schema":{"description":"Sorting order by upload time","type":"string","default":"desc","enum":["asc","desc"]},"index$":3},{"name":"creator","in":"query","schema":{"description":"Internal user ID set within the creator field. Setting to empty string \"\" will return images where creator field is not set","type":"string","nullable":true},"index$":4},{"name":"meta.<field>[<operator>]","in":"query","description":"Optional metadata filter(s). Multiple filters can be combined with AND logic.\n\n**Operators:**\n- `eq`, `eq:string`, `eq:number`, `eq:boolean` - Exact match\n- `gt`, `gt:number` - Greater than (number only)\n- `gte`, `gte:number` - Greater than or equal (number only)\n- `lt`, `lt:number` - Less than (number only)\n- `lte`, `lte:number` - Less than or equal (number only)\n- `in`, `in:string`, `in:number` - Match any value in pipe-separated list\n\n**Examples:**\n- `meta.status[eq]=active`\n- `meta.priority[eq:number]=5`\n- `meta.enabled[eq:boolean]=true`\n- `meta.priority[gte:number]=1`\n- `meta.score[lt:number]=100`\n- `meta.region[in]=us-east|us-west|eu-west`\n\n**Note:** Filter consistency is not validated. Contradictory filters (e.g., `meta.priority[eq:number]=5&meta.priority[lte:number]=3`) will return zero results.\n","schema":{"type":"string"},"explode":true,"style":"form","index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let images_images_list_ref01_data = Object.values(setup.data.existing.images_images_list)[0] as any

    // LIST
    const images_images_list_ref01_ent = client.ImagesImagesList()
    const images_images_list_ref01_match: any = {}
    images_images_list_ref01_match['account_id'] = setup.idmap['account01']

    const images_images_list_ref01_list = (await images_images_list_ref01_ent.list(images_images_list_ref01_match)).map((e: any) => e.data())



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/images_images_list/ImagesImagesListTestData.json')

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
    ['images_images_list01','images_images_list02','images_images_list03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGES_LIST_ENTID': idmap,
    'CLOUDFLARE_IMAGES_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IMAGES_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IMAGES_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGES_LIST_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IMAGES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGES_LIST_ENTID']
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
  
