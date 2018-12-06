import actionTypes from "./actionTypes";

const initialState = {
  userEmail: '',
  loggingIn:  false,
  loggedIn: false,
  loggedOut: true,
  error: null,
  token: null,
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
        return {
          ...state,
          loggedIn: true,
          loggedOut: false,
          token: action.payload.token.key, 
        }
      case actionTypes.LOGIN_FAILURE:
        return {
          error: action.payload.error,
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