import  { useState } from 'react'

export const useSendMessage = () => {
    const [sendmessagee, setSendMessage] = useState()
    const UserToken = JSON.parse(localStorage.getItem("token"));
     const chatId = localStorage.getItem("message");
     
     
    
     

    const sendMessage = async (message)=>{
      console.log("mes",message);
      
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
                body: JSON.stringify({content: message }),
              }
            );
            if(!res.ok){
                alert("there is an error")
                throw new Error("there is an error")
            }
            const data = await res.json()
            console.log("sendmsg", data);
            
            setSendMessage(data)

        }
        catch(e){
            console.error(e)
        }
    }
    return [sendmessagee, sendMessage]
}
