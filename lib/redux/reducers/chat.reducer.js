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
    const convo = state.conversations.findIndex(
      (el) => el.id === action.payload.conversation_id
    );

    if (convo !== -1) {
      state.conversations[convo].messages.push(action.payload);
    }
  });
  builder.addCase(fetchAllServers.fulfilled, (state, action) => {
    state.servers = action.payload;
  });
  builder.addCase(fetchChannelChat.fulfilled, (state, action) => {
    const convo = { id: action.payload.id, messages: action.payload.messages };

    const exists = state.conversations.findIndex(
      (el) => el.id === action.payload.id
    );

    if (exists !== -1) {
      state.conversations[exists].messages = action.payload.messages;
    } else {
      state.conversations.push(convo);
    }
  });
});
