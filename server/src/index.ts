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
import { Server, Socket } from 'socket.io'
import './config'
import logger from '@config/logger'
import connect from '@config/loaders/mongoose.loader'

connect()

import app from './api/app'
import { chatController } from '@controllers/chat.controller'

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

const intializeSockets = (socket: Socket) => {
    chatController(socket, io)
}

io.on('connection', intializeSockets)

process.on('unhandledRejection', (err: Error) => {
    console.log(
        `Unhandled Rejection: ${err.name} ${err.message} , shutting down...`
    )
    server.close(() => {
        process.exit(1)
    })
})
