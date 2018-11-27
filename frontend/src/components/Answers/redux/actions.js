import actionTypes from './actionTypes';

const setAnswer = (categoryId, answerValue, questionId, question, questionSign, lastUpdated) => ({
  type: actionTypes.SET_ANSWER,
  payload: {
    categoryId: categoryId,
    userAnswer: {
      question: question,
      questionId: questionId,
      answerValue: answerValue,
      questionSign: questionSign,
      lastUpdated: lastUpdated
    },
  }
});

const validateAnswers = (answers, questions) => ({
  type: actionTypes.VALIDATE_ANSWERS,
  payload: {
    answers,
    questions
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
