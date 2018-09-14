import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

class LoginPage extends PureComponent {
    constructor(props) {
        super(props);
        // this.props.logoutDispatcher();

        this.state = {
            email: '',
            password: '', 
            submitted: '',
        };
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidUpdate(prevProps,prevState) {
    //     if (prevState.email ) {

    //     }
    // }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ 
            [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.setState({
            submitted: true,
        });
        if (email && password) {
            this.props.loginAction(email, password);
            console.log('hi');
        }
    }

    render() {
        const { email, password, submitted } = this.state;
        console.log('email', email);
        console.log('password', password);
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form">
                    <div>
                        <label htmlFor="username">Email</label>
                        <input type="text" className="form-control" value={email} name="email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" value={password} name="password" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;
