import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './components/ErrorPages/NotFound';
import appStore from './store/store';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/accounts/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
