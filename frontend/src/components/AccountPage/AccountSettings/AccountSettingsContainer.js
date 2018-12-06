import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import AccountSettings from './AccountSettings';
import profileDispatchers from '../redux/dispatchers';

const mapStateToProps = (state, ownProps) => ({
    userEmail: state.login.userEmail
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        createProfile: profileDispatchers.getProfileDispatcher
    }, dispatch)
);

const AccountSettingsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountSettings));

export default AccountSettingsContainer;
