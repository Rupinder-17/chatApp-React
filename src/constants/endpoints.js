export const API_BASE_URL = "https://api.freeapi.app/api/v1";

export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/users/login",
    REGISTER: "/users/register",
  },
  CHAT: {
    GET_CHATS: "/chat-app/chats",
    CREATE_CHAT: (userId) => `/chat-app/chats/c/${userId}`,
    DELETE_CHAT: (chatId) => `/chat-app/chats/${chatId}`,
  },
  MESSAGES: {
    GET_MESSAGES: (chatId) => `/chat-app/messages/${chatId}`,
    SEND_MESSAGE: (chatId) => `/chat-app/messages/${chatId}`,
    DELETE_MESSAGE: (chatId, messageId) => `/chat-app/messages/${chatId}/${messageId}`,
  },
  USERS: {
    GET_ONLINE_USERS: "/chat-app/chats/users"
  },
}; 