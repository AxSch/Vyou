import answerActions from './actions';


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

const answersDispatchers = {
  setAnswerDispatcher,
  resetAllAnswersDispatcher,
  validateAnswersDispatcher
};

export default answersDispatchers;

