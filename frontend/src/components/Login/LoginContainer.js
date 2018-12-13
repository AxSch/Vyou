import { connect } from 'react-redux';
import LoginPage from './Login';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { loginDispatcher } from './redux/dispatchers';

const mapStateToProps = (state, ownProps) => {
    return {
        userLogin: state.login,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        loginAction: (email, password) => {
            dispatch(loginDispatcher(email, password))
        }
    }
} 

const LoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));

export default LoginContainer;

