import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isLoggedIn: true,
    };
  }

  handleLogout(e) {
    const { logout } = this.props;
    this.setState(() => {
      return {
        isLoggedIn: false
      }
    }, () => {});
    logout();
  }

  renderLoggoutMsg(logoutMsg, isLoggedIn) {
    if (isLoggedIn === false && logoutMsg !== undefined) {
      return <p>{logoutMsg.detail}</p>
    }
    return null;
  }
  
  render() {
    const { logoutMsg, userLoggedIn } = this.props;
    const { isLoggedIn } = this.state;
    return (
      <div>
        <ul>
          {!userLoggedIn ? <li><Link to="/accounts/login">Login</Link></li> : null}
          <li><Link to="/accounts/profile">Profile</Link></li>
          <li><Link to="/questions">Questions</Link></li>
          {!userLoggedIn ? <li><Link to="/register">Register</Link></li> : null}
          {userLoggedIn ? <li><Link onClick={(e) => this.handleLogout(e)} to="/">Logout</Link></li> : null}
          {this.renderLoggoutMsg(logoutMsg, isLoggedIn)}
        </ul>
      </div>
    );
  }

}

export default NavBar;

