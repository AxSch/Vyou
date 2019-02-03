import React, { Component } from 'react';
import NavBarContainer from '../NavBar/NavBarContainer';

import Squiggles from '../VYou/Squiggles';

class HomePage extends Component {
  render() {

    return (
      <div className="homepage">
        <Squiggles />

        <div>
          <h1>Welcome</h1>
        </div>
      </div>
    );
  }

}

export default HomePage;
