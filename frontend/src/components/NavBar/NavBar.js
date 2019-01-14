import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        expanded: false
    };
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

    let navbarClass = "sidebar";
    if(this.state.expanded) {
      navbarClass += " expanded";
    }

    return (
      <div className={navbarClass}>
        <ul className="primary-actions">
          {!userLoggedIn ? <li><Link to="/accounts/login"><i className="fas fa-sign-in-alt"></i><span>Login</span></Link></li> : null}
          <li><Link to="/"><i className="fas fa-home"></i><span>Dashboard</span></Link></li>
          <li><Link to="/questions"><i className="fas fa-ellipsis-v"></i><span>Tasks</span></Link></li>
            {userLoggedIn && <li><Link to="/accounts/profile"><i className="far fa-id-card"></i><span>Profile</span></Link></li>}
          {!userLoggedIn ? <li><Link to="/register"><i className="far fa-id-card"></i><span>Register</span></Link></li> : null}
          {this.renderLoggoutMsg(logoutMsg, isLoggedIn)}
        </ul>

        <ul className="secondary-actions">
            <li><a href="#" className="toggle-expand" onClick={() => this.setState({expanded: !this.state.expanded})}>&gt;&gt;</a></li>
        </ul>
      </div>
    );
  }

}

export default NavBar;

