import { combineReducers } from 'redux';
import { loginReducer } from '../components/Login/redux/reducer';
import { questionsReducer } from '../components/QuestionsPage/redux/reducer';

const appReducer = combineReducers({
  login: loginReducer,
  questions: questionsReducer,
})

export default appReducer;
