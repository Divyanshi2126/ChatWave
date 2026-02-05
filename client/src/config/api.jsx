import axios from "axios";

const axiosInstance = axios.create({
  // Yahan direct URL likh dein
  baseURL: "http://localhost:4500/api", 
  withCredentials: true,
});

export default axiosInstance;