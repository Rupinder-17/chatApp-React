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
    
      // if the response has a token, set the token in the local storage
      if (response.data?.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
      }

      if(response.data?.user){
        localStorage.setItem('user', JSON.stringify(response.data.user));
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
      console.log("response", response);
      
      return response.data;
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  },

  // logout function to logout the user
  async logout() {
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
    } catch (error) {
      throw new Error(error.message || 'Logout failed');
    }
  }
}; 