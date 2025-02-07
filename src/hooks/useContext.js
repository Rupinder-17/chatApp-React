import React from "react";
import { useContext } from "react";
import { ChatContent } from "../Component/ChatProvider";
// import { ChatContent } from "./ChatProvider";

export const useContextChat = () => {
  return useContext(ChatContent)
};
