import { useState } from "react";
import { fetchData } from "../Component/FetchFun";

export const useLoginn = () => {
  const [userLogin, setuserLogin] = useState();
  const url = "https://api.freeapi.app/api/v1/users/login";
  const userLoginApi = async (values) => {
    try {
      const response = await fetchData(url, "POST", {}, values);
      const result = await response.json();
      localStorage.setItem("token", result.data.accessToken);
      localStorage.setItem("loggedInUser", JSON.stringify(result.data.user));

      if (result.success === false) {
        alert("Login failed");
        console.log("error msg", result);
        return false;
      } else {
        setuserLogin(result);
        console.log("Login true:", result);
        return true;
      }
      
    } catch (e) {
      console.log(e);
    }
  };
  return [userLogin, userLoginApi];
};
// try {
//   const resposne = await fetch(
//     "https://api.freeapi.app/api/v1/users/login",
//     {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         username: values.username,
//         password: values.password,
//       }),
//     }
//   );
//   if (!resposne.ok) {
//     alert("Login failed");
//     throw new Error("Login failed");
//   }
//   const data = await resposne.json();

//   setuserLogin(data);
//  ; // store user id in
// } catch (e) {
//   console.log(e);
// }
