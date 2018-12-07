import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import AccountSettingsContainer from './AccountSettings/AccountSettingsContainer';
import ProfileContainer from './Profile/ProfileContainer';
class Profile extends PureComponent {
    constructor(props) {
        super(props);

        this.getUserId = this.getUserId.bind(this);
        this.checkProfileExists = this.checkProfileExists.bind(this);
        this.renderAccountSettings = this.renderAccountSettings.bind(this);
    }

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
    
    checkProfileExists(profile) {
        if (profile.hasProfile) {
            return <ProfileContainer />
        } else {
            return (
                <div>
                    <h3>Profile has been completed...</h3>
                    <div>
                        <p>Please fill out the information below:</p>
                        <AccountSettingsContainer />
                    </div>
                </div>
            );
        }
    }
    

    renderAccountSettings() {
        return (
            <ul>
                <li><Link to="/accounts/settings">account settings</Link></li>
            </ul>
        )
    }

    render() {
        const { userLoggedIn, profile} = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                {userLoggedIn ? this.renderAccountSettings() : null}
                {this.checkProfileExists(profile)}
            </div>
        );
    }

}

export default Profile;