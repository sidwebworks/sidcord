import { createReducer } from "@reduxjs/toolkit";
import { SEND_MESSAGE } from "../actions";

const intialState = {
  messages: [],
  current_channel: null,
  status: "online",
};

const chatReduer = createReducer(intialState, (builder) => {
  builder.addCase(SEND_MESSAGE, (state, action) => {
    state.messages.push(action.payload);
  });
});

export default chatReduer;
