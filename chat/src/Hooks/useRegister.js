import React, { useState } from 'react'

export const useRegister = () => {
  const [register, setRegister] = useState()

  const registerApi= async(values)=>{
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          role: values.role,
          username: values.username,
        }),
      });
      const data = await res.json();
      setRegister(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
}
  return [register, registerApi]
}
