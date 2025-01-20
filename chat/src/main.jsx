import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Register } from './components/Register'
import { Login } from './components/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register/>
    <Login/>
  </StrictMode>,
)
