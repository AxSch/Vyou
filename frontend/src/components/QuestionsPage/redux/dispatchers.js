import questionRequestActions from './actions';
import questionsService from '../../../services/questionsService';

const requestPSQuestionsDispatcher = () => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
    questionsService.personalityQuestions()
      .then(
        response => {
          dispatch(questionRequestActions.questionRequestSuccess(response.data));
        },
        error => {
          dispatch(questionRequestActions.questionRequestFailure(error.data));
        }
      );
  }
}

const requestELQuestionsDispatcher = () => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
    questionsService.energyLevelQuestions()
      .then(
        response => {
          dispatch(questionRequestActions.questionRequestSuccess(response.data));
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
