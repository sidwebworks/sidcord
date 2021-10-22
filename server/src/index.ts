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
import { Server } from 'socket.io'
import './config'
import logger from '@config/logger'
import app from './api/app'

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
})

server.listen(PORT, () => {
    logger.debug(`Server started at ${PORT}`)
})

io.on('connection', (socket) => {
    console.log('New client' + socket.id)

    socket.emit("message", "Hello")
})


process.on('unhandledRejection', (err: Error) => {
    console.log(
        `Unhandled Rejection: ${err.name} ${err.message} , shutting down...`
    )
    server.close(() => {
        process.exit(1)
    })
})
