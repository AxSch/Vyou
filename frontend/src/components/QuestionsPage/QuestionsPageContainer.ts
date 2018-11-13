import { connect } from 'react-redux';
import QuestionsPage from './QuestionsPage';
import { bindActionCreators } from 'redux';
import requestQuestionsDispatcher from './redux/dispatchers';

const mapStateToProps = (state, ownProps) => {
    return {
      questions: state.questions,
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        fetchQuestions: requestQuestionsDispatcher,
    }, dispatch)
);

const QuestionsPageContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);

export default QuestionsPageContainer;
