import { connect } from 'react-redux';
import QuestionsPage from './QuestionsPage';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import questionsDispatchers from './redux/dispatchers';
import answersDispatchers from '../Answers/redux/dispatchers';

const mapStateToProps = (state, ownProps) => {
    return {
      personalityQuestions: state.questions.personalityQuestions,
      energyFlowQuestions: state.questions.energyFlowQuestions,
      energyLevelQuestions: state.questions.energyLevelQuestions,
      energyMappingQuestions: state.questions.energyMappingQuestions,
      answers: state.answers,
      profile: state.profile
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchPSQuestions: questionsDispatchers.requestPSQuestionsDispatcher,
        fetchEFQuestions: questionsDispatchers.requestEFQuestionsDispatcher,
        fetchELQuestions: questionsDispatchers.requestELQuestionsDispatcher,
        fetchEMQuestions: questionsDispatchers.requestEMQuestionsDispatcher,
        resetAllAnswers: answersDispatchers.resetAllAnswersDispatcher,
        fetchCompPSQuestions: answersDispatchers.fetchCompPersonalityDispatcher,
        sendAnswers: answersDispatchers.sendPSAnswersDispatcher,
    }, dispatch)
);

const QuestionsPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionsPage));

export default QuestionsPageContainer;
