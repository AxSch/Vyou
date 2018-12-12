import { connect } from 'react-redux';
import RegisterPage from './RegisterPage';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import registrationDispatchers from './redux/dispatchers';
import profileDispatchers from '../../components/AccountPage/redux/dispatchers';

const mapStateToProps = (state, ownProps) => {
    return {
      registration: state.register,
      users: state.users.allUsers
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        register: registrationDispatchers.requestRegistrationDispatcher,
        getAllUsers: profileDispatchers.getAllUsersDispatcher,
        // setUserId: profileDispatchers.setUserIdDispatcher,
        getUser: profileDispatchers.getUserDispatcher,
    }, dispatch)
);

const RegisterContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));

export default RegisterContainer;
