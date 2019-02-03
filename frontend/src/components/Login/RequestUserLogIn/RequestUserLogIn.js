import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class RequestUserLogIn extends Component {
    render() {
        return (
            <Fragment>
                <h2>Sorry...</h2>
                <p>But it seems that you're not logged-in to the platform.</p>
                <p>If you have an account, please sign-in here <Link to="/accounts/login/">Sign in</Link></p>
                <p>But if you don't have an account, feel free to register here <Link to="/register/">Register</Link></p>
            </Fragment>
        );
    }
}

export default RequestUserLogIn;
