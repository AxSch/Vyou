import { actionTypes } from './actionTypes';


const loginRequest = (email,password) => ({
  type: actionTypes.REQUEST_LOGIN,
});

const loginSuccess = (email,password,) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: {
    email
  },
});

const loginFailure = (email, error) => ({
  type: actionTypes.LOGIN_FAILURE,
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
