import React from "react";
import { useContextChat } from "../Hooks/useContext";
import { Register } from "../components/Register";
import { Login } from "./Login";
import { OnlineUser } from "./OnlineUser";

export const Index = () => {
  const { state } = useContextChat();
  console.log("res", state);

  return (
    <div>
      {state.currentPage === "register" && <Register />}
      {state.currentPage === "login" && <Login />}
      {state.currentPage === "chat" && <OnlineUser />}
    </div>
  );
};
