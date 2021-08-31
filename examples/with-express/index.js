const express = require('express');
const allowedMethods = require('allowed-methods');

const server = express();

// It will allow only get methods across the entire application
// If the ongoing request method is allowed, we are using the `next` callback function to continue with the next middleware
server.use(allowedMethods(['get'])((req, res, next) => next()));

server.get('/allowed', (req, res) => {
	res.end('allowed');
});

server.post('/not-allowed', (req, res) => {
	res.end('we will never get this response');
});

server.listen(3001, () => {
	console.info('Server is listening on port 3001');
});
