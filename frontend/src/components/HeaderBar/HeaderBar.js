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

    handleLogout(e) {
        const { logout } = this.props;
        this.setState(() => {
            return {
                isLoggedIn: false
            }
        }, () => {});
        logout();
    }
  
  render() {
    const { logoutMsg, userLoggedIn } = this.props;

    return (
      <nav className="navbar navbar-expand-lg">
        <a href="" className="navbar-brand">VYou</a>

        <ul className="navbar-nav">
          {userLoggedIn ? <li><Link onClick={(e) => this.handleLogout(e)} to="/"><i className="fas fa-sign-out-alt"></i><span>Logout</span></Link></li> : null}
        </ul>
      </nav>
    );
  }

}

export default HeaderBar;

