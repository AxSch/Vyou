import actionTypes from './actionTypes';
import { Reducer, Action } from 'redux';

interface QuestionAction extends Action {
  payload: {
    questions: Array<Questions>,
    error: string | null,
    
  }
}

interface QuestionFields {
  question: String,
  subcategory: String,
  category: String,
}

interface Questions {
  id: Number,
  fields: QuestionFields,
}

interface QuestionsState {
  questions: Array<Questions>,
}
const intitialState: QuestionsState = {
  questions: [],
}


const questionsReducer: Reducer<QuestionsState> = (state: QuestionsState = intitialState, action: QuestionAction) => {
  switch(action.type){
    case actionTypes.REQUEST_QUESTIONS:
      return {
        ...state,
      }
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload.questions,
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
