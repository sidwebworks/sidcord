process.on('uncaughtException', (err) => {
    console.log(
        `Uncaught exception: ${err.name} ${err.message}, ${err.stack} , shutting down...`
    )
    process.exit(1)
})

//! THIS IS REQUIRED FOR MODULE ALIASES TO WORK.
import 'module-alias/register'
//! THIS IS REQUIRED FOR MODULE ALIASES TO WORK.

import http from 'http'

import './config'
import logger from '@config/logger'
import connect from '@config/loaders/mongoose.loader'
import app from './api/app'

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

connect().then(() =>
    server.listen(PORT, () => {
        logger.debug(`Server started at ${PORT}`)
    })
)

process.on('unhandledRejection', (err: Error) => {
    console.log(
        `Unhandled Rejection: ${err.name} ${err.message} , shutting down...`
    )
    server.close(() => {
        process.exit(1)
    })
})
