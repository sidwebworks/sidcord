import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { chatApi } from "./api";
import { socketMiddleware } from "./middlewares";
import { chatReducer, uiReducer, authReducer } from "./reducers";

export const makeStore = () => {
  return configureStore({
    reducer: {
      chat: chatReducer,
      auth: authReducer,
      ui: uiReducer,
    },
    devTools: true,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(socketMiddleware),
  });
};

export const wrapper = createWrapper(makeStore);
