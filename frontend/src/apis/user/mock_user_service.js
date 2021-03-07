/* eslint-disable no-unused-vars */
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mockUser = {
  email: "jake@jake.jake",
  token: "jwt.token.here",
  username: "jake",
  bio: "I work at statefarm",
  image: null,
};

const mock_user_service = {
  registration: ({ signUpInfo }) => {
    const mock = new MockAdapter(axios);
    mock.onPost("/api/users").reply(200, mockUser);
    return axios.post("/api/users");
  },
  authentication: ({ signInInfo }) => {
    const mock = new MockAdapter(axios);
    mock.onPost("/api/users/login").reply(200, mockUser);
    return axios.post("/api/users/login");
  },
  getCurrentUser: () => {
    const mock = new MockAdapter(axios);
    mock.onGet("/api/user").reply(200, {});
    return axios.get("/api/user");
  },
};

export default mock_user_service;
