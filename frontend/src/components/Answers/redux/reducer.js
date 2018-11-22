import actionTypes from './actionTypes';

const initialState = {
  answers: []
}


const answersReducer = (state=initialState, action) => {
  switch(action.type){
    case actionTypes.SET_ANSWER:
      return {
        ...state
      }
    case actionTypes.SAVE_ANSWERS:
      return {
        ...state
      }
    case actionTypes.RESET_ANSWERS:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default answersReducer;
