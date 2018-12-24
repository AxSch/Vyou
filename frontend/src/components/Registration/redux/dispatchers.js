import registrationRequestActions from './actions';
import registrationService from '../../../services/registrationService';

const requestRegistrationDispatcher = (email, password1, password2) => {
  return dispatch => {
    dispatch(registrationRequestActions.registrationRequest);
    registrationService.registerUser(email, password1, password2)
      .then(
        response => {
          dispatch(registrationRequestActions.registrationRequestSuccess(response.data));
        },
        error => {
          dispatch(registrationRequestActions.registrationRequestFailure(error.data));
        }
      );
  }
}

const registrationDispatchers = {
  requestRegistrationDispatcher
}

export default registrationDispatchers;
