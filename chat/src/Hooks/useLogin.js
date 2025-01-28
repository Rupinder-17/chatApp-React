import { useState } from "react";

export const useLoginn = () => {
  const [userLogin, setuserLogin] = useState();
  const userLoginApi = async (values) => {
    try {
      const resposne = await fetch(
        "https://api.freeapi.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        }
      );
      const data = await resposne.json();
      console.log("data", data);

      setuserLogin(data);
      localStorage.setItem("token", JSON.stringify(data));
      localStorage.setItem("status", "onlineUser");
    } catch (e) {
      console.log(e);
    }
  };
  return [userLogin, userLoginApi];
};
