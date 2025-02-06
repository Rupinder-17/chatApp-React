import { useState } from "react";
import { fetchData } from "../Component/FetchFun";

export const useRegisterApi = () => {
  const [register, setregister] = useState();
  const url = "https://api.freeapi.app/api/v1/users/register";
  console.log("resg",register);

  const registerApi = async (data) => {
    try {
      const result = await fetchData(url, "POST", {}, data);
      if (result.success) {
        setregister(result);
        console.log(result);

        return true;
      } else {
        console.log("Registration failed:", result);
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  return [register, registerApi];
};
//   try {
//     const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         email: data.email,
//         password: data.password,
//         role: data.role,
//         username: data.username,
//       }),
//     });
//     const result = await res.json();

//     if(result.success === false) {
//       alert("Register failed")
//       // throw new Error("Register failed")
//       return false
//     }

//     setregister(result);
//     return true;
//   } catch (e) {
//     console.error(e);
//   }
// };
