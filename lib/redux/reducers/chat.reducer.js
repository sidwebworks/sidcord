import { createReducer } from "@reduxjs/toolkit";
import { CHAT } from "../actions";
import { chatApi } from "../api";

const intialState = {
  messages: [],
  current_server: null,
  current_channel: null,
  servers: [],
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
  builder.addMatcher(
    chatApi.endpoints.getAllServers.matchFulfilled,
    (state, { payload }) => {
      state.servers = payload;
      state.current_server = payload[0] || null;
    }
  );
});
