import answerActions from './actions';


const setAnswerDispatcher = (categoryId, answerValue, questionId, question, questionSign, lastUpdated) => {
  return dispatch => {
    dispatch(answerActions.setAnswer(categoryId, Number(answerValue), questionId, question, questionSign, lastUpdated));
  }
}

const resetAllAnswersDispatcher = () => {
  return dispatch => {
    dispatch(answerActions.resetAllAnswers());
  }
}

const answersDispatchers = {
  setAnswerDispatcher,
  resetAllAnswersDispatcher
};

export default answersDispatchers;

