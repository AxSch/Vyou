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

export default requestPSQuestionsDispatcher;
