import { createContext, useState } from "react";
import { useRegisterApi } from "../Hooks/useRegister";
import { useLoginn } from "../Hooks/useLogin";

export const ChatContent = createContext();
export const ChatProvider = ({ children }) => {
  const [register, registerApi] = useRegisterApi();
  const  [userLogin, userLoginApi] = useLoginn();

  const [currentPage, setCurrentPage] = useState("register");

  console.log("state", register);
  
  const chatDisplay = {
    state: {currentPage, register,userLogin},
    registerApi,
    userLoginApi,
    setCurrentPage,
  };

  return (
    <ChatContent.Provider value={chatDisplay}>{children}</ChatContent.Provider>
  );
};
