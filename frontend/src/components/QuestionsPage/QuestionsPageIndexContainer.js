import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuestionsPageIndex from './QuestionsIndexPage';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
    }, dispatch)
);

const QuestionsPageIndexContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionsPageIndex));

export default QuestionsPageIndexContainer;