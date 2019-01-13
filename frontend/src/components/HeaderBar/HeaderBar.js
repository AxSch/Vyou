import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isLoggedIn: true,
        expanded: false
    };
  }
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a href="" className="navbar-brand">VYou</a>

        <ul className="navbar-nav">
          <li>
              <a href="">pjewd</a>
          </li>
        </ul>
      </nav>
    );
  }

}

export default HeaderBar;

