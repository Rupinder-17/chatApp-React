import { createContext, useState } from "react";
import { useRegisterApi } from "../Hooks/useRegister";
import { useLoginn } from "../Hooks/useLogin";
import { useOnlineuser } from "../Hooks/useOnlineuser";
import { useGetMessage } from "../Hooks/useGetMessage";
import { useSendMessage } from "../Hooks/useSendMessage";
import { useAllMessage } from "../Hooks/useAllMessage";

export const ChatContent = createContext();

export const ChatProvider = ({ children }) => {
  
  const [register, registerApi] = useRegisterApi();
  const  [userLogin, userLoginApi] = useLoginn();
  const [onlineuser, onlineuserApi] = useOnlineuser();
  const [message, mesaggeApi] = useGetMessage();
  const [sendmessagee, sendMessage] = useSendMessage()
  const [allMessage, getAllMessage] = useAllMessage()
  console.log("onlineuser", onlineuser);
  const isUserLogin = localStorage.getItem("token");

  const [currentPage, setCurrentPage] = useState(isUserLogin ? "chat" : "register");

  console.log("state", register);
  
  const chatDisplay = {
    state: {currentPage, register,userLogin, onlineuser, message, sendmessagee, allMessage},
    registerApi,
    userLoginApi,
    setCurrentPage,
    onlineuserApi,
    mesaggeApi,
    sendMessage,
    getAllMessage,
  };

  return (
    <ChatContent.Provider value={chatDisplay}>{children}</ChatContent.Provider>
  );
};
