import React, { Component } from 'react';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password1: '',
        password2: '',
        isValid: null,
        hasAccount: null
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValidate = this.onValidate.bind(this);
    this.handleStateUpdate = this.handleStateUpdate.bind(this);
  }

  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { email  } = this.state;
  //   const { users } = this.props;

  //     // setUserId(userId);
  //     // console.log('Bye');
  // }

  handleStateUpdate(value, name) {
    this.setState(prevState => {
      return {
          [name]: value
      }
    }, () => {});
  }
  
  onInputChange(value, name) {
    switch(name) {
      case "email":
        this.handleStateUpdate(value, name);
        break;
      case "password1":
        this.handleStateUpdate(value, name);
        break;
      case "password2":
        this.handleStateUpdate(value, name);
        break;
      default:

    }
  }

  checkPassword(password, password2) {
    if (password.length <= 8) {
      alert("Please enter a password that is 8 characters or more!");
    }
  }
  
  onValidate() {
    const { password1, password2} = this.state;
    if (password1 !== password2) {
      this.checkPassword(password1, password2)
      alert("Passwords do not match!");
      this.handleStateUpdate('', "password1");
      this.handleStateUpdate('', "password2");
    } else {
      this.handleStateUpdate(true, "isValid");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.onValidate();
    const { register } = this.props;
    const { isValid, email, password1, password2 } = this.state;

    if (isValid) {
      register(email, password1, password2);
      this.redirectToTarget();
    } else {
      return null;
    }
  }

  redirectToTarget = () => {
    this.props.history.push('accounts/login/');
  }

  render() {
    const { hasAccount } = this.state;

    return (
      <div>
        <form>
            <label htmlFor={"email"}>email</label>
            <input required type="email" name="email" onChange={(e) => this.onInputChange(e.target.value, "email")}/>
            {hasAccount ? <span>Account already exists</span> : null}
            <label htmlFor={"passsword"}>password</label>
            <input required type="password" name="passsword" onChange={(e) => this.onInputChange(e.target.value, "password1")}/>
            <label htmlFor={"passwordConfirm"}>confirm password</label>
            <input required type="password" name="passwordConfirm" onChange={(e) => this.onInputChange(e.target.value, "password2")}/>
            {hasAccount ? <button disabled onClick={(e) => this.handleSubmit(e)}>Submit</button> : <button onClick={(e) => this.handleSubmit(e)}>Submit</button>}
        </form>
      </div>
    );
  }
}


export default RegisterPage;
