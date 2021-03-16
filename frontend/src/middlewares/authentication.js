import axios from "axios";
import { TOKEN_KEY } from "../axiosDefaultSetUp";
import { userActions } from "../reducers/user/userReducer";

let axiosInterceptor;

const setAxiosAuthorization = (val) =>
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = val;
    return config;
  }, Promise.reject);

const authentication = () => (next) => (action) => {
  const { type, payload } = action;
  if (type === userActions.AUTHENTICATION_SUCCESS.type) {
    const {
      user: { token },
    } = payload;

    localStorage.setItem(TOKEN_KEY, token);
    axiosInterceptor = setAxiosAuthorization(`Token ${token}`);
  } else if (type === userActions.SIGN_OUT.type) {
    localStorage.removeItem(TOKEN_KEY);
    axios.interceptors.request.eject(axiosInterceptor);
  }

  return next(action);
};

export default authentication;
