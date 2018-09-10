const initialState = {
  userID: '',
  userName: '',
}

const loginReducer = (state=initialState, action) => {
  switch(action.type){
    default:
    return state;
  }
}

export {
  initialState,
  loginReducer
}