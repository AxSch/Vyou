import actionTypes from "./actionTypes";

const initialState = {
  userID: '',
  userEmail: '',
  loggingIn:  false,
  loggedIn: false,
  loggedOut: true,
  error: null,
}

const loginReducer = (state=initialState, action) => {
  switch(action.type){
      case actionTypes.LOGIN_REQUEST:
        return {
          loggingIn: true,
        }
      case actionTypes.LOGIN_SUCCESS:
        return {
          loggedIn: true,
          loggedOut: false,
          userID: action.userID,
          userEmail: action.email, 
        }
      case actionTypes.LOGIN_FAILURE:
        return {
          error: action.error,
        }
      case actionTypes.LOGGED_OUT:
        return {
          loggedOut: true,
        }
    default:
      return state;
  }
}

export {
  initialState,
  loginReducer
}