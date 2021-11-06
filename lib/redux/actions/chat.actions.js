import { createAction } from "@reduxjs/toolkit";

export const SEND_MESSAGE = createAction("CHAT.SEND_MESSAGE");

export const UPDATE_RECIEVED = createAction("CHAT.UPDATE_RECIEVED");

export const UPDATE_SOCKET = createAction("CHAT.UPDATE_SOCKET");

export const JOIN_SERVER = createAction("CHAT.JOIN_SERVER");

export const INIT_CONNECTION = createAction("CHAT.INIT_CONNECTION");


export const DELETE_MESSAGE = createAction("CHAT.DELETE_MESSAGE");

export const UPDATE_MESSAGE = createAction("CHAT.UPDATE_MESSAGE");

export const JOIN_CHANNEL = createAction("CHAT.JOIN_CHANNEL");
