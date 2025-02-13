import { useState, } from "react";
import { chatService } from "../services/chatService";

export const useChat = () => {
  const [chatState, setChatState] = useState({
    onlineUsers: [],
    chats: [],
    messages: [],
    activeChatId: null,
    loading: false,
    error: null,
  });

  // Helper function to update state
  const updateState = (updates) => {
    setChatState((prev) => ({ ...prev, ...updates }));
  };

  // Fetch online users
  const fetchOnlineUsers = async () => {
    updateState({ loading: true });
    try {
      const users = await chatService.getOnlineUsers();
      updateState({ onlineUsers: users, error: null });
    } catch (err) {
      updateState({ error: err.message });
    } finally {
      updateState({ loading: false });
    }
  };

  // Create a new chat
  const createChat = async (userId) => {
    updateState({ loading: true });
    try {
      const newChat = await chatService.createChat(userId);
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

  // Fetch messages for a chat
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

  // Fetch online users when the hook is initialized
  // useEffect(() => {
  //   fetchOnlineUsers();
  // }, []);

  return {
    ...chatState,
    fetchOnlineUsers,
    createChat,
    fetchMessages,
    sendMessage,
    deleteMessage,
  };
};
