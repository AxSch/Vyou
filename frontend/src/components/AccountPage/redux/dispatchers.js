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

const getProfileDispatcher = () => {
  return dispatch => {
    dispatch(profileActions.getUserProfile());
    profileService.getUserProfile()
      .then(
        profile => {
          dispatch(profileActions.getUserProfileSuccess(profile));
        },
        error => {
          dispatch(profileActions.getUserProfileFailure(error.toString()));
        }
      );
  };
}

const profileDispatchers = {
  getAllUsersDispatcher,
  getProfileDispatcher
}

export default profileDispatchers;