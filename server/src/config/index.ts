import { join } from 'path'
import { config } from 'dotenv'

import logger from './logger'

const { parsed } = config({
    path: join(process.cwd(), 'src/config/.env'),
    debug: process.env.NODE_ENV === 'development',
})

logger.debug(`current env: ${process.env.NODE_ENV}`)

logger.debug(JSON.stringify(parsed, null, 2))

export default parsed
