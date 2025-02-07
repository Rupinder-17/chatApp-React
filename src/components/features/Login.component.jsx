import { useState } from 'react';
import { useAuth } from '../../hooks/api/useAuth';
import { Button } from '../common/Button.component';

export const Login = () => {
  const { login, loading, error } = useAuth();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      // Handle successful login (e.g., redirect)
    } catch (error) {
      // Error is handled by the hook
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      <input
        type="text"
        value={credentials.username}
        onChange={e => setCredentials(prev => ({
          ...prev,
          username: e.target.value
        }))}
        className="w-full p-2 border rounded"
        placeholder="Username"
      />
      <input
        type="password"
        value={credentials.password}
        onChange={e => setCredentials(prev => ({
          ...prev,
          password: e.target.value
        }))}
        className="w-full p-2 border rounded"
        placeholder="Password"
      />
      <Button type="submit" loading={loading}>
        Login
      </Button>
    </form>
  );
};