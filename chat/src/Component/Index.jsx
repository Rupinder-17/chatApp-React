import React from 'react'
import { useContextChat } from '../Hooks/useContext';

export const Index = () => {
    const {state, registerApi} = useContextChat()
    console.log("res",state);
    
  return (
    <div>

    </div>
  )
}
