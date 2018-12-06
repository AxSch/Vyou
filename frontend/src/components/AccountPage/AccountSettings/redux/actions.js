import actionTypes from './actionTypes';

const updateUserProfile = () => ({
  type: actionTypes.UPDATE_USER_PROFILE
});

const updateUserProfileSuccess = (profileData) => ({
  type: actionTypes.UPDATE_USER_PROFILE_SUCCESS,
  payload: {
    profileData
  }
});

const updateUserProfileFailure = (error) => ({
  type: actionTypes.UPDATE_USER_PROFILE_FAILURE,
  payload: {
    error
  }
});

const accountSettingsActions = {
  updateUserProfile,
  updateUserProfileSuccess,
  updateUserProfileFailure
};

export default accountSettingsActions;
