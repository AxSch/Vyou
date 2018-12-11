import questionRequestActions from './actions';
import registrationService from '../../../services/registrationService';

const requestRegistrationDispatcher = (email, password1, password2) => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
    registrationService.registerUser(email, password1, password2)
      .then(
        response => {
          dispatch(questionRequestActions.questionRequestSuccess(response.data, category));
        },
        error => {
          dispatch(questionRequestActions.questionRequestFailure(error.data));
        }
      );
  }
}

const registrationDispatchers = {
  requestRegistrationDispatcher
}

export default registrationDispatchers;
