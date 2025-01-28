import React from 'react'
import { useContextChat } from '../Hooks/useContext'

export const OnlineUser = () => {
    const {onlineUser} = useContextChat()
    console.log("online", onlineUser);
    
  return (
    <div>OnlineUser</div>
  )
}
