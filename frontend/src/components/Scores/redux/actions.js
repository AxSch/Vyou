import actionTypes from './actionTypes';

const fetchCalculatedScore = () => ({
  type: actionTypes.FETCH_SCORE
});

const fetchCalculateSuccess = (score) => ({
  type: actionTypes.FETCH_SCORE_SUCCESS,
  payload: {
    score
  }
});

const fetchCalculateAnswersFailure = (error) => ({
  type: actionTypes.FETCH_SCORE_FAILURE,
  payload: {
    error
  }
});

const calculateAnswers ={
  fetchCalculatedScore,
  fetchCalculateSuccess,
  fetchCalculateAnswersFailure
}

export default calculateAnswers;
