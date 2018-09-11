import { combineReducers } from 'redux';
import { loginReducer } from '../components/Login/redux/reducer';


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