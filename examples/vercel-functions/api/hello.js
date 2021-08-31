const allowedMethods = require('allowed-methods');

const handler = (req, res) => {
	res.end('hello');
};

module.exports = allowedMethods(['get'])(handler);
