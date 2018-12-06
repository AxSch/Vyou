import actionTypes from "./actionTypes";
import _ from 'lodash';

const initialState = {
  hasProfile: null,
  profileCreated: null,
  profile: {},
  profileLastUpdated: null,
  error: null
}

const profileReducer = (state=initialState, action) => {
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

export {
  initialState,
  profileReducer
}