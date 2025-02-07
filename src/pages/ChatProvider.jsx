import { createContext, useState } from "react";
import { useRegisterApi } from "../hooks/useRegisterApi";
import { useLoginn } from "../hooks/useLogin";
import { useOnlineuser } from "../hooks/useOnlineuser";
import { useCreateChat } from "../hooks/useCreateChat";
import { useSendMessage } from "../hooks/useSendMessage";
import { useAllMessage } from "../hooks/useAllMessage";
import { useDelete } from "../hooks/useDelete";

export const ChatContent = createContext();

export const ChatProvider = ({ children }) => {
  
  const [register, registerApi] = useRegisterApi();
  const  [userLogin, userLoginApi] = useLoginn();
  const [onlineuser, onlineuserApi] = useOnlineuser();
  const [message, createChat] = useCreateChat();
  const [sendMessageChat, sendMessage] = useSendMessage();
  const [allMessage, getAllMessage] = useAllMessage()
  const [deleteMessage, deleteMessageApi] = useDelete();
  const isUserLogin = localStorage.getItem("accessToken");

  // console.log("allmsg", allMessage);
  

  const [currentPage, setCurrentPage] = useState(isUserLogin ? "chat" : "register");

  
  const chatDisplay = {
    state: {currentPage, register,userLogin, onlineuser, message, sendMessageChat, allMessage, deleteMessage},
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
