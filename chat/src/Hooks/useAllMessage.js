import React from 'react'

export const useAllMessage = () => {
    const [allMessage, setAllMessage] = React.useState()
    const UserToken = JSON.parse(localStorage.getItem("token"));
    const chatId = localStorage.getItem("userId");

    const getAllMessage = async ()=>{
        try{
            const res = await fetch(
              `https://api.freeapi.app/api/v1/chat-app/messages/${chatId}`,
              {
                method: "GET",
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
            console.log("allmsg", data);
            
            setAllMessage(data)

        }
        catch(e){
            console.error(e)
        }
    }
    return [allMessage, getAllMessage]
}
