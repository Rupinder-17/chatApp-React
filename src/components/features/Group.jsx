import React, { useEffect } from 'react'
import { useChat } from '../../api/useChat'

export const Group = () => {
    const {group,createGroup} = useChat()
    console.log("group", group);
    useEffect(()=>{
        createGroup()

    },[])
  return (
    <div>
        <div>

        </div>
    </div>
  )
}
