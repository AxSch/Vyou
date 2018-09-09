import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NotFound from './components/ErrorPages';
import './App.css';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route component={} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
