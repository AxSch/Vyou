import loginActions from '../redux/actions';
import userService from '../../../services/userService';
import history from '../../../helpers/history';


const loginDispatcher = (email, password) => {
  return dispatch => {
    dispatch(loginActions.loginRequest(email, password));
    userService.login(email, password)
      .then(
        user => {
          dispatch(loginActions.loginSuccess(user));
          history.push('/');
        },
        error => {
          dispatch(loginActions.loginFailure(error.toString()));
        }
      );
  };
}

const logoutDispatcher = () => {
  userService.logout();
  return {
    type: loginActions.LOGOUT,
  }
}

export const loginDispatchers = {
  loginDispatcher,
  logoutDispatcher,
};
