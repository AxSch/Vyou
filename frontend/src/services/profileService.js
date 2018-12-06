import request from "axios";

const getUserProfile = () => {
  return request
  .get("/api/v1/profiles/")
}

const profileService = {
  getUserProfile
}
export default profileService;
