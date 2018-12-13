import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomePage from './HomePage';
import { withRouter } from 'react-router-dom';
import { logoutDispatcher } from '../Login/redux/dispatchers';

const mapStateToProps = (state, ownProps) => ({
    userEmail: state.login.userEmail,
    userLoggedIn: state.login.loggedIn,
    users: state.users.allUsers,
    profile: state.profile
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        logout: logoutDispatcher
    }, dispatch)
);

const HomePageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));

export default HomePageContainer;