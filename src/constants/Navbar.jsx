// import React from 'react'
import { useNavigate } from 'react-router'

export const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
        <ul>
            <li onClick={()=> navigate("/")}>Register</li>
            <li onClick={()=> navigate("/login")}>login</li>
            <li onClick={()=> navigate("/Main")}>Mainn</li>
            <li onClick={()=> navigate("/chat")}>onlineUsers</li>
        </ul>
    </div>
  )
}
