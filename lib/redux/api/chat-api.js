import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { info } from "autoprefixer";
import { openSocket } from "lib/utils/socket";

// Define a service using a base URL and expected endpoints
export const chatApi = createApi({
  reducerPath: "chatApi",
  refetchOnMountOrArgChange: 60 * 60 * 5,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.tokens["access_token"];

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllServers: builder.query({
      query: () => `/chat/servers`,
    }),
    getChannelChat: builder.query({
      query: (channel) => `/chat/messages/${channel.conversation_id}`,
      async onCacheEntryAdded(
        channel,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        console.log(channel);

        // create a websocket connection when the cache subscription starts
        const io = openSocket(channel.namespace);

        try {
          // wait for the initial query to resolve before proceeding
          await cacheDataLoaded;

          // when data is received from the socket connection to the server,
          // if it is a message and for the appropriate channel,
          // update our query result with the received message
          const listener = (msg) => {
            updateCachedData((draft) => {
              draft.push(msg);
            });
          };

          io.on("chat-update", listener);
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }
        // cacheEntryRemoved will resolve when the cache subscription is no longer active
        await cacheEntryRemoved;
        // perform cleanup steps once the `cacheEntryRemoved` promise resolves
        io.close();
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllServersQuery, useGetChannelChatQuery } = chatApi;
