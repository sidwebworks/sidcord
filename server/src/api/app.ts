import express, { RequestHandler } from 'express'
import init from '../config/loaders/express.loader'
import exampleRouter from './routes/example.routes'

import ErrorMiddleware from './middlewares/error.middleware'
import createError from 'http-errors'

const app = init(express())

app.use('/', exampleRouter)

/**
 * Capture unhandled Routes
 */
app.all<RequestHandler>('*', (req, _, next) => {
    next(createError(404, `Can't find ${req.originalUrl} on this server.`))
})

app.use(ErrorMiddleware)

export default app
