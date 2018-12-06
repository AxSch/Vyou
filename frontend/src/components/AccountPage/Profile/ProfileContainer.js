import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import profileDispatchers from '../redux/dispatchers';

const mapStateToProps = (state, ownProps) => ({
    userEmail: state.login.userEmail,
    userLoggedIn: state.login.loggedIn,
    users: state.users.allUsers,
    profile: state.profile
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchAllUsers: profileDispatchers.getAllUsersDispatcher,
        setUserId: profileDispatchers.setUserIdDispatcher,
        fetchProfile: profileDispatchers.getProfileDispatcher
    }, dispatch)
);

const ProfileContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));

export default ProfileContainer;