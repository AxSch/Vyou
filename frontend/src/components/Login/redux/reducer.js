import actionTypes from "./actionTypes";

const initialState = {
  userEmail: '',
  loggingIn:  false,
  loggedIn: false,
  loggedOut: true,
  error: null,
  token: null,
  message: null
}

const loginReducer = (state=initialState, action) => {
  switch(action.type){
      case actionTypes.LOGIN_REQUEST:
        return {
          ...state,
          userEmail: action.payload.email,
          loggingIn: true,
        }
        case actionTypes.LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload.token.token);
        return {
          ...state,
          loggedIn: true,
          loggedOut: false,
          loggingIn: null,
          token: action.payload.token.token, 
          }
      case actionTypes.LOGIN_FAILURE:
        return {
          error: action.payload.error
        }
      case actionTypes.REQUEST_LOG_OUT:
        return {
          logoutRequest: true
        };
      case actionTypes.LOG_OUT:
        localStorage.removeItem("token");
        return {
          token: null,
          loggedOut: true,
          message: action.payload.message,
          userEmail: null,
          }
    default:
      return state;
  }
}

export {
  initialState,
  loginReducer
}