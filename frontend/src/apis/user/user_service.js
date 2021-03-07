import axios from "axios";

const user_mock_service = {
  registration: ({ signUpInfo }) => axios.post("/api/users", { user: signUpInfo }),
  authentication: ({ SignInInfo }) => axios.post("/api/users/login", { user: SignInInfo }),
  getCurrentUser: () => axios.get("/api/user"),
};

export default user_mock_service;
