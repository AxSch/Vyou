import actionTypes from "./actionTypes";
import _ from 'lodash';

const initialStateProfile = {
  personalityScore: null,
  energyScore: null,
  error: null
}

const updateScores = (state, score, subject) => {
  let newState = _.clone(state);
  switch (subject) {
    case "PERSONALITY":
      newState.personalityScore = score;
      return newState;
    case "ENERGY":
      newState.energyScore = score;
      return newState;
    default:
      return state;
  }
}

const scoresReducer = (state=initialStateProfile, action) => {
  let newState = _.clone(state);
  switch(action.type){
      case actionTypes.FETCH_SCORE:
        return newState;
      case actionTypes.FETCH_SCORE_SUCCESS:
        const updatedScoreState = updateScores(newState, action.payload.score, action.payload.subject);
        return updatedScoreState;
      case actionTypes.FETCH_SCORE_FAILURE:
        newState.error = action.payload.error;
        return newState;
    default:
      return state;
  }
}

export default scoresReducer;
