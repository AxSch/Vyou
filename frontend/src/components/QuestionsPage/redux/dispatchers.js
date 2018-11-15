import questionRequestActions from './actions';
import questionsService from '../../../services/questionsService';

const requestQuestionsDispatcher = () => {
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

export default requestQuestionsDispatcher;
