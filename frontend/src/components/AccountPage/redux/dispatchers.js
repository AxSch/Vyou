import profileActions from './actions';
import profileService from '../../../services/profileService';


const getAllUsersDispatcher = () => {
  return dispatch => {
    dispatch(profileActions.getAllUsers());
    profileService.getUsers()
      .then(
        res => {
          dispatch(profileActions.getAllUsersSuccess(res.data));
        },
        error => {
          dispatch(profileActions.getAllUsersFailure(error.toString()));
        }
      );
  };
}

const setUserIdDispatcher = (userId) => {
  return dispatch => {
    try {
      dispatch(profileActions.setUserId())
      dispatch(profileActions.setUserIdSuccess(userId));
    } catch(error) {
      dispatch(profileActions.setUserIdFailure(error.toString()));
    }
  };
}

const getProfileDispatcher = (userId) => {
  return dispatch => {
    dispatch(profileActions.getUserProfile());
    profileService.getUserProfile()
      .then(
        res => {
          dispatch(profileActions.getUserProfileSuccess(res.data));
        },
        error => {
          dispatch(profileActions.getUserProfileFailure(error.toString()));
        }
      );
  };
}

const profileDispatchers = {
  getAllUsersDispatcher,
  getProfileDispatcher,
  setUserIdDispatcher
}

export default profileDispatchers;
