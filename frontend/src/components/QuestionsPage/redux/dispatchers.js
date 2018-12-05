import questionRequestActions from './actions';
import questionsService from '../../../services/questionsService';

const requestPSQuestionsDispatcher = (category) => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
    questionsService.personalityQuestions()
      .then(
        response => {
          dispatch(questionRequestActions.questionRequestSuccess(response.data, category));
        },
        error => {
          dispatch(questionRequestActions.questionRequestFailure(error.data));
        }
      );
  }
}

const requestELQuestionsDispatcher = (category) => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
    questionsService.energyLevelQuestions()
      .then(
        response => {
          dispatch(questionRequestActions.questionRequestSuccess(response.data, category));
        },
        error => {
          dispatch(questionRequestActions.questionRequestFailure(error.data));
        }
      );
  }
}

const questionsDispatchers = {
  requestPSQuestionsDispatcher,
  requestELQuestionsDispatcher
}

export default questionsDispatchers;
