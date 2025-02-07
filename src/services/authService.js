import { apiClient } from '../api/apiClient';
import { ENDPOINTS } from '../constants/endpoints';

export const authService = {
  // login function to login the user
  async login(credentials) {
    try {
      const response = await apiClient.request(ENDPOINTS.AUTH.LOGIN, {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      
      if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
      }
      
      return response.data;
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  },

  // register function to register the user
  async register(userData) {
    try {
      const response = await apiClient.request(ENDPOINTS.AUTH.REGISTER, {
        method: 'POST',
        body: JSON.stringify(userData)
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  },

  // logout function to logout the user
  async logout() {
    try {
      await apiClient.request(ENDPOINTS.AUTH.LOGOUT);
      localStorage.removeItem('token');
    } catch (error) {
      throw new Error(error.message || 'Logout failed');
    }
  }
}; 