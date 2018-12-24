import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }
    componentDidMount(){
        const { userLogin } = this.props;
        if (userLogin.loggedIn) {
            this.redirectToTarget();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userLogin.loggedIn !== this.props.userLogin.loggedIn) {
            if (this.props.userLogin.loggedIn) {
                this.redirectToTarget();
            }
        }
    }

    redirectToTarget = () => {
        this.props.history.push('/accounts/profile/');
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ 
            [name]: value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const { loginAction } = this.props;
        
        if (email && password) {
            loginAction(email, password);
        }
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <h2>Login</h2>
                <form name="form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} name="email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} name="password" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button onClick={(e) => this.handleSubmit(e)}>Login</button>
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;
