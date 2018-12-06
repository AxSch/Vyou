import actionTypes from "./actionTypes";
import _ from 'lodash';

const initialStateProfile = {
  hasProfile: null,
  profileCreated: null,
  profile: {},
  profileLastUpdated: null,
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
          newState.profile = action.payload.profile;
          newState.error = null;
          return newState;
      case actionTypes.GET_PROFILE_FAILURE:
        newState = {
          ...newState
        }
        newState.error = action.payload.error;
        return newState;
    default:
      return state;
  }
}

const initialStateUsers = {
  users: {},
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
        newState.users = action.payload.users;
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