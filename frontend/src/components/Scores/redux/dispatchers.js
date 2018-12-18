import answerActions from './actions';
import calculatedScoreService from '../../../services/calculatedScoreService';

const getPSScoreDispatcher = (profile) => {
  return dispatch => {
    dispatch(answerActions.fetchCalculatedScore());
    calculatedScoreService.personalityScore(profile)
    .then(
      response => {
        dispatch(answerActions.fetchCalculatedSuccess(response.data));
      },
      error => {
        dispatch(answerActions.fetchCalculatedAnswersFailure(error.data));
      }
    );
  }
}

const getENScoreDispatcher = (profile)  => {
    return dispatch => {
      dispatch(answerActions.fetchCalculatedScore());
      calculatedScoreService.energyScore(profile)
      .then(
        response => {
          dispatch(answerActions.fetchCalculatedSuccess(response.data));
        },
        error => {
          dispatch(answerActions.fetchCalculatedAnswersFailure(error.data));
        }
      );
    };
}


const calculatedScoreDispatchers = {
  getPSScoreDispatcher,
  getENScoreDispatcher
}

export default calculatedScoreDispatchers;
