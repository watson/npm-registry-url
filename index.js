'use strict'

var exec = require('child_process').exec
var isUrl = /^https?:\/\//

module.exports = function (cb) {
  exec('npm config get registry', function (err, stdout, stderr) {
    if (err) cb(err)
    else if (isUrl.test(stdout)) cb(null, stdout.trim())
    else cb(new Error('Unexpected registy: ' + stdout))
  })
}
