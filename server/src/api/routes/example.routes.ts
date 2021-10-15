import { Router } from 'express'

import helloController from '../controllers/example.controller'
import validate from '../middlewares/validation.middleware'
import exampleDto from '../validations/example.dto'

const exampleRouter = Router()

exampleRouter.post('/', validate(exampleDto), helloController)

export default exampleRouter
