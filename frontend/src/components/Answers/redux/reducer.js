import actionTypes from './actionTypes';
import _ from 'lodash';

const initialState = {
  answered: {
    1: []
  },
}

const selectorTest = (state, userAnswer, categoryId) => {
  let newState = _.clone(state);
  if (newState.answered) {
    newState.answered = {
      ...newState.answered,
      [categoryId]: [...newState.answered[categoryId], userAnswer]
    };
  }

  return newState;
}

const answersReducer = (state=initialState, action) => {
  switch(action.type){
    case actionTypes.SET_ANSWER:
      return selectorTest(state, action.payload.userAnswer, action.payload.categoryId);
    case actionTypes.SAVE_ANSWERS:
      return {
        ...state
      }
    case actionTypes.VALIDATE_ANSWERS:
      return {
        ...state
      }
    case actionTypes.RESET_ANSWERS:
      return initialState;
    default:
      return state;
  }
}

export default answersReducer;
