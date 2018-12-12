import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomePage extends Component {
  // renderLogin = () => {
  //   return (
      
  //   );
  // }
  render() {
    return (
      <div>
        <div>
          <h1>NavBar</h1>
          <ul>
            <li><Link to="/accounts/login">Login</Link></li>
            <li><Link to="/accounts/profile">Profile</Link></li>
            <li><Link to="/questions">Questions</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li>Logout</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    );
  }

}

export default HomePage;
