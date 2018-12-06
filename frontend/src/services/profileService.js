import request from "axios";

const getUsers = () => {
  return request
  .get("/api/v1/users/")
}

const getUserProfile = () => {
  return request
  .get("/api/v1/profiles/")
}

const profileService = {
  getUsers,
  getUserProfile
}
export default profileService;
