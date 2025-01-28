import { createContext } from "react";
import { useRegisterApi } from "../Hooks/useRegister";

export const ChatContent = createContext();
export const ChatProvider = ({ children }) => {
  const [register, registerApi] = useRegisterApi()
  console.log("state", register);
  const chatDisplay = {
    state: register,
    registerApi,
  };
  return (
    <ChatContent.Provider value={chatDisplay}>{children}</ChatContent.Provider>
  );
};
