import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock_user_service = {
  registration: ({ user }) => {
    const mock = new MockAdapter(axios);
    mock.onPost("/api/users").reply(200, user);
    return axios.post("/api/users");
  },
};

export default mock_user_service;
