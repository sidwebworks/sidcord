import { createReducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { USER } from "../actions";

const intialState = {
  user: null,
  tokens: null,
};

const userReducer = createReducer(intialState, (builder) => {
  builder.addCase(USER.UPDATE_DATA, (state, action) => {
    state.user = action.payload.user;
    state.tokens = action.payload.tokens;
  });
});

export default userReducer;
