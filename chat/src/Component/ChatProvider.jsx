import { createContext, useState } from "react";
import { useRegisterApi } from "../Hooks/useRegister";
import { useLoginn } from "../Hooks/useLogin";
import { useOnlineuser } from "../Hooks/useOnlineuser";
import { useCreateChat } from "../Hooks/useCreateChat";
import { useSendMessage } from "../Hooks/useSendMessage";
import { useAllMessage } from "../Hooks/useAllMessage";

export const ChatContent = createContext();

export const ChatProvider = ({ children }) => {
  
  const [register, registerApi] = useRegisterApi();
  const  [userLogin, userLoginApi] = useLoginn();
  const [onlineuser, onlineuserApi] = useOnlineuser();
  const [message, createChat] = useCreateChat();
  const [sendMessageChat, sendMessage] = useSendMessage();
  const [allMessage, getAllMessage] = useAllMessage()
  const isUserLogin = localStorage.getItem("token");
  // console.log("allmsg", allMessage);
  

  const [currentPage, setCurrentPage] = useState(isUserLogin ? "chat" : "register");

  
  const chatDisplay = {
    state: {currentPage, register,userLogin, onlineuser, message, sendMessageChat, allMessage},
    registerApi,
    userLoginApi,
    setCurrentPage,
    onlineuserApi,
    createChat,
    sendMessage,
    getAllMessage,
  };

  return (
    <ChatContent.Provider value={chatDisplay}>{children}</ChatContent.Provider>
  );
};
