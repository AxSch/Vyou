import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = (state, ownProps) => ({
    userID: state.login,
});

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;