import React, { useState } from 'react'

export const useSendMessage = () => {
    const [sendmessagee, setSendMessage] = useState()
    const UserToken = JSON.parse(localStorage.getItem("token"));
     const chatId = localStorage.getItem("userId");

    const sendMessage = async ()=>{
        try{
            const res = await fetch(
              `https://api.freeapi.app/api/v1/chat-app/messages/${chatId}`,
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
                alert("there is an error")
                throw new Error("there is an error")
            }
            const data = await res.json()
            setSendMessage(data)

        }
        catch(e){
            console.error(e)
        }
    }
    return [sendmessagee, sendMessage]
}
