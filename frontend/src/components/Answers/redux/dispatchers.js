import answerActions from './actions';
import answersService from '../../../services/answersService';

const setAnswerDispatcher = (categoryId, answerValue, questionId, question, questionSign, lastUpdated, questionType, subCategoryId) => {
  return dispatch => {
    dispatch(answerActions.setAnswer(categoryId, Number(answerValue), questionId, question, questionSign, lastUpdated, questionType, subCategoryId));
  }
}

const validateAnswersDispatcher = (answers, questions, categoryId, questionType, subCategoryId) => {
  return dispatch => {
    dispatch(answerActions.validateAnswers(answers, questions, categoryId, questionType, subCategoryId))
  }
}

const resetAllAnswersDispatcher = () => {
  return dispatch => {
    dispatch(answerActions.resetAllAnswers());
  }
}

const fetchCompletedPersonalityAnswersDispatcher = (userId) => {
  return dispatch => {
    dispatch(answerActions.fetchCompletedAnswers);
    answersService.fetchCompPersonalityAnswers(userId)
    .then(
      response => {
        dispatch(answerActions.fetchCompletedAnswersSuccess(response.data));
      },
      error => {
        dispatch(answerActions.fetchCompletedAnswersFailure(error.data));
      }
    );
  }
}


const answersDispatchers = {
  setAnswerDispatcher,
  resetAllAnswersDispatcher,
  validateAnswersDispatcher,
  fetchCompletedPersonalityAnswersDispatcher
};

export default answersDispatchers;

