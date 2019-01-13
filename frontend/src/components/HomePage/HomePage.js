import React, { Component } from 'react';
import NavBarContainer from '../NavBar/NavBarContainer';

class HomePage extends Component {
  
  render() {

    return (
      <div>
        <NavBarContainer />
        <div className="main-container">
          <div>
            <h1>Welcome</h1>
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;
