const http = require('http');
const allowedMethods = require('allowed-methods');

const handler = (req, res) => {
	res.end('ok');
};

const server = http.createServer(allowedMethods(['get', 'post'])(handler));

server.listen(3001, () => {
	console.info('Server is listening on port 3001');
});
