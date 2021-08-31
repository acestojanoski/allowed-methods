'use strict';

module.exports = methods => handler => {
	if (!Array.isArray(methods) || !methods.every(method => typeof method === 'string')) {
		throw new TypeError('Expected `methods` to be an array of strings.');
	}

	const handlerType = typeof handler;
	if (handlerType !== 'function') {
		throw new TypeError(`Expected \`handler\` to be a function, got \`${handlerType}\``);
	}

	return (req, res, ...rest) => {
		const methodNotAllowed = !methods.some(
			method => method.toLowerCase() === req.method.toLowerCase(),
		);

		if (methodNotAllowed) {
			res.setHeader('allow', methods.map(method => method.toUpperCase()).join(', '));
			res.statusCode = 405;
			res.end('Method Not Allowed', 'utf8');
			return;
		}

		return handler(req, res, ...rest);
	};
};
