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
      if (!resposne.ok) {
        alert("Login failed");
        throw new Error("Login failed");
      }
      const data = await resposne.json();

      setuserLogin(data);
      localStorage.setItem("token", data.data.accessToken); // store token in
      localStorage.setItem("loggedInUser", JSON.stringify(data.data.user)); // store user id in
    } catch (e) {
      console.log(e);
    }
  };
  return [userLogin, userLoginApi];
};
