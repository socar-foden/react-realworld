import axios from "axios";

const profile_service = {
  getProfile: ({ username }) => axios.get(`/api/profiles/${username}`),
  followUser: ({ username }) => axios.post(`/api/profiles/${username}/follow`),
  unfollowUser: ({ username }) =>
    axios.delete(`/api/profiles/${username}/follow`),
};

export default profile_service;
