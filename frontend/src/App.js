import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './components/ErrorPages/NotFound';
import appStore from './store/store';
import LoginContainer from './components/Login/LoginContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/accounts/login" component={LoginContainer} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
