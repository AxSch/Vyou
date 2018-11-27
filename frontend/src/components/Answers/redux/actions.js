import actionTypes from './actionTypes';

const setAnswer = (categoryId, answerValue, questionId, question, questionSign) => ({
  type: actionTypes.SET_ANSWER,
  payload: {
    categoryId: categoryId,
    userAnswer: {
      question: question,
      questionId: questionId,
      answerValue: answerValue,
      questionSign: questionSign
    }
  }
});

const validateAnswers = () => ({
  type: actionTypes.VALIDATE_ANSWERS
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
