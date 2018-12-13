import loginActions from '../redux/actions';
import authService from '../../../services/authService';
// import history from '../../../helpers/history';
// import

const loginDispatcher = (email, password) => {
  return dispatch => {
    dispatch(loginActions.loginRequest(email, password));
    authService.login(email, password)
      .then(
        user => {
          dispatch(loginActions.loginSuccess(user));
        },
        error => {
          dispatch(loginActions.loginFailure(error.toString()));
        }
      );
  };
}

const logoutDispatcher = () => {
  return dispatch => {
    dispatch(loginActions.logOut);
    authService.logout()
      .then(
        () => {
          dispatch(loginActions.logOut)
        }
      )
  }
}

export {
  loginDispatcher,
  logoutDispatcher,
};

// export default loginDispatchers;
