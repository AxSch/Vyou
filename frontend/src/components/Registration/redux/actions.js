import actionTypes from './actionTypes';

const registrationRequest = () => ({
  type: actionTypes.REGISTRATION_REQUEST
});

const registrationRequestSuccess = (statusCode, email, password, password2) => ({
  type: actionTypes.REGISTRATION_REQUEST_SUCCESS,
  payload: {
    statusCode,
    email,
    password,
    password2
  }
});

const registrationRequestFailure = (error) => ({
  type: actionTypes.REGISTRATION_REQUEST_FAILURE,
  payload: {
    error
  }
});

const registrationRequestActions = {
  registrationRequest,
  registrationRequestSuccess,
  registrationRequestFailure
};

export default registrationRequestActions;
