import answerActions from './actions';


const setAnswerDispatcher = (categoryId, answerValue, questionId, question, questionSign, lastUpdated) => {
  return dispatch => {
    dispatch(answerActions.setAnswer(categoryId, Number(answerValue), questionId, question, questionSign, lastUpdated));
  }
}

const validateAnswersDispatcher = (answers, questions, categoryId) => {
  return dispatch => {
    dispatch(answerActions.validateAnswers(answers, questions, categoryId))
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

