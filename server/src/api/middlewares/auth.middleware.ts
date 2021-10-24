import { NextFunction, Request, Response } from 'express'
import { verify } from '@helpers/jwt.helper'

export const checkAuth = async (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    try {
        // throws an error if not valid
        console.log(req.headers);
        let token = req.headers.authorization?.split(' ')[1]
        console.log('token: ', token);

        await verify(token)

        next()
    } catch (error: any) {
        return next(error)
    }
}
