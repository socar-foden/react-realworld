import axios from "axios";
import { TOKEN_KEY } from "../axiosSetUp";
import { userActions } from "../reducers/user/userReducer";

const authentication = () => (next) => (action) => {
  const { type, payload } = action;
  if (type === userActions.AUTHENTICATION_SUCCESS.type) {
    const {
      user: { token },
    } = payload;
    
    localStorage.setItem(TOKEN_KEY, token);
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Token ${token}`;
      return config;
    }, Promise.reject);
  }
  return next(action);
};

export default authentication;
