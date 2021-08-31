import {IncomingMessage, OutgoingMessage} from 'http';

declare module 'allowed-methods' {
	type Handler = (req: IncomingMessage, res: OutgoingMessage, ...rest) => any;

	function restMethods(methods: string[]): (handler: Handler) => any;
	export = restMethods;
}
