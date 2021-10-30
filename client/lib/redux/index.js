import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducers/chatReducer";

import { createWrapper } from "next-redux-wrapper";
import userReducer from "./reducers/userReducer";

export const makeStore = () => {
  return configureStore({
    reducer: { chat: chatReducer, user: userReducer },
    devTools: true,
  });
};

export const wrapper = createWrapper(makeStore);
