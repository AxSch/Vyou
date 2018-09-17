import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './components/ErrorPages/NotFound';
import LoginContainer from './components/Login/LoginContainer';
import ProfileContainer from './components/AccountPage/Profile/ProfileContainer';
import {appStore, persistedStore} from './store/store';
import HomePage from './components/HomePage/HomePage';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/accounts/login/" component={LoginContainer} />
              <Route exact path="/accounts/profile/" component={ProfileContainer} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
