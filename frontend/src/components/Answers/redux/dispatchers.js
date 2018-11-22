import answerActions from './actions';


const setAnswerDispatcher = (answer) => {
  return dispatch => {
    dispatch(answerActions.setAnswer(answer));
  }
}

export default setAnswerDispatcher;
