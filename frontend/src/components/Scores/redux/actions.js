import actionTypes from './actionTypes';

const fetchCalculatedScore = () => ({
  type: actionTypes.FETCH_SCORE
});

const fetchCalculatedSuccess = (score, subject) => ({
  type: actionTypes.FETCH_SCORE_SUCCESS,
  payload: {
    score,
    subject
  }
});

const fetchCalculatedAnswersFailure = (error) => ({
  type: actionTypes.FETCH_SCORE_FAILURE,
  payload: {
    error
  }
});

const calculateAnswers ={
  fetchCalculatedScore,
  fetchCalculatedSuccess,
  fetchCalculatedAnswersFailure
}

export default calculateAnswers;
