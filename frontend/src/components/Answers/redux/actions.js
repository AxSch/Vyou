import actionTypes from './actionTypes';

const setAnswer = (categoryId, answerValue, questionId, question, questionSign, lastUpdated, questionType, subCategoryId) => ({
  type: actionTypes.SET_ANSWER,
  payload: {
    categoryId: categoryId,
    questionType: questionType,
    subCategoryId: subCategoryId,
    userAnswer: {
      question: question,
      questionId: questionId,
      answerValue: answerValue,
      questionSign: questionSign,
      lastUpdated: lastUpdated
    },
  }
});

const validateAnswers = (answers, questions, categoryId, questionType, subCategoryId) => ({
  type: actionTypes.VALIDATE_ANSWERS,
  payload: {
    answers,
    questions,
    categoryId,
    questionType,
    subCategoryId
  }
});

const resetAllAnswers = () => ({
  type: actionTypes.RESET_ANSWERS
});

const fetchCompletedAnswers = () => ({
  type: actionTypes.FETCH_COMPLETED_ANSWERS
});

const fetchCompletedAnswersSuccess = () => ({
  type: actionTypes.FETCH_COMPLETED_ANSWERS_SUCCESS
});

const fetchCompletedAnswersFailure = () => ({
  type: actionTypes.FETCH_COMPLETED_ANSWERS_FAILURE
});

const answerActions = {
  setAnswer,
  resetAllAnswers,
  validateAnswers,
  fetchCompletedAnswers,
  fetchCompletedAnswersSuccess,
  fetchCompletedAnswersFailure
};

export default answerActions;
