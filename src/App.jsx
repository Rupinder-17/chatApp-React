import { Route, Routes } from 'react-router'
import { Login } from './components/Login'
import { Register } from './components/Register'
import './App.css'
import { useAuth } from './hooks/api/useAuth'

function App() {
  const { user, logout } = useAuth()

  const confirmLogout = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      {user && (
        <div className="absolute top-10 right-10">
          <button onClick={() => confirmLogout()} className="bg-red-500 text-white px-4 py-2 rounded-md">Logout</button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
