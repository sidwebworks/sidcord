import { io } from "socket.io-client";


export const crea = (namespace = "/") => io(`${process.env.NEXT_PUBLIC_SERVER_URL}${namespace}`) 