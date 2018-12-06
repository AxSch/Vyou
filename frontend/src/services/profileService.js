import request from "axios";

const getUsers = () => {
  return request
  .get("/api/v1/users/")
}

const getUserProfile = (userId) => {
  return request
  .get(`/api/v1/profiles/${userId}`)
}

const createUserProfile = (userId, userProfileData) => {
  return request
  .post(`/api/v1/profiles/${userId}`, {
    user: userProfileData.id,
    name: userProfileData.name,
    sex: userProfileData.sex,
    dob: userProfileData.dob,
    address: userProfileData.address,
    job_title: userProfileData.job_title,
    job_industry: userProfileData.job_industry,
    bio: userProfileData.bio,
    education: userProfileData.education,
    user_img: userProfileData.user_img,
    facebook_profile: userProfileData.facebook_profile,
    linkedIn_profile: userProfileData.linkedIn_profile,
    twitter_profile: userProfileData.twitter_profile,
    gitHub_profile: userProfileData.gitHub_profile,
    instagram_profile: userProfileData.instagram_profile,
  })
}

const profileService = {
  getUsers,
  getUserProfile,
  createUserProfile
}
export default profileService;
