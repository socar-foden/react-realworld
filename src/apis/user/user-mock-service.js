import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const user_mock_service = {};

user_mock_service.registration = ({ user }) => {
  const mock = new MockAdapter(axios);
  mock.onPost("/api/users").reply(200, user);
  return axios.post("/api/users");
};

export default user_mock_service;
