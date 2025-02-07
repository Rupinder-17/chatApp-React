import { createContext, useState } from "react";
import { useRegisterApi } from "../Hooks/useRegister";
import { useLoginn } from "../Hooks/useLogin";
import { useOnlineuser } from "../Hooks/useOnlineuser";
import { useCreateChat } from "../Hooks/useCreateChat";
import { useSendMessage } from "../Hooks/useSendMessage";
import { useAllMessage } from "../Hooks/useAllMessage";
import { useDelete } from "../Hooks/useDelete";

export const ChatContent = createContext();

export const ChatProvider = ({ children }) => {
  const [register, registerApi] = useRegisterApi();
  const [userLogin, userLoginApi] = useLoginn();
  const [onlineuser, onlineuserApi] = useOnlineuser();
  const [message, createChat] = useCreateChat();
  const [sendMessageChat, sendMessage] = useSendMessage();
  const [allMessage, getAllMessage] = useAllMessage();
  const [deleteMessage, deleteMessageApi] = useDelete();
  const isUserLogin = localStorage.getItem("token");

  const [currentPage, setCurrentPage] = useState(
    isUserLogin ? "chat" : "register"
  );

  const chatDisplay = {
    state: {
      currentPage,
      register,
      userLogin,
      onlineuser,
      message,
      sendMessageChat,
      allMessage,
      deleteMessage,
    },
    registerApi,
    userLoginApi,
    setCurrentPage,
    onlineuserApi,
    createChat,
    sendMessage,
    getAllMessage,
    deleteMessageApi,
  };

  return (
    <ChatContent.Provider value={chatDisplay}>{children}</ChatContent.Provider>
  );
};
