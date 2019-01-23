import actionTypes from './actionTypes';
import _ from 'lodash';

const intitialState = {
}

const receiveScore = (state) => {
  let newState = _.clone(state);
  console.log("Got score", arguments);
}

const scoreReducer = (state=intitialState, action) => {
  switch(action.type){
    case actionTypes.REQUEST_SCORE:
      return {
        ...state,
      }
    case actionTypes.FETCH_SCORE_SUCCESS:
      const newState = receiveScore(state, action.payload);
      return newState;
    case actionTypes.FETCH_SCORE_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export default scoreReducer;
