import profileActions from './actions';
import profileService from '../../../services/profileService';

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
  getProfileDispatcher
}

export default profileDispatchers;
