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

const answerActions = {
  setAnswer,
  resetAllAnswers,
  validateAnswers
};

export default answerActions;
