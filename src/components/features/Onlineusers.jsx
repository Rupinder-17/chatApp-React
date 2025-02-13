import React, { useEffect } from 'react'
import { useChat } from '../../api/useChat'
import { use } from 'react'

export const Onlineusers = () => {
  const { onlineUsers, loading, error, fetchOnlineUsers } = useChat()
  const {setcurrentpage} = usePage()
  console.log(onlineUsers);
  

  useEffect(() => {
    console.log("user fetch");
    
    
    fetchOnlineUsers()
  },[])

  return (
    <div>Onlineusers</div>
  )
}
