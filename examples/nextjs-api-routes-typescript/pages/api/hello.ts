import allowedMethods from 'allowed-methods'
import {NextApiHandler} from 'next'

const handler: NextApiHandler = (request, response) => {
	response.end('Hello')
}

export default allowedMethods<NextApiHandler>(['get'])(handler)
