import { createAsyncThunk } from "@reduxjs/toolkit";
import { createInstance } from "lib/utils/axiosInstance";

export const fetchAllServers = createAsyncThunk(
  "chat/fetchAllServers",
  async (_, { getState, dispatch }) => {
    const token = getState().auth.tokens["access_token"];

    const chatApi = createInstance(token);

    try {
      const response = await chatApi.get("/chat/servers");

      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const fetchChannelChat = createAsyncThunk(
  "chat/fetchChannelChat",
  async (_, { getState, dispatch }) => {
    const token = getState().auth.tokens["access_token"];
    const channel = getState().chat.current_channel;

    const chatApi = createInstance(token);

    try {
      const response = await chatApi.get(`/chat/messages/${channel.conversation_id}`);

      return { messages: response.data, id: channel.conversation_id };
    } catch (error) {
      console.error(error.message);
    }
  }
);
