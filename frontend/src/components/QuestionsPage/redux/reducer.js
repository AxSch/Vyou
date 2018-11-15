import actionTypes from './actionTypes';
// import { Reducer } from 'redux';

// interface QuestionAction extends Action {
//   payload: {
//     questions: Array<Questions>,
//     error?: string | null,
    
//   }
// }

// interface QuestionFields {
//   question: String,
//   subcategory: String,
//   category: String,
// }

// interface Questions {
//   id: Number,
//   fields: QuestionFields,
// }

// interface QuestionsState {
//   questions: Array<Questions>,
// }

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
