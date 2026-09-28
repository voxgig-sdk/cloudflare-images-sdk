
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareImagesSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareImagesSDK.test()
    equal(testsdk instanceof CloudflareImagesSDK, true,
      'CloudflareImagesSDK.test() must return a client synchronously')
  })

})
