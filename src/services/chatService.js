import { apiClient } from "../api/apiClient";
import { ENDPOINTS } from "../constants/endpoints";

export const chatService = {
  async getUserChatList() {
    try {
      const response = await apiClient.request(ENDPOINTS.USERS.GET_USERS_LIST);
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch online users");
    }
  },

  async getOnlineUsers() {
    try {
      const response = await apiClient.request(
        ENDPOINTS.USERS.GET_AVAILABLE_USERS
      );

      return response.data;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch online users");
    }
  },

  async createChat(userId) {
    try {
      const response = await apiClient.request(
        ENDPOINTS.CHAT.CREATE_CHAT(userId),
        {
          method: "POST",
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.message || "Failed to create chat");
    }
  },

  async getMessages(chatId) {
    try {
      const response = await apiClient.request(
        ENDPOINTS.MESSAGES.GET_MESSAGES(chatId)
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch messages");
    }
  },

  async sendMessage(chatId, content) {
    try {
      const response = await apiClient.request(
        ENDPOINTS.MESSAGES.SEND_MESSAGE(chatId),
        {
          method: "POST",
          body: JSON.stringify({ content }),
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message || "Failed to send message");
    }
  },
  async deleteMessage(chatId, messageId) {
    //  const messageId = localStorage.getItem("messageId");

    try {
      await apiClient.request(
        ENDPOINTS.MESSAGES.DELETE_MESSAGE(chatId, messageId),
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      throw new Error(error.message || "Failed to delete message");
    }
  },
  async createGroup(groupName, selectedUser) {
    console.log("Creating Group with Data:", {
      name: groupName,
      selectedUser,
    });
    try {
      const response = await apiClient.request(ENDPOINTS.GROUP.CREATE_GROUP, {
        method: "POST",

        body: JSON.stringify({ name: groupName, participants: selectedUser }),
      });
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to delete message");
    }
  },
  async createGroupChat(chatId) {
    try {
      const response = await apiClient.request(
        ENDPOINTS.GROUP.CREATE_GROUP_CHAT(chatId)
      );
      return response;
    } catch (error) {
      throw new Error(error.message || "Failed to delete message");
    }
  },
};
