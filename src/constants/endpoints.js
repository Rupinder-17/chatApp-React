export const API_BASE_URL = "https://api.freeapi.app/api/v1";

export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/users/login",
    REGISTER: "/users/register",
    LOGOUT: "/users/logout",
    REFRESH_TOKEN: "/users/refresh-token",
    VERIFY_EMAIL: "/users/verify-email",
    RESET_PASSWORD: "/users/reset-password",
  },
  CHAT: {
    GET_CHATS: "/chat-app/chats",
    CREATE_CHAT: (userId) => `/chat-app/chats/c/${userId}`,
    GET_CHAT: (chatId) => `/chat-app/chats/${chatId}`,
    DELETE_CHAT: (chatId) => `/chat-app/chats/${chatId}`,
  },
  MESSAGES: {
    GET_MESSAGES: (chatId) => `/chat-app/messages/${chatId}`,
    SEND_MESSAGE: (chatId) => `/chat-app/messages/${chatId}`,
    DELETE_MESSAGE: (chatId, messageId) => `/chat-app/messages/${chatId}/${messageId}`,
    UPDATE_MESSAGE: (chatId, messageId) => `/chat-app/messages/${chatId}/${messageId}`,
  },
  USERS: {
    GET_ONLINE_USERS: "/chat-app/chats/users",
    GET_USER_PROFILE: (userId) => `/users/${userId}`,
    UPDATE_PROFILE: "/users/profile",
    UPLOAD_AVATAR: "/users/avatar",
  },
}; 