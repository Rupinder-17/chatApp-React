import  { useState } from 'react'

export const useGetMessage = () => {
    const [message , setMessage] = useState();
    const UserToken = JSON.parse(localStorage.getItem("token"))
    const chatId = localStorage.getItem("userId");
    console.log("users",chatId);
    
    
    const mesaggeApi = async()=>{
        try{
            const res = await fetch(
              `https://api.freeapi.app/api/v1/chat-app/chats/c/${chatId}`,
              {
                method: "POST",
                headers: {
                  accept: "application/json",
                  "content-type": "application/json",
                  Authorization: `Bearer ${UserToken.data.accessToken}`,
                },
              }
            );
            if(!res.ok){
                alert("Failed to get message");
                throw new Error("Failed to get message");
            }
            const data = await res.json();
            localStorage.setItem("message", JSON.stringify(data));
            setMessage(data);
        }catch(e){
            console.log(e);
        }
    }
    return [message, mesaggeApi];
}
