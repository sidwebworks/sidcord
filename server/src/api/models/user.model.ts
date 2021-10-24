import { model, Mongoose, ObjectId, Schema } from 'mongoose'
import type { User } from 'typings/types/auth'

const schema = new Schema<User>({
    username: {
        type: String,
        required: [true, 'Please give an valid username'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Please give an valid name'],
    },
    email: {
        type: String,
        unique: true,
    },
    provider: {
        name: {
            type: String,
        },
        id: {
            type: String,
        },
    },
    avatar: String,
})

const UserModel = model<User>('User', schema)

export default UserModel
