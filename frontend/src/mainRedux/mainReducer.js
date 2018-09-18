import { combineReducers } from 'redux';
import { loginReducer } from '../components/Login/redux/reducer';

const appReducer = combineReducers({
  login: loginReducer
})

export default appReducer;
