const { test } = require('tap')

const hash = require('../lib/hash')

test('hash', async assert => {
  assert.plan(1)

  const found = hash('greenlight/plugin')

  assert.equal(found, '47edeaf54dd0e76af8b10d2aed526e9067783fdb')
})
