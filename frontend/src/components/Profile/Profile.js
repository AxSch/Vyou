import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
        expanded: false
    };
  }

  render() {
    return <div>
    profile
    </div>
  }

}

export default Profile;
