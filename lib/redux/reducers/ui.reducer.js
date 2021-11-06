import { createReducer } from "@reduxjs/toolkit";
import { UI } from "../actions";

const intialState = {
  chat: {
    show_channel_modal: false,
  },
};

export const uiReducer = createReducer(intialState, (builder) => {
  builder.addCase(UI.TOGGLE_CHANNEL_MODAL, (state, action) => {
    if (action.payload === undefined) {
      state.chat.show_channel_modal = !state.chat.show_channel_modal;
    } else {
      state.chat.show_channel_modal = action.payload;
    }
  });
});
