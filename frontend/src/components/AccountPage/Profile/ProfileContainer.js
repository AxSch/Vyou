import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import profileDispatchers from '../redux/dispatchers';

const mapStateToProps = (state, ownProps) => ({
    userProfile: state.profile.userProfile
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchAllUsers: profileDispatchers.getAllUsersDispatcher
    }, dispatch)
);

const ProfileContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));

export default ProfileContainer;