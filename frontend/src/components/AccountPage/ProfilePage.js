import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AccountSettingsContainer from './AccountSettings/AccountSettingsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import RequestUserLogIn from '../Login/RequestUserLogIn/RequestUserLogIn';
import NavBarContainer from '../NavBar/NavBarContainer';
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
            if (users.length > 0) {
                const userObj = users.filter((user) => user.email === email);
                if (userObj) {
                    return userObj[0].id;
                }
                else {
                    return 0;
                }
            }
        }
        return null;
    }

    checkProfileExists(profile) {
        if (profile.hasProfile) {
            return <ProfileContainer />
        } else {
            return (
                <div>
                    {!profile.hasProfile ? <h3>Profile has been not completed...</h3> : <h3>Account information</h3>}
                    <div>
                        {!profile.hasProfile ? <p>Please fill out the information below:</p> : <p>Remember to click save for any changes you make!</p>}
                        <AccountSettingsContainer />
                    </div>
                </div>
            );
        }
    }


    renderAccountSettings() {
        return (
            <ul>
                <li><Link to="/accounts/settings/">account settings</Link></li>
            </ul>
        )
    }

    checkUserLoggedIn(isLoggedIn, profile) {
        if(isLoggedIn) {
            return (
                <Fragment>
                    {isLoggedIn ? this.renderAccountSettings() : null}
                    {this.checkProfileExists(profile)}
                </Fragment>
            );
        } else {
            return <RequestUserLogIn />
        }
    }

    render() {
        const { userLoggedIn, profile} = this.props;
        return (
            <div className="col-sm-12">
                {this.checkUserLoggedIn(userLoggedIn, profile)}
            </div>
        );
    }

}

export default Profile;
