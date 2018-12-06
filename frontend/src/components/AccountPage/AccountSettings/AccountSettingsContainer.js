import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import AccountSettings from './AccountSettings';

const mapStateToProps = (state, ownProps) => ({
    userEmail: state.login.userEmail
});

const AccountSettingsContainer = withRouter(connect(mapStateToProps)(AccountSettings));

export default AccountSettingsContainer;
