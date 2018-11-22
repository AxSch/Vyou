import actionTypes from './actionTypes';

const setAnswer = (answer) => ({
  type: actionTypes.SET_ANSWER,
  payload: {
    answer
  }
});

const answerActions = {
  setAnswer
};

export default answerActions;
