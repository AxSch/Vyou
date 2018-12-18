import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserScores from './UserScores';
import { withRouter } from 'react-router-dom';
import calculatedScoreDispatchers from '../redux/dispatchers';

const mapStateToProps = (state, ownProps) => ({
    profile: state.profile.userId,
    personalityScore: state.userScores.personalityScore,
    energyScore: state.userScores.energyScore
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        energyScore: calculatedScoreDispatchers.getENScoreDispatcher,
        personalityScore: calculatedScoreDispatchers.getPSScoreDispatcher,
    }, dispatch)
);

const UserScoresContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(UserScores));

export default UserScoresContainer;
