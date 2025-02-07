import React, { useEffect } from 'react'
import { useContextChat } from '../Hooks/useContext'

export const AllMessage = () => {
    const { state, getAllMessage } = useContextChat();
    const {allMessage} = state
    useEffect(()=>{
        getAllMessage()

    },[])
  return (
    <div>
        <h1>{allMessage}</h1>

    </div>
  )
}
