'use strict'

var assert = require('assert')
var npmUrl = require('./')

npmUrl(function (err, url) {
  assert.ifError(err)
  assert.strictEqual(url, 'https://registry.npmjs.org/')
})
