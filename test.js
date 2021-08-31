const http = require('http');
const test = require('ava');
const testListen = require('test-listen');
const {default: got} = require('got');
const sut = require('.');

test('should throw and error if methods is not of type array', t => {
	const handler = (req, res) => {
		res.end('success');
	};

	t.throws(
		() => {
			sut()(handler);
		},
		{
			instanceOf: TypeError,
		},
	);
});

test('should throw an error if some method is not of type `string`', t => {
	const handler = (req, res) => {
		res.end('success');
	};

	t.throws(
		() => {
			sut([null, 'GET'])(handler);
		},
		{
			instanceOf: TypeError,
		},
	);
});

test('should throw an error if the handler is not of type `function`', t => {
	t.throws(
		() => {
			sut(['get'])('some string');
		},
		{
			instanceOf: TypeError,
		},
	);
});

test('should return `Method Not Allowed` if the method is not included in the array of methods', async t => {
	const handler = (req, res) => {
		res.end('success');
	};

	const server = http.createServer(sut(['post'])(handler));
	const url = await testListen(server);

	const error = await t.throwsAsync(got(url));
	t.is(error?.response?.statusCode, 405);
	t.is(error?.response?.headers?.allow, 'POST');
});

test('should return success if the method is included in the array of methods', async t => {
	const handler = (req, res) => {
		res.end('success');
	};

	const server = http.createServer(sut(['get'])(handler));
	const url = await testListen(server);

	const {body, statusCode} = await got(url);
	t.is(statusCode, 200);
	t.is(body, 'success');
});
