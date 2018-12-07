import request from "axios";

const getUsers = () => {
  return request
  .get("/api/v1/users/")
}

const getUserProfile = (userId) => {
  return request
  .get(`/api/v1/profiles/${userId}`)
}

const createUserProfile = (userProfileData) => {
  return request
  .post(`/api/v1/profiles/`, {
    user: userProfileData.id,
    name: userProfileData.name,
    sex: userProfileData.sex,
    dob: userProfileData.dob,
    address_no: userProfileData.addressNo,
    address_street: userProfileData.addressStreet,
    address_city: userProfileData.addressCity,
    address_postcode: userProfileData.addressPostCode,
    address_country: userProfileData.addressCountry,
    job_title: userProfileData.jobTitle,
    job_industry: userProfileData.jobIndustry,
    bio: userProfileData.bio,
    education: userProfileData.education,
    user_img: userProfileData.userImg,
    facebook_profile: userProfileData.facebookProfile,
    linkedIn_profile: userProfileData.linkedInProfile,
    twitter_profile: userProfileData.twitterProfile,
    gitHub_profile: userProfileData.gitHubProfile,
    instagram_profile: userProfileData.instagramProfile,
  })
}

const updateUserProfile = (userId, userProfileData) => {
  return request
  .put(`/api/v1/profiles/${userId}/`, {
    user: userProfileData.id,
    name: userProfileData.name,
    sex: userProfileData.sex,
    dob: userProfileData.dob,
    address_no: userProfileData.addressNo,
    address_street: userProfileData.addressStreet,
    address_city: userProfileData.addressCity,
    address_postcode: userProfileData.addressPostCode,
    address_country: userProfileData.addressCountry,
    job_title: userProfileData.jobTitle,
    job_industry: userProfileData.jobIndustry,
    bio: userProfileData.bio,
    education: userProfileData.education,
    user_img: userProfileData.userImg,
    facebook_profile: userProfileData.facebookProfile,
    linkedIn_profile: userProfileData.linkedInProfile,
    twitter_profile: userProfileData.twitterProfile,
    gitHub_profile: userProfileData.gitHubProfile,
    instagram_profile: userProfileData.instagramProfile,
  })
}

const profileService = {
  getUsers,
  getUserProfile,
  createUserProfile,
  updateUserProfile
}
export default profileService;
