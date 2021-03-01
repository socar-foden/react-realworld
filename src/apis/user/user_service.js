import axios from "axios";

const user_mock_service = {
  registration: ({ user }) => axios.post("/api/users", { user }),
  authentication: ({ user }) => axios.post("/api/users/login", { user }),
};

export default user_mock_service;
