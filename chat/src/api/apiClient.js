const BASE_URL = "https://api.freeapi.app/api/v1";

export const apiClient = {
  async request(endpoint, options = {}) {
    const token = localStorage.getItem("token");
    
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: Bearer ${token} }),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(${BASE_URL}${endpoint}, {
        ...defaultOptions,
        ...options,
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "API request failed");
      }
      
      return data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }
};