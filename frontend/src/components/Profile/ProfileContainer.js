import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from './Profile';
import calculatedScoreDispatchers from './redux/dispatchers';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    calculatedScore: state.calculatedScore
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      calculatedScore: calculatedScoreDispatchers.calculatedScoreDispatcher,
    }, dispatch)
);

const ProfileContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));

export default ProfileContainer;
