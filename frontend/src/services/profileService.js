import request from "axios";

const getUsers = () => {
  return request
  .get("/api/v1/users/")
}

const getUserProfile = (userId) => {
  return request
  .get(`/api/v1/profiles/${userId}`)
}

const profileService = {
  getUsers,
  getUserProfile
}
export default profileService;
