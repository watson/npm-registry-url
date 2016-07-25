# npm-registry-url

Get the current system npm registry URL

[![Build status](https://travis-ci.org/watson/npm-registry-url.svg?branch=master)](https://travis-ci.org/watson/npm-registry-url)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install npm-registry-url
```

## Usage

```js
var npmUrl = require('npm-registry-url')

npmUrl(function (err, url) {
  if (err) throw err
  console.log('The npm registry URL is:', url)
})
```

## License

MIT
