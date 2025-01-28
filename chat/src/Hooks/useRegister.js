import { useState } from "react";

export const useRegisterApi = () => {
  const [register, setregister] = useState();
  console.log(register);

  const registerApi = async (data) => {
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          role: data.role,
          username: data.username,
        }),
      });

      const result = await res.json();
      setregister(result);
    } catch (e) {
      console.error(e);
    }
  };

  return [register, registerApi];
};
