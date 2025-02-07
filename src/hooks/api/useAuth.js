import { useState } from 'react';
import { authService } from '../../services/authService';

export const useAuth = () => {
  const [state, setState] = useState({
    user: null,
    loading: false,
    error: null
  });

  const login = async (credentials) => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      const user = await authService.login(credentials);
      setState({ user, loading: false, error: null });
      return user;
    } catch (error) {
      setState({ user: null, loading: false, error });
      throw error;
    }
  };

  const register = async (userData) => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      const response = await authService.register(userData);
      setState({ user: null, loading: false, error: null });
      return response;
    } catch (error) {
      setState({ user: null, loading: false, error });
      throw error;
    }
  };

  const logout = async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      await authService.logout();
      setState({ user: null, loading: false, error: null });
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error }));
      throw error;
    }
  };

  return { ...state, login, register, logout };
};