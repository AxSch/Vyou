import { loginActTypes } from './actionTypes';


const loginRequest = (email,password) => ({
  type: loginActTypes.REQUEST_LOGIN,
});

const loginSuccess = (email,password,) => ({
  type: loginActTypes.LOGIN_SUCCESS,
  payload: {
    email
  },
});

const loginFailure = (email, error) => ({
  type: loginActTypes.LOGIN_FAILURE,
  payload: {
    email,
    error
  }
});

export const loginActions = {
  loginRequest,
  loginSuccess,
  loginFailure
}
