import { io } from "socket.io-client";

export const openSocket = (namespace = "/", user) =>
  io(`${process.env.NEXT_PUBLIC_SERVER_URL}${namespace}`, {
    auth: user,
  });
