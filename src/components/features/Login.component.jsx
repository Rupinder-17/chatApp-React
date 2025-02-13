import { useState } from 'react';
// import { useAuth } from '../../hooks/api/useAuth';
import { Button } from '../common/Button.component.jsx';
import { useAuth } from '../../api/useAuth.js';
import { usePage } from '../../context/PageContext.jsx';
import { PAGES } from '../../constants/pages.js';

export const Login = () => {
  const { login, loading, error } = useAuth();
  const { setCurrentPage } = usePage()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("hello");
    
    try {
      // console.log("rupi");
      
      await login(credentials);
      // console.log("bye");
      
      setCurrentPage(PAGES.ONLINEUSERS)
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
            name='username'
              type="text"
              id="username"
              value={credentials.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Username"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name='password' 
              type="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Password"
            />
          </div>
          <Button type="submit" loading={loading}>
            Login
          </Button>
        </form>
        <div className="mt-4 text-center">
          {error && <div className="text-red-500 text-sm border border-red-500 rounded-md p-2 bg-red-100">{error.message || 'An error occurred during login'}</div>}
        </div>
      </div>
    </div>
  );
};