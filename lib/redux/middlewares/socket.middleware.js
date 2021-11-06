import { openSocket } from "lib/utils/socket";
import { CHAT } from "../actions";
import { chatApi } from "../api";
import { fetchAllServers, fetchChannelChat } from "../api/chat.thunks";

export const socketMiddleware = ({ getState, dispatch }) => {
  let io = null;
  let serverSocket = null;

  return (next) => (action) => {
    if (action.type === "CHAT.INIT_CONNECTION") {
      if (io) {
        io.close();
      }

      const user = getState().auth.user;

      io = openSocket("/", user);

      setupDefaultSocket(io, getState, dispatch);
    }

    if (action.type === "CHAT.JOIN_SERVER") {
      if (serverSocket) {
        serverSocket.close();
      }

      const server = action.payload.server;

      const user = getState().auth.user;

      serverSocket = openSocket(server.endpoint, user);

      setupServerSocket(serverSocket, getState, dispatch);
    }

    if (action.type === "CHAT.SEND_MESSAGE") {
      serverSocket.emit("send-message", action.payload);
    }

    console.log("action: ", action);
    // Exit the middleware
    return next(action);
  };
};

const setupDefaultSocket = (socket, store, dispatch) => {
  socket.on("connect", () => {
    console.log("Socket connected", socket);
    dispatch(fetchAllServers());
  });

  socket.on("message", (s) => console.log(s));
};

const setupServerSocket = (socket, store, dispatch) => {
  socket.on("connect", () => {
    console.log("Socket connected", socket);
  });

  socket.on("chat-signal:create", (data) => {
    dispatch(CHAT.RECIEVE_MESSAGE(data));
  });

  socket.on("chat-signal:update", (s) => {});

  socket.on("chat-signal:delete", (s) => {
    console.log("Update", s);
  });

  socket.on("message", (s) => console.log(s));
};
