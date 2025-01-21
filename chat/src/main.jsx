import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { OnlineUser } from './components/OnlineUser'

const Appp = () => {
  const value = localStorage.getItem("status");
  console.log("status",value);
  switch(value){
    case "login":
      return <Login/>
    case "onlineUser":
      return <OnlineUser/>
    default:
      return <Register/>
  }
};
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appp/>
    {/* <Register/> */}
    {/* <Login/> */}
    {/* <OnlineUser/> */}
  </StrictMode>,
)

