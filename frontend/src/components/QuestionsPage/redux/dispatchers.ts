import questionRequestActions from './actions';
// import questionsService from '../../../services/questionsService';

const requestQuestionsDispatcher = () => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
  }
}