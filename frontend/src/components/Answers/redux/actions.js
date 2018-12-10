import actionTypes from './actionTypes';

const setAnswer = (categoryId, answerValue, questionId, question, questionSign, lastUpdated, questionType, subCategoryId, scaleAlpha, categoryName) => ({
  type: actionTypes.SET_ANSWER,
  payload: {
    categoryId: categoryId,
    questionType: questionType,
    subCategoryId: subCategoryId,
    userAnswer: {
      question: question,
      categoryId: categoryId,
      categoryName: categoryName,
      questionId: questionId,
      answerValue: answerValue,
      questionSign: questionSign,
      scaleAlpha: scaleAlpha,
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

const fetchCompletedAnswersSuccess = (completedAnswers, categoryId, questionType) => ({
  type: actionTypes.FETCH_COMPLETED_ANSWERS_SUCCESS,
  payload: {
    completedAnswers,
    categoryId,
    questionType
  }
});

const fetchCompletedAnswersFailure = (error) => ({
  type: actionTypes.FETCH_COMPLETED_ANSWERS_FAILURE,
  payload: {
    error
  }
});

const sendAnswers = () => ({
  type: actionTypes.SEND_ANSWERS
});

const sendAnswersSuccess = (answer, statusCode) => ({
  type: actionTypes.SEND_ANSWERS_SUCCESS,
  payload: {
    answer,
    statusCode
  }
});

const sendAnswersFailure = (error) => ({
  type: actionTypes.SEND_ANSWERS_FAILURE,
  payload: {
    error
  }
});

const updateAnswers = () => ({
  type: actionTypes.UPDATE_ANSWERS
});

const updateAnswersSuccess = (answer, statusCode) => ({
  type: actionTypes.UPDATE_ANSWERS_SUCCESS,
  payload: {
    answer,
    statusCode
  }
});

const updateAnswersFailure = (error) => ({
  type: actionTypes.UPDATE_ANSWERS_FAILURE,
  payload: {
    error
  }
});

const answerActions = {
  setAnswer,
  resetAllAnswers,
  validateAnswers,
  fetchCompletedAnswers,
  fetchCompletedAnswersSuccess,
  fetchCompletedAnswersFailure,
  sendAnswers,
  sendAnswersSuccess,
  sendAnswersFailure,
  updateAnswers,
  updateAnswersSuccess,
  updateAnswersFailure
};

export default answerActions;
