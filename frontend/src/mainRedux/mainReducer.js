import { combineReducers } from 'redux';
import { loginReducer } from '../Login/redux/reducer';


const storeState = {
  login: loginReducer
}

const appReducer = (state) => combineReducers({
  loginReducer
})

export {
  appReducer,
  storeState,
}