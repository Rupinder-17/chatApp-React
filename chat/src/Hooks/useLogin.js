import React, { useState } from "react";

export const useLogin = () => {
  const [userLogin, setuserLogin] = useState();
  const loginApi = async () => {
    try {
      const resposne = await fetch(
        "https://api.freeapi.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: '{"password":"test@123","username":"doejohn"}',
        }
      );
      const data = await resposne.json();
      setuserLogin(data);
    } catch (e) {
      console.log(e);
    }
  };
};
