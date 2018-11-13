import questionRequestActions from './actions';
import questionsService from '../../../services/questionsService';

const requestQuestionsDispatcher = () => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
    questionsService.personalityQuestions()
      .then(
        questions => {
          dispatch(questionRequestActions.questionRequestSuccess(questions));
        },
        error => {
          dispatch(questionRequestActions.questionRequestFailure(error));
        }
      );
  }
}

export default requestQuestionsDispatcher;
