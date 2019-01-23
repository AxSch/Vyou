import actionTypes from './actionTypes';

const calculatedScoreRequest = () => ({
  type: actionTypes.REQUEST_PROFILE
});

const calculatedScoreRequestSuccess = (profile) => ({
  type: actionTypes.FETCH_PROFILE_SUCCESS,
  payload: {
    profile
  }
});

const calculatedScoreRequestFailure = (error) => ({
  type: actionTypes.FETCH_PROFILE_FAILURE,
  payload: {
    error
  }
});

const calculatedScoreRequestActions = {
  calculatedScoreRequest,
  calculatedScoreRequestSuccess,
  calculatedScoreRequestFailure
};

export default calculatedScoreRequestActions;
