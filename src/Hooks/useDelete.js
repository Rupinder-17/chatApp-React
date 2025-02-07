import React from "react";

export const useDelete = () => {
  const [deleteMessage, setDeleteMessage] = React.useState();

  const deleteMessageApi = async (messageId) => {
    const UserToken = localStorage.getItem("token");
    const userChatId = localStorage.getItem("userChatId");
    console.log("msdId", messageId);
    
    try {
      const res = await fetch(
        `https://api.freeapi.app/api/v1/chat-app/messages/${userChatId}/${messageId}`,
        {
          method: "DELETE",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${UserToken}`,
          },
        }
      );
      if (!res.ok) {
        alert("there is an error");
        throw new Error("there is an error");
      }
      const responseData = await res.json();
      setDeleteMessage(responseData);
    } catch (e) {
      console.error(e);
    }
  };
  return [deleteMessage, deleteMessageApi];
};
