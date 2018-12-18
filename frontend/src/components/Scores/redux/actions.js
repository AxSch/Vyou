import actionTypes from './actionTypes';

const fetchCalculatedScore = () => ({
  type: actionTypes.FETCH_SCORE
});

const fetchCalculatedSuccess = (score) => ({
  type: actionTypes.FETCH_SCORE_SUCCESS,
  payload: {
    score
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
