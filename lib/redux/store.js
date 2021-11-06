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
      [chatApi.reducerPath]: chatApi.reducer,
    },
    devTools: true,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([socketMiddleware, chatApi.middleware]),
  });
};

export const wrapper = createWrapper(makeStore);
