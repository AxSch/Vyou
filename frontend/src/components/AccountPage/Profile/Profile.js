import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
class Profile extends PureComponent {
    componentDidMount() {
        const { fetchAllUsers, userEmail, setUserId, fetchProfile } = this.props;
        fetchAllUsers();
        const userId = this.getUserId(userEmail);
        setUserId(userId);
        fetchProfile(userId);

    }
    getUserId(email) {
        const { users, userLoggedIn } = this.props;
        if (userLoggedIn) {
            const userObj = users.filter((user) => user.email === email);
            return userObj[0].id;
        }
        return null;
    }
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
    renderAccountSettings() {
        return (
            <ul>
                <li><Link to="/accounts/settings">account settings</Link></li>
            </ul>
        )
    }
    render() {
        const { userEmail, userLoggedIn } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                {userLoggedIn ? this.renderAccountSettings() : null}
                {this.checkUserLogged(userEmail)}
            </div>
        );
    }

}

export default Profile;