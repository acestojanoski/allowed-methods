const allowedMethods = require('allowed-methods');

const handler = (req, res) => {
	res.end('ok');
};

module.exports = allowedMethods(['get', 'post'])(handler);
