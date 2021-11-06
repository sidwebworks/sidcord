import { openSocket } from "lib/utils/socket";

export const socketMiddleware = (store) => {
  let io = null;
  let serverSocket = null;

  return (next) => (action) => {
    switch (action.type) {
      case "CHAT.INIT_CONNECTION": {
        if (io) {
          io.close();
        }
        const user = store.getState().auth.user;

        io = openSocket("/", user);

        setupSocketListener(io, store);

        break;
      }
      case "CHAT.JOIN_SERVER": {
        if (serverSocket) {
          serverSocket.close();
        }
        
        const server = action.payload.server;

        const user = store.getState().auth.user;

        serverSocket = openSocket(server.endpoint, user);

        setupSocketListener(serverSocket, store);

        break;
      }
      case "CHAT.SEND_MESSAGE": {
        serverSocket.emit("chat-message", action.payload);

        break;
      }
    }

    console.log("action: ", action);

    // Exit the middleware
    return next(action);
  };
};

function setupSocketListener(socket, store) {
  socket.on("connect", () => {
    console.log("Socket connected", socket);
  });

  socket.on("message", (s) => console.log(s));

  socket.on("chat-update", (action) => {
    // Check for action type
    console.log("Update: ", action);
  });
}
