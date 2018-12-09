import answerActions from './actions';
import answersService from '../../../services/answersService';

const setAnswerDispatcher = (categoryId, answerValue, questionId, question, questionSign, lastUpdated, questionType, subCategoryId, scaleFactor, categoryName) => {
  return dispatch => {
    dispatch(answerActions.setAnswer(categoryId, Number(answerValue), questionId, question, questionSign, lastUpdated, questionType, subCategoryId, scaleFactor, categoryName));
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

const sendPSAnswersDispatcher = (userId, answer) => {
  return dispatch => {
    dispatch(answerActions.sendAnswers);
    answersService.sendPersonalityAnswers(userId, answer)
    .then(
      response => {
        dispatch(answerActions.sendAnswersSuccess(response.data));
      },
      error => {
        dispatch(answerActions.sendAnswersFailure(error.data));
      }
    );
  }
}


const answersDispatchers = {
  setAnswerDispatcher,
  resetAllAnswersDispatcher,
  validateAnswersDispatcher,
  fetchCompPersonalityDispatcher,
  sendPSAnswersDispatcher
};

export default answersDispatchers;

