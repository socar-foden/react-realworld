import axios from "axios";

export const TOKEN_KEY = "realworld-jwt";

const axiosDefaultSetUp = () => {
  const token = localStorage.getItem(TOKEN_KEY);

  axios.defaults.baseURL =
    process.env.NODE_ENV === "development"
      ? "http://220.70.46.155:3000"
      : "http://220.70.46.155:3000";
  axios.defaults.headers.common["Authorization"] = `Token ${token}`;
};

export default axiosDefaultSetUp;
