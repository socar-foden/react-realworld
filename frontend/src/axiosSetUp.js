import axios from "axios";

export const TOKEN_KEY = "realworld-jwt";

const axiosSetUp = () => {
  const token = localStorage.getItem(TOKEN_KEY);

  // TODO: 공유기 포트포워딩 해주고
  // TODO: development URL http://220.70.46.155:3000로 변경
  axios.defaults.baseURL =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "Production URL"
  if (token) {
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Token ${token}`;
      return config;
    }, Promise.reject);
  }
};

export default axiosSetUp;
