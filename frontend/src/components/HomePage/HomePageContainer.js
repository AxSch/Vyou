import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomePage from './HomePage';
import { withRouter } from 'react-router-dom';
import { logoutDispatcher } from '../Login/redux/dispatchers';

const mapStateToProps = (state, ownProps) => ({
    logoutMsg: state.login.message,
    userLoggedIn: state.login.loggedIn
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        logout: logoutDispatcher
    }, dispatch)
);

const HomePageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));

export default HomePageContainer;