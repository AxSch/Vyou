import { connect } from 'react-redux';
import Answers from './Answers';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import answersDispatchers from './redux/dispatchers';

const mapStateToProps = (state, ownProps) => {
    return {
      personalityAnswers: state.answers,
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setAnswer: answersDispatchers.setAnswerDispatcher,
    }, dispatch)
);

const AnswersContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Answers));

export default AnswersContainer;
