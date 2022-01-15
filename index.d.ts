import {IncomingMessage, OutgoingMessage} from 'http'

export type Method = 'get' | 'post' | 'put' | 'patch' | 'delete'

export type AllowedMethodsHandler = (req: IncomingMessage, res: OutgoingMessage, ...rest) => any

export default function allowedMethods<T extends (...args) => any = AllowedMethodsHandler>(
	methods: Method[],
): (handler: T) => T
