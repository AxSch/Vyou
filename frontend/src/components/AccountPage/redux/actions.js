import actionTypes from './actionTypes';

const getAllUsers = () => ({
  type: actionTypes.GET_ALL_USERS
});

const getAllUsersSuccess = (users) => ({
  type: actionTypes.GET_ALL_USERS_SUCCESS,
  payload: {
    users
  }
});

const getAllUsersFailure = (error) => ({
  type: actionTypes.GET_ALL_USERS_FAILURE,
  payload: {
    error
  }
});

const getUserProfile = () => ({
  type: actionTypes.GET_PROFILE
});

const getUserProfileSuccess = (profile) => ({
  type: actionTypes.GET_PROFILE_SUCCESS,
  payload: {
    profile
  }
});

const getUserProfileFailure = (error) => ({
  type: actionTypes.GET_PROFILE_SUCCESS,
  payload: {
    error
  }
});

const createUserProfile = () => ({
  type: actionTypes.CREATE_PROFILE
});

const createUserProfileSuccess = (profile) => ({
  type: actionTypes.CREATE_PROFILE_SUCCESS,
  payload: {
    profile
  }
});

const createUserProfileFailure = (error) => ({
  type: actionTypes.CREATE_PROFILE_ERROR,
  payload: {
    error
  }
});

const updateUserProfile = () => ({
  type: actionTypes.UPDATE_PROFILE
});

const updateUserProfileSuccess = (profile) => ({
  type: actionTypes.UPDATE_PROFILE_SUCCESS,
  payload: {
    profile
  }
});

const updateUserProfileFailure = (error) => ({
  type: actionTypes.UPDATE_PROFILE_ERROR,
  payload: {
    error
  }
});

const deleteUserProfile = () => ({
  type: actionTypes.UPDATE_PROFILE
});

const deleteUserProfileSuccess = (profile) => ({
  type: actionTypes.UPDATE_PROFILE_SUCCESS,
  payload: {
    profile
  }
});

const deleteUserProfileFailure = (error) => ({
  type: actionTypes.UPDATE_PROFILE_ERROR,
  payload: {
    error
  }
});

const profileActions = {
  getAllUsers,
  getAllUsersSuccess,
  getAllUsersFailure,
  getUserProfile,
  getUserProfileSuccess,
  getUserProfileFailure,
  createUserProfile,
  createUserProfileSuccess,
  createUserProfileFailure,
  updateUserProfile,
  updateUserProfileSuccess,
  updateUserProfileFailure,
  deleteUserProfile,
  deleteUserProfileSuccess,
  deleteUserProfileFailure
};

export default profileActions;
