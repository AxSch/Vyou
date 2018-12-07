import actionTypes from "./actionTypes";
import _ from 'lodash';

const initialStateProfile = {
  userId: null,
  hasProfile: null,
  profileCreated: null,
  userProfile: {},
  error: null
}

const profileReducer = (state=initialStateProfile, action) => {
  let newState = _.clone(state);
  switch(action.type){
      case actionTypes.GET_PROFILE:
        return {
          ...newState
        }
      case actionTypes.GET_PROFILE_SUCCESS:
        newState = {
          ...newState
        };
        newState.userProfile = action.payload.profile;
        newState.hasProfile = true
        newState.error = null;
        return newState;
      case actionTypes.GET_PROFILE_FAILURE:
        newState = {
          ...newState
        };
        newState.error = action.payload.error;
        newState.hasProfile = false
        return newState;
      case actionTypes.SET_USER_ID:
        return newState = {
          ...newState
        }
      case actionTypes.SET_USER_ID_SUCCESS:
        newState = {
          ...newState
        };
        newState.userId = action.payload.userId;
        newState.error = null;
        return newState;
      case actionTypes.SET_USER_ID_FAILURE:
        newState = {
          ...newState
        };
        newState.error = action.payload.error;
        return newState;
      case actionTypes.CREATE_PROFILE:
        return newState = {
          ...newState
        }
      case actionTypes.CREATE_PROFILE_SUCCESS:
        newState = {
          ...newState
        };
        newState.userProfile = action.payload.profile;
        newState.error = null;
        return newState;
      case actionTypes.CREATE_PROFILE_FAILURE:
      case actionTypes.UPDATE_PROFILE:
        return newState = {
          ...newState
        }
      case actionTypes.UPDATE_PROFILE_SUCCESS:
        newState = {
          ...newState
        };
        newState.userProfile = action.payload.profile;
        newState.error = null;
        return newState;
      case actionTypes.UPDATE_PROFILE_FAILURE:
        newState = {
          ...newState
        };
        newState.error = action.payload.error;
        return newState;
    default:
      return state;
  }
}

const initialStateUsers = {
  allUsers: {},
  error: null,
}

const usersReducer = (state=initialStateUsers, action) => {
  let newState = _.clone(state);
  switch(action.type){
      case actionTypes.GET_ALL_USERS:
        return {
          ...newState
        }
      case actionTypes.GET_ALL_USERS_SUCCESS:
        newState = {
          ...newState
        };
        newState.allUsers = action.payload.users;
        newState.error = null;
        return newState;
      case actionTypes.GET_ALL_USERS_FAILURE:
        newState = {
          ...newState
        }
        newState.error = action.payload.error;
        return newState;
    default:
      return state;
  }
}

export {
  profileReducer,
  usersReducer
}