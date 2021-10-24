import createError from 'http-errors'
import axios, { AxiosResponse } from 'axios'
import catchAsync from '@helpers/catchAsync'
import UsersService from '@services/users.service'
import { NextFunction, Request, Response } from 'express'
import UserModel from '@models/user.model'

const ServiceInstance = new UsersService({ User: UserModel })

export const googleAuth = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        console.log('req: ', req)

        // if (!name) {
        //     return next(
        //         createError(401, 'Please Provide a name in POST request', {
        //             expose: true,
        //         })
        //     )
        // }

        res.status(200).json('token hai yeh')
    }
)

export const getUserById = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params

        const alreadyExists = await ServiceInstance.find({
            _id: id,
        })

        

        if (!alreadyExists) {
            return next(
                createError(404, 'User not found', {
                    expose: true,
                })
            )
        }

        const access_token = ServiceInstance.signToken(alreadyExists)

        return res.status(200).json({
            status: 'success',
            message: 'User Found',
            result: {
                user: alreadyExists,
                access_token,
            },
        })
    }
)

export const githubAuth = catchAsync(
    async (req: Request, res: Response, _next: NextFunction): Promise<any> => {
        const fetchGithubUser: AxiosResponse<{
            login: string
            id: number | string
            avatar_url: string
            name: string
            email: string | null
        }> = await axios.get('https://api.github.com/user', {
            headers: { Authorization: `token ${req.body.accessToken}` },
        })

        const { login, avatar_url, id, name, email } = fetchGithubUser.data

        const alreadyExists = await ServiceInstance.find({
            provider: { name: 'github', id: id.toString() },
        })

        if (alreadyExists) {
            const access_token = ServiceInstance.signToken(alreadyExists)

            return res.status(200).json({
                status: 'success',
                message: 'User authenticated',
                result: {
                    user: alreadyExists,
                    access_token,
                },
            })
        }

        const { user, access_token } = await ServiceInstance.create({
            username: login,
            avatar: avatar_url,
            email: email,
            name: name,
            provider: {
                name: 'github',
                id: id,
            },
        })

        res.status(200).json({
            status: 'success',
            message: 'New user created and Authenticated',
            result: {
                user,
                access_token,
            },
        })
    }
)
