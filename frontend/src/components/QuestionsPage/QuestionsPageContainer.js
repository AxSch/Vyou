import { connect } from 'react-redux';
import QuestionsPage from './QuestionsPage';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import questionsDispatchers from './redux/dispatchers';
import answersDispatchers from '../Answers/redux/dispatchers';

const mapStateToProps = (state, ownProps) => {
    return {
      personalityQuestions: state.questions.personalityQuestions,
      energyLevelQuestions: state.questions.energyLevelQuestions,
      answers: state.answers
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchPSQuestions: questionsDispatchers.requestPSQuestionsDispatcher,
        fetchELQuestions: questionsDispatchers.requestELQuestionsDispatcher,
        resetAllAnswers: answersDispatchers.resetAllAnswersDispatcher
    }, dispatch)
);

const QuestionsPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionsPage));

export default QuestionsPageContainer;
