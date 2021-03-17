import axios from "axios";

const profile_service = {
  getProfile: ({ username }) => axios.get(`/api/profiles/${username}`),
};

export default profile_service;
