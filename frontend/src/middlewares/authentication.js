import axios from "axios";
import { userActions } from "../reducers/user/userReducer";

const authentication = () => (next) => (action) => {
  const { type, payload } = action;
  if (type === userActions.AUTHENTICATION_SUCCESS.type) {
    const {
      user: { token },
    } = payload;
    localStorage.setItem("jwt", token);
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Token ${token}`;
      return config;
    }, Promise.reject);
  }
  return next(action);
};

export default authentication;
