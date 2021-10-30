import { createReducer } from "@reduxjs/toolkit";
import { CHAT } from "../actions";
import { HYDRATE } from "next-redux-wrapper";

const intialState = {
  messages: [],
  current_channel: null,
  status: "online",
};

const chatReduer = createReducer(intialState, (builder) => {
  builder.addCase(CHAT.SEND_MESSAGE, (state, action) => {
    state.messages.push(action.payload);
  });
  builder.addCase(HYDRATE, (state, action) => {
    state = {
      ...state,
      ...action.payload.chat,
    };
  });
});

export default chatReduer;
