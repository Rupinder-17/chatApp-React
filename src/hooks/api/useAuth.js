import { useState } from 'react';
import { authService } from '../../services/authService';

export const useAuth = () => {
  // state to store the user, loading, and error
  const [state, setState] = useState({
    user: null,
    loading: false,
    error: null
  });

  // login function to login the user
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

  // register function to register the user
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

  // logout function to logout the user
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

  // return the state, login, register, and logout functions
  return { ...state, login, register, logout };
};