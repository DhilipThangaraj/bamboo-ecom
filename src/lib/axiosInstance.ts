// lib/axiosInstance.ts
import axios from "axios";

const appURL: string = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: appURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
