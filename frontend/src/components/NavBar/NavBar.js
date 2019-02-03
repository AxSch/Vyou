import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        expanded: false,
        current: null
    };
  }

  renderLoggoutMsg(logoutMsg, isLoggedIn) {
    if (isLoggedIn === false && logoutMsg !== undefined) {
      return <p>{logoutMsg.detail}</p>
    }
    return null;
  }

  isCurrentItem(link) {
    return this.state.current === link ? 'is-current' : '';
  }

  render() {
    const { logoutMsg, userLoggedIn } = this.props;
    const { isLoggedIn } = this.state;

    let navbarClass = "sidebar";
    if(this.state.expanded) {
      navbarClass += " expanded";
    }

    return (
      <div className={navbarClass}>
        <ul className="toggle-menu">
          <li><a href="#expand" className="toggle-expand" onClick={() => this.setState({expanded: !this.state.expanded})}><i className="fas fa-bars"></i></a></li>
        </ul>

        <ul className="primary-actions">
          {!userLoggedIn ? <li><NavLink exact to="/accounts/login"><i className="fas fa-sign-in-alt"></i><span>Login</span></NavLink></li> : null}
          <li><NavLink exact to="/"><i className="fas fa-home"></i><span>Dashboard</span></NavLink></li>
          <li><NavLink to="/questions"><i className="fas fa-bars"></i><span>Tasks</span></NavLink></li>
            {userLoggedIn && <li><NavLink exact to="/accounts/profile"><i className="far fa-id-card"></i><span>Profile</span></NavLink></li>}
          {!userLoggedIn ? <li><NavLink exact to="/register"><i className="far fa-id-card"></i><span>Register</span></NavLink></li> : null}
          {this.renderLoggoutMsg(logoutMsg, isLoggedIn)}
        </ul>
      </div>
    );
  }

}

export default NavBar;
