import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginContainer from '../Login/LoginContainer';
import ProfilePageContainer from '../AccountPage/ProfilePageContainer';
import AccountSettingsContainer from '../AccountPage/AccountSettings/AccountSettingsContainer';
import QuestionsPageIndexContainer from '../QuestionsPage/QuestionsPageIndexContainer';
import QuestionsPageContainer from '../QuestionsPage/QuestionsPageContainer';
import UserScoresContainer from '../Scores/UserScores/UserScoresContainer';
import NotFound from '../ErrorPages/NotFound';
import RegisterContainer from '../Registration/RegisterContainer';
import HomePageContainer from '../HomePage/HomePageContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderBarContainer from "../HeaderBar/HeaderBarContainer";
import NavBarContainer from "../NavBar/NavBarContainer";

const routes = () => {
  return (
    <React.Fragment>
      <HeaderBarContainer/>
      <NavBarContainer />

      <div className="main-container">
          <Switch>
              <Route exact path="/" component={HomePageContainer} />
              <Route path="/accounts/login/" component={LoginContainer}/>
              <Route path="/accounts/profile/" component={ProfilePageContainer}/>
              <Route path="/accounts/settings/" component={AccountSettingsContainer}/>
              <Route path="/register/" component={RegisterContainer}/>
              <Route exact path="/questions" component={QuestionsPageIndexContainer}/>
              <Route exact path="/questions/:questionId" component={QuestionsPageContainer}/>
              <Route path="/questions/:questionId/result" component={UserScoresContainer}/>
              <Route path="/profile" component={ProfileContainer}/>
              <Route component={NotFound} />
          </Switch>
      </div>
    </React.Fragment>
  );
}

export {
  routes
};
