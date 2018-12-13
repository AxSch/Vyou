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

const logOut = () => ({
  type: actionTypes.LOG_OUT
});

const loginActions = {
  loginRequest,
  loginSuccess,
  loginFailure,
  logOut
}

export default loginActions;
