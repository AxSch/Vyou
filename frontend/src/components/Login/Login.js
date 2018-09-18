import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router';
// import { connect } from 'react-redux';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        // this.props.logoutDispatcher();
        this.state = {
            email: '',
            password: '',
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userLogin.token !== this.props.userLogin.token) {
            this.redirectToTarget();
        }
    }

    redirectToTarget = () => {
        this.props.history.push('/accounts/profile');
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ 
            [name]: value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        if (email && password) {
            this.props.loginAction(email, password);
            // if (this.props.userLogin.loggedIn === true){
            //     this.setState({
            //         toProfile: true
            //     });
            //     console.log(this.state.toProfile);
            // }
            // return;
        }
        return;
    }

    render() {
        const { email, password} = this.state;
        return (
            <div>
                <h2>Login</h2>
                <form name="form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" value={email} name="email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} name="password" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>Login</button>
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;
