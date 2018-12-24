import loginActions from '../redux/actions';
import authService from '../../../services/authService';

const loginDispatcher = (email, password) => {
  return dispatch => {
    dispatch(loginActions.loginRequest(email, password));
    authService.login(email, password)
      .then(
        res => {
          dispatch(loginActions.loginSuccess(res));
        },
        error => {
          dispatch(loginActions.loginFailure(error.toString()));
        }
      );
  };
}

const logoutDispatcher = () => {
  return dispatch => {
    dispatch(loginActions.requestlogOut());
    authService.logout()
      .then(
        (res) => {
          dispatch(loginActions.logOut(res.data))
        }
      );
  };
}

export {
  loginDispatcher,
  logoutDispatcher,
};

