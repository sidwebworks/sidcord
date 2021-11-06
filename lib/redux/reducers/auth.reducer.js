import { createReducer } from "@reduxjs/toolkit";
import { USER } from "../actions";

const intialState = {
  user: null,
  tokens: null,
};

export const authReducer = createReducer(intialState, (builder) => {
  builder.addCase(USER.UPDATE_DATA, (state, action) => {
    state.user = action.payload.user;
    state.tokens = action.payload.tokens;
  });
});

