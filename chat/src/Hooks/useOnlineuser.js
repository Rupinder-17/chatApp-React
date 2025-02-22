import { useState } from "react";

export const useOnlineuser = () => {
  const [onlineuser, setOnlineuser] = useState();
  const UserToken = localStorage.getItem("token");

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
            Authorization: `Bearer ${UserToken}`,
          },
        }
      );
      const data = await res.json();
      localStorage.setItem("onlineuser", JSON.stringify(data));
      console.log("dataa", data);

      setOnlineuser(data);
    } catch (e) {
      console.log(e);
    }
  };
  return [onlineuser, onlineuserApi];
};
