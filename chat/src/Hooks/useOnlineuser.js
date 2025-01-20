import React, { useState } from "react";

export const useOnlineuser = () => {
  const [onlineuser, setOnlineuser] = useState();
  const UserToken = JSON.parse(localStorage.getItem("token"));
  console.log("token", UserToken);
  console.log("line", onlineuser);
  

  const onlineuserApi = async () => {
    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/chat-app/chats/users",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${UserToken.data.accessToken} `,
          },
        }
      );
      const data = await res.json();
      setOnlineuser(data);
    } catch (e) {
      console.log(e);
    }
  };
  return [onlineuser, onlineuserApi];
};
