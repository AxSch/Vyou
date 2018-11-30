import actionTypes from './actionTypes';
import _ from 'lodash';

const initialState = {
  answeredPersonality: {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {}
  },
  isValid: null
}

const updateAnswer = (state, userAnswer, categoryId) => {
  let newState = _.clone(state);
  newState.answeredPersonality = {
    ...newState,
    ...newState.answeredPersonality,
    [categoryId]: {
      ...newState.answeredPersonality[categoryId],
      [userAnswer.questionId]: {
        ...newState.answeredPersonality[categoryId][userAnswer.questionId],
        question: userAnswer.question,
        questionSign: userAnswer.questionSign,
        value: userAnswer.answerValue,
        lastUpdated: userAnswer.lastUpdated,

      }
    }
  }
  return newState;
}

const validateAnswers = (state, answers, questions, categoryId) => {
  let newState = _.clone(state);
  if (newState.answeredPersonality[categoryId]) {
    const answersArr = Object.values(newState.answeredPersonality[categoryId]);
    if (answersArr.length === questions.length) {
      newState.isValid = true;
    } else {
      newState.isValid = false;
    }
  }
  return newState;
}


const answersReducer = (state=initialState, action) => {
  switch(action.type){
    case actionTypes.SET_ANSWER:
      const setAnswerState = updateAnswer(state, action.payload.userAnswer, action.payload.categoryId);
      return setAnswerState;
    case actionTypes.SAVE_ANSWERS:
      return {
        ...state
      }
    case actionTypes.VALIDATE_ANSWERS:
      const validAnswerState = validateAnswers(state, action.payload.answers, action.payload.questions, action.payload.categoryId);
      return validAnswerState;
    case actionTypes.RESET_ANSWERS:
      return initialState;
    default:
      return state;
  }
}

export default answersReducer;
