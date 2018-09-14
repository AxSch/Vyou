import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';

class Profile extends PureComponent {
    checkUserLogged = (email) => {
        if (email !== null) {
            return (
                <div>
                    <h1>Welcome</h1>
                    <p>{email}</p>
                </div>
            );
        } return (
            <div>
                <h1>Unauthorized</h1>
                <p>Please enter the correct login details</p>
            </div>
        )
    }
    render() {
        const { userEmail } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                {this.checkUserLogged(userEmail)}
            </div>
        );
    }

}

export default Profile;