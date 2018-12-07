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

const fetchCompPersonalityDispatcher = (userId, categoryId, questionType) => {
  return dispatch => {
    dispatch(answerActions.fetchCompletedAnswers);
    answersService.fetchCompPersonalityAnswers(userId, categoryId)
    .then(
      response => {
        dispatch(answerActions.fetchCompletedAnswersSuccess(response.data, categoryId, questionType));
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
  fetchCompPersonalityDispatcher
};

export default answersDispatchers;

