import { useState } from "react";
import { chatService } from "../services/chatService";

export const useChat = () => {
  const [chatState, setChatState] = useState({
    onlineUsers: {},
    chatList: [],
    chats: [],
    messages: [],
    group: [],
    activeChatId: null,
    loading: false,
    error: null,
  });
  console.log("mmmggg",chatState.group );
  

  const updateState = (updates) => {
    setChatState((prev) => ({ ...prev, ...updates }));
  };
  const getUserChatList = async () => {
    updateState({ loading: true });
    try {
      const userChatList = await chatService.getUserChatList();
      updateState({ chatList: userChatList, error: null });
    } catch (error) {
      updateState({ error: error.message });
    } finally {
      updateState({ loading: false });
    }
  };

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
  const createGroup = async (groupName, selectedUser) => {
    // recevierId;
    updateState({ loading: true });
    try {
      const groupuser = await chatService.createGroup(groupName, selectedUser);
      localStorage.setItem("groupName", JSON.stringify(groupuser))

      console.log("groupusers", groupuser);

      updateState({ group: [...chatState.group, groupuser] });
    } catch (error) {
      updateState({ error: error.message });
    } finally {
      updateState({ loading: false });
    }
  };

  return {
    ...chatState,
    getUserChatList,
    fetchOnlineUsers,
    createChat,
    fetchMessages,
    sendMessage,
    deleteMessage,
    createGroup,
  };
};
