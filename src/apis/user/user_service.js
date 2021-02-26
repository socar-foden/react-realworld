import axios from "axios";

const user_mock_service = {
  registration: ({ user }) => axios.post("/api/users", { user }),
};

export default user_mock_service;
