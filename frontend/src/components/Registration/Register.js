import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password1: '',
        password2: '',
    };

    this.handlePageClick = this.handlePageClick.bind(this);
}
  render() {
    return (
      <div>
        <form>
            <label htmlFor={"email"}>House/apartment Number</label>
            <input type="email" name="email" onChange={(e) => this.onInputChange(e.target.value, "email")}/>
            <label htmlFor={"passsword"}>House/apartment Number</label>
            <input type="text" name="passsword" onChange={(e) => this.onInputChange(e.target.value, "password1")}/>
            <label htmlFor={"passwordConfirm"}>House/apartment Number</label>
            <input type="text" name="passwordConfirm" onChange={(e) => this.onInputChange(e.target.value, "password2")}/>
        </form>
      </div>
    );
  }
}


export default Register;
