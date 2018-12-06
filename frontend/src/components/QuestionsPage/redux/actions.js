import actionTypes from './actionTypes';
import { Action } from 'redux';

// interface QuestionAction extends Action {
//   payload: {
//     questions?: Array<Questions>,
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


const questionRequest = () => ({
  type: actionTypes.REQUEST_QUESTIONS
});

const questionRequestSuccess = (questions, category) => ({
  type: actionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: {
    questions,
    category
  }
});

const questionRequestFailure = (error) => ({
  type: actionTypes.FETCH_QUESTIONS_FAILURE,
  payload: {
    error
  }
});

const questionRequestActions = {
  questionRequest,
  questionRequestSuccess,
  questionRequestFailure
};

export default questionRequestActions;

