import { createContext, useState } from "react";
import { useRegisterApi } from "../Hooks/useRegister";
import { useLoginn } from "../Hooks/useLogin";
import { useOnlineuser } from "../Hooks/useOnlineuser";
import { useGetMessage } from "../Hooks/useGetMessage";

export const ChatContent = createContext();
export const ChatProvider = ({ children }) => {
  
  const [register, registerApi] = useRegisterApi();
  const  [userLogin, userLoginApi] = useLoginn();
  const [onlineuser, onlineuserApi] = useOnlineuser();
  const [message, mesaggeApi] = useGetMessage();
  console.log("onlineuser", onlineuser);
  

  const [currentPage, setCurrentPage] = useState("register");

  console.log("state", register);
  
  const chatDisplay = {
    state: {currentPage, register,userLogin, onlineuser, message},
    registerApi,
    userLoginApi,
    setCurrentPage,
    onlineuserApi,
    mesaggeApi,
  };

  return (
    <ChatContent.Provider value={chatDisplay}>{children}</ChatContent.Provider>
  );
};
