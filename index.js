'use strict'
function allowedMethods(methods) {
	return (handler) =>
		(req, res, ...rest) => {
			const notAllowed = !methods.some(
				(method) => method.toLowerCase() === req.method.toLowerCase(),
			)

			if (notAllowed) {
				res.setHeader('allow', methods.map((method) => method.toUpperCase()).join(', '))
				res.statusCode = 405
				res.end('Method Not Allowed', 'utf8')
				return
			}

			return handler(req, res, ...rest)
		}
}

module.exports = allowedMethods
