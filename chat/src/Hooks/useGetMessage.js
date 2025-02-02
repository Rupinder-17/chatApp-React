import React, { useState } from 'react'

export const useGetMessage = () => {
    const [message , setMessage] = useState();
    const UserToken = JSON.parse(localStorage.getItem("token"))
    const mesaggeApi = async()=>{
        try{
            const res = await fetch("https://api.freeapi.app/api/v1/chat-app/messages/{chatId}",{
                method: "GET",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                    Authorization: `Bearer ${UserToken.data.accessToken}`,
                },
            })
            if(!res.ok){
                alert("Failed to get message");
                throw new Error("Failed to get message");
            }
            const data = await res.json();
            setMessage(data);
        }catch(e){
            console.log(e);
        }
    }
    return [message, mesaggeApi];
}
