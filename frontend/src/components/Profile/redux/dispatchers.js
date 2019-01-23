import calculatedScoreRequestActions from './actions';
import calculatedScoreService from '../../../services/calculatedScoreService';

const calculatedScoreDispatcher = (score) => {
  return dispatch => {
    dispatch(calculatedScoreService.calculatedScoreRequest);
    calculatedScoreService.personalityScore()
      .then(
        response => {
          dispatch(calculatedScoreRequestActions.calculatedScoreRequestSuccess(response.data));
        },
        error => {
          dispatch(calculatedScoreRequestActions.calculatedScoreRequestFailure(error.data));
        }
      );
  }
}

const calculatedScoreDispatchers = {
  calculatedScoreDispatcher
}

export default calculatedScoreDispatchers;
