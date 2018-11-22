import actionTypes from './actionTypes';

const intitialState = {
  personalityQuestions: [],
}


const questionsReducer = (state=intitialState, action) => {
  switch(action.type){
    case actionTypes.REQUEST_QUESTIONS:
      return {
        ...state,
      }
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        personalityQuestions: action.payload.questions,
        error: null
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

export default questionsReducer;
