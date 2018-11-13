import actionTypes from './actionTypes';
import { Action } from 'redux';

interface QuestionAction extends Action {
  payload: {
    questions: Array<Questions>,
    error?: string | null,
    
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


const questionRequest = (): Action => ({
  type: actionTypes.REQUEST_QUESTIONS
});

const questionRequestSuccess = (questions): QuestionAction => ({
  type: actionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: {
    questions
  }
});

const questionRequestFailure = (questions, error): QuestionAction => ({
  type: actionTypes.FETCH_QUESTIONS_FAILURE,
  payload: {
    questions,
    error
  }
});

const questionRequestActions = {
  questionRequest,
  questionRequestSuccess,
  questionRequestFailure
};

export default questionRequestActions;

