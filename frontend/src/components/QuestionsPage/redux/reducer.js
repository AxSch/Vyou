import actionTypes from './actionTypes';
import _ from 'lodash';

const intitialState = {
  personalityQuestions: [],
  energyFlowQuestions: [],
}

const receiveQuestions = (state, questions, category) => {
  let newState = _.clone(state);
  switch(category) {
    case 'PS':
      newState = {
        ...newState,
        personalityQuestions: questions,
      }
      return newState;
    case 'EL':
      newState = {
        ...newState,
        energyLevelQuestions: questions
      }
      return newState;
    case 'EF':
      newState = {
        ...newState,
        energyFlowQuestions: questions
      }
      return newState;
    case 'EM':
      newState = {
        ...newState,
        energyMappingQuestions: questions
      }
      return newState;
    default:
      return state;
  }
}

const questionsReducer = (state=intitialState, action) => {
  switch(action.type){
    case actionTypes.REQUEST_QUESTIONS:
      return {
        ...state,
      }
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      const newState = receiveQuestions(state, action.payload.questions, action.payload.category);
      return newState;
      // return {
      //   ...state,
      //   personalityQuestions: action.payload.questions,
      //   error: null
      // }
    case actionTypes.FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export default questionsReducer;
