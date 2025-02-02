// import React from 'react'
import { useEffect } from 'react';
import { useContextChat } from '../Hooks/useContext'

export const OnlineUser = () => {
    const { state, onlineuserApi } = useContextChat();
    console.log("online", state);
    const {onlineuser}= state;
    useEffect(()=>{
        onlineuserApi();
    },[])
  return (
    <div>
        <h1>onlineuser</h1>
        {
            onlineuser && onlineuser.data.map((item) => (
                <div key={item.id}>
                    <h1>{item.username}</h1>
                </div>
            ))
        }



    </div>
  )
}
