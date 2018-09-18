import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginContainer from '../Login/LoginContainer';
import ProfileContainer from '../AccountPage/Profile/ProfileContainer';
import HomePage from '../HomePage/HomePage';
import NotFound from '../ErrorPages/NotFound';


const routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/accounts/login' component={LoginContainer}/>
      <Route path='/accounts/profile' component={ProfileContainer}/>
      <Route component={NotFound} />
  </Switch>
  );
}

export {
  routes
};
