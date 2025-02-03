import  { useState } from 'react'

export const useCreateChat = () => {
    const [message , setMessage] = useState();
    const UserToken = JSON.parse(localStorage.getItem("token"))
    const chatId = localStorage.getItem("userId");
    console.log("usersid for",chatId);
    
    
    const createChat = async()=>{
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
            
            localStorage.setItem("userChatId", data.data._id);
            setMessage(data);
        }catch(e){
            console.log(e);
        }
    }
    return [message, createChat];
}
