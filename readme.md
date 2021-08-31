# allowed-methods

> Allow a set of HTTP methods

![build](https://github.com/acestojanoski/allowed-methods/actions/workflows/main.yml/badge.svg?branch=master)
[![Downloads](https://img.shields.io/npm/dm/allowed-methods.svg)](https://npmjs.com/allowed-methods)
[![Install size](https://packagephobia.com/badge?p=allowed-methods)](https://packagephobia.com/result?p=allowed-methods)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)


## Install

```
$ npm install allowed-methods
```

## Usage

```js
const http = require('http');
const allowedMethods = require('allowed-methods');

const handler = (req, res) => {
	res.end('success');
};

const server = http.createServer(allowedMethods(['get', 'post'])(handler));

server.listen(3001);
```

In serverless environment:
```js
const allowedMethods = require('allowed-methods');

module.exports = allowedMethods(['get'])((req, res) => {
	res.end('success');
});
```

## API

### allowedMethods(methods)(handler)

#### methods

Type: `string[]`

An array of allowed HTTP methods.

#### handler

Type: `Function`

The request handler to wrap.

## Examples

See the [examples](examples) for more details.

## Authors

- Aleksandar Stojanoski ([acestojanoski](https://github.com/acestojanoski))

## License
[MIT](license)
