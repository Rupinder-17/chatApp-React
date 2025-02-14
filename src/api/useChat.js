import { useState } from "react";
import { chatService } from "../services/chatService";

export const useChat = () => {
  const [chatState, setChatState] = useState({
    onlineUsers: {},
    chats: [],
    messages: [],
    activeChatId: null,
    loading: false,
    error: null,
  });
  console.log("chatsccc", chatState);

  const updateState = (updates) => {
    setChatState((prev) => ({ ...prev, ...updates }));
  };

  const fetchOnlineUsers = async () => {
    updateState({ loading: true });
    try {
      const users = await chatService.getOnlineUsers();
      console.log("usrs", users);
      updateState({ onlineUsers: users, error: null });
    } catch (err) {
      updateState({ error: err.message });
    } finally {
      updateState({ loading: false });
    }
  };

  // Create a new chat
  const createChat = async (userId) => {

    console.log("myid", userId);

    updateState({ loading: true });

    try {
      const newChat = await chatService.createChat(userId);
      console.log("newChat", newChat._id);
      localStorage.setItem("chatId", newChat._id);
      updateState({
        chats: [...chatState.chats, newChat],
        activeChatId: newChat.id,
        error: null,
      });
    } catch (err) {
      updateState({ error: err.message });
    } finally {
      updateState({ loading: false });
    }
  };

  const fetchMessages = async (chatId) => {
    updateState({ loading: true });
    try {
      const chatMessages = await chatService.getMessages(chatId);
      updateState({
        messages: chatMessages,
        activeChatId: chatId,
        error: null,
      });
    } catch (err) {
      updateState({ error: err.message });
    } finally {
      updateState({ loading: false });
    }
  };

  // Send a message
  const sendMessage = async (chatId, content) => {
    updateState({ loading: true });
    try {
      const newMessage = await chatService.sendMessage(chatId, content);
      console.log("newmess", newMessage);

      updateState({
        messages: [...chatState.messages, newMessage],
        error: null,
      });
    } catch (err) {
      updateState({ error: err.message });
    } finally {
      updateState({ loading: false });
    }
  };

  // Delete a message
  const deleteMessage = async (chatId, messageId) => {
    updateState({ loading: true });
    try {
      await chatService.deleteMessage(chatId, messageId);
      updateState({
        messages: chatState.messages.filter((msg) => msg.id !== messageId),
        error: null,
      });
    } catch (err) {
      updateState({ error: err.message });
    } finally {
      updateState({ loading: false });
    }
  };

  
  return {
    ...chatState,
    fetchOnlineUsers,
    createChat,
    fetchMessages,
    sendMessage,
    deleteMessage,
  };
};
