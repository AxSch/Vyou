import { Component } from 'react';
import { routes } from './components/Routes/Routes';
import './App.css';

class App extends Component {
  render() {
    return (
          routes()
        );
  }
}

export default App;
