import React from "react";
import { useContext } from "react";
import { ChatContent } from "../pages/ChatProvider";
// import { ChatContent } from "./ChatProvider";

export const useContextChat = () => {
  return useContext(ChatContent)
};
