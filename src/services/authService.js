import { apiClient } from '../api/apiClient';
import { ENDPOINTS } from '../constants/endpoints';

export const authService = {
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

  async logout() {
    try {
      await apiClient.request(ENDPOINTS.AUTH.LOGOUT);
      localStorage.removeItem('token');
    } catch (error) {
      throw new Error(error.message || 'Logout failed');
    }
  }
}; 