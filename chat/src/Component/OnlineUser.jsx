// import React from 'react'
import { useContextChat } from '../Hooks/useContext'

export const OnlineUser = () => {
    const {state} = useContextChat()
    console.log("online", state);
    const {onlineUser}= state;
    
  return (
    <div>
        <h1>onlineuser</h1>
        {
            onlineUser && onlineUser.data.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                </div>
            ))
        }



    </div>
  )
}
