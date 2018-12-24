import actionTypes from './actionTypes';


const loginRequest = (email, password) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: {
    email,
  }
});

const loginSuccess = (token) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: {
    token
  },
});

const loginFailure = (email, error) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: {
    email,
    error
  }
});

const requestlogOut = () => ({
  type: actionTypes.REQUEST_LOG_OUT
});


const logOut = (message) => ({
  type: actionTypes.LOG_OUT,
  payload: {
    message
  }
});

const loginActions = {
  loginRequest,
  loginSuccess,
  loginFailure,
  requestlogOut,
  logOut
}

export default loginActions;
