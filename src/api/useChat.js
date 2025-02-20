import { useState } from "react";
import { chatService } from "../services/chatService";

export const useChat = () => {
  const [chatState, setChatState] = useState({
    onlineUsers: {},
    chatList: [],
    chats: [],
    messages: [],
    group: [],
    groupChat: [],
    activeChatId: null,
    loading: false,
    error: null,
  });

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
    updateState({ loading: true });
    try {
      const groupuser = await chatService.createGroup(groupName, selectedUser);
      localStorage.setItem("groupName", JSON.stringify(groupuser));
      localStorage.setItem("groupId", groupuser.data._id)

      updateState({ group: [...chatState.group, groupuser] });
    } catch (error) {
      updateState({ error: error.message });
    } finally {
      updateState({ loading: false });
    }
  };

  const createGroupChat = async (chatId)=>{
    updateState({loading:true})
    try{
      const groupChat = await chatService.createGroupChat(chatId)
      localStorage.setItem("groupchat", JSON.stringify(groupChat))
      console.log("groupchate", groupChat);
      
      updateState({groupChat: [...chatState.groupChat, groupChat ]})
    }catch(e){
      updateState({error: e.message});
    }
    finally{
      updateState({loading:false})
    }
  }

  return {
    ...chatState,
    getUserChatList,
    fetchOnlineUsers,
    createChat,
    fetchMessages,
    sendMessage,
    deleteMessage,
    createGroup,
    createGroupChat,
  };
};
