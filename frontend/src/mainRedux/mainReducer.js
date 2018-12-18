import { combineReducers } from 'redux';
import { loginReducer } from '../components/Login/redux/reducer';
import questionsReducer from '../components/QuestionsPage/redux/reducer';
import answersReducer from '../components/Answers/redux/reducer';
import { profileReducer, usersReducer } from '../components/AccountPage/redux/reducer';
import registrationReducer from  '../components/Registration/redux/reducer';
import scoresReducer from  '../components/Scores/redux/reducer';


const appReducer = combineReducers({
  login: loginReducer,
  questions: questionsReducer,
  answers: answersReducer,
  users: usersReducer,
  profile: profileReducer,
  registration: registrationReducer,
  userScores: scoresReducer
})

export default appReducer;
