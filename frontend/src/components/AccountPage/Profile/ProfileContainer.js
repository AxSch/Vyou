import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = (state, ownProps) => ({
    userEmail: state.login.userEmail,
    userLoggedIn: state.login.loggedIn,
});

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;