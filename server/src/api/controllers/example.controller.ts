import createError from 'http-errors'

import catchAsync from '../helpers/catchAsync'
import ExampleService from '../services/example.service'
import { NextFunction, Request, Response } from 'express'

const ServiceInstance = new ExampleService()

const helloController = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { name } = req.body

        if (!name) {
            return next(
                createError(401, 'Please Provide a name in POST request', {
                    expose: true,
                })
            )
        }

        const greeting = await ServiceInstance.sayHello(name || 'Developer')

        res.status(200).json(greeting)
    }
)

export default helloController
