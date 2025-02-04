import { useState } from "react";

export const useSendMessage = () => {
  const [sendMessageChat, setSendMessage] = useState();
  const UserToken = localStorage.getItem("token");
  const userChatId = localStorage.getItem("userChatId");
  // console.log("usersId", userChatId);
  // console.log("sendmsg", sendMessageChat);
  

  const sendMessage = async (message) => {
    // console.log("mes", message);

    try {
      const res = await fetch(
        `https://api.freeapi.app/api/v1/chat-app/messages/${userChatId}`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${UserToken}`,
          },
          body: JSON.stringify({ content: message }),
        }
      );
      if (!res.ok) {
        alert("there is an error");
        throw new Error("there is an error");
      }
      const data = await res.json();
      // console.log("sendmsg", data);
      localStorage.setItem("sendMessage", data.data.content);

      setSendMessage(data);
    } catch (e) {
      console.error(e);
    }
  };
  return [sendMessageChat, sendMessage];
};
