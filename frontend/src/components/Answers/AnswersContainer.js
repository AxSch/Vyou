import { connect } from 'react-redux';
import Answers from './Answers';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import answersDispatchers from './redux/dispatchers';

const mapStateToProps = (state, ownProps) => {
    return {
      answers: state.answers,
      personalityQuestions: state.questions.personalityQuestions,
      energyFlowQuestions: state.questions.energyFlowQuestions,
      energyLevelQuestions: state.questions.energyLevelQuestions,
      energyMappingQuestions: state.questions.energyMappingQuestions,
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setAnswer: answersDispatchers.setAnswerDispatcher,
        validateAnswers: answersDispatchers.validateAnswersDispatcher
    }, dispatch)
);

const AnswersContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Answers));

export default AnswersContainer;
