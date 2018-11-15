import { connect } from 'react-redux';
import QuestionsPage from './QuestionsPage';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import requestQuestionsDispatcher from './redux/dispatchers';

const mapStateToProps = (state, ownProps) => {
    return {
      personalityQuestions: state.questions.personalityQuestions,
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchPersonalityQuestions: requestQuestionsDispatcher,
    }, dispatch)
);

const QuestionsPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionsPage));

export default QuestionsPageContainer;
