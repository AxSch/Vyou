import actionTypes from './actionTypes';

const setAnswer = (categoryId, answerValue, questionId, question, questionSign, lastUpdated, questionType) => ({
  type: actionTypes.SET_ANSWER,
  payload: {
    categoryId: categoryId,
    questionType: questionType,
    userAnswer: {
      question: question,
      questionId: questionId,
      answerValue: answerValue,
      questionSign: questionSign,
      lastUpdated: lastUpdated
    },
  }
});

const validateAnswers = (answers, questions, categoryId, questionType) => ({
  type: actionTypes.VALIDATE_ANSWERS,
  payload: {
    answers,
    questions,
    categoryId,
    questionType
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
