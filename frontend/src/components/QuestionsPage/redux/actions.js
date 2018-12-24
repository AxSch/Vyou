import actionTypes from './actionTypes';


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

