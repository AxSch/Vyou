import actionTypes from './actionTypes';
import _ from 'lodash';

const intitialState = {
  registration: {},
  error: null
}

const registrationReducer = (state=intitialState, action) => {
  switch(action.type){
    case actionTypes.REQUEST_QUESTIONS:
      return {
        ...state,
      }
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        registration: {
          email: action.payload.email,
          statusCode: action.payload.statusCode
        }
      }
    case actionTypes.FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export default registrationReducer;
