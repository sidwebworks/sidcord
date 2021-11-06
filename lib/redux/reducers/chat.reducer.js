import { createReducer } from "@reduxjs/toolkit";
import { CHAT } from "../actions";
import { chatApi } from "../api";
import { fetchAllServers, fetchChannelChat } from "../api/chat.thunks";

const intialState = {
  current_server: null,
  current_channel: null,
  servers: [],
  conversations: [],
  status: "online",
};

export const chatReducer = createReducer(intialState, (builder) => {
  builder.addCase(CHAT.JOIN_SERVER, (state, action) => {
    const server = state.servers.find(
      (el) => el._id === action.payload.server._id
    );

    if (server) {
      state.current_server = server;
      state.current_channel = server.channels[0];
    }
  });
  builder.addCase(CHAT.RECIEVE_MESSAGE, (state, action) => {
    console.log("action: ", action);

    const convo = state.conversations.find(
      (el) => el.id === action.payload.conversation_id
    );

    console.log("convo: ", convo);

    if (convo) {
      convo.messages.push(action.payload);
    }
  });
  builder.addCase(fetchAllServers.fulfilled, (state, action) => {
    state.servers = action.payload;
  });
  builder.addCase(fetchChannelChat.fulfilled, (state, action) => {
    console.log("action: ", action);
    const convo = { id: action.payload.id, messages: action.payload.messages };
    state.conversations.push(convo);
  });
});
