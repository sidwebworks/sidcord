import { configureStore } from "@reduxjs/toolkit";
import chatReduer from "./reducers/chatReducer";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    chat: chatReduer,
  },
});

export default store;
