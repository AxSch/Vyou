import { connect } from 'react-redux';
import Login from './Login';
import loginDispatcher from './redux/dispatchers';

const mapStateToProps = (state, ownProps) => ({
    userID: state.login,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: loginDispatcher(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

