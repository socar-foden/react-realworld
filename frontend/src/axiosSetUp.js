import axios from "axios";

export const TOKEN_KEY = "realworld-jwt";

const axiosSetUp = () => {
  const token = localStorage.getItem(TOKEN_KEY);

  axios.defaults.baseURL =
    process.env.NODE_ENV === "development" ? "http://220.70.46.155:3000" : "http://220.70.46.155:3000"
  if (token) {
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Token ${token}`;
      return config;
    }, Promise.reject);
  }
};

export default axiosSetUp;
