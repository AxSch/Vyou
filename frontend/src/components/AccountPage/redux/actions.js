import actionTypes from './actionTypes';

const getUserProfile = () => ({
  type: actionTypes.GET_PROFILE
});

const getUserProfileSuccess = (profile) => ({
  type: actionTypes.GET_PROFILE_SUCCESS,
  payload: {
    profile
  }
});

const getUserProfileError = (profile, error) => ({
  type: actionTypes.GET_PROFILE_SUCCESS,
  payload: {
    profile,
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

const createUserProfileError = (profile, error) => ({
  type: actionTypes.CREATE_PROFILE_ERROR,
  payload: {
    profile,
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

const updateUserProfileError = (profile, error) => ({
  type: actionTypes.UPDATE_PROFILE_ERROR,
  payload: {
    profile,
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

const deleteUserProfileError = (profile, error) => ({
  type: actionTypes.UPDATE_PROFILE_ERROR,
  payload: {
    profile,
    error
  }
});

const profileActions = {
  getUserProfile,
  getUserProfileSuccess,
  getUserProfileError,
  createUserProfile,
  createUserProfileSuccess,
  createUserProfileError,
  updateUserProfile,
  updateUserProfileSuccess,
  updateUserProfileError,
  deleteUserProfile,
  deleteUserProfileSuccess,
  deleteUserProfileError
};

export default profileActions;
