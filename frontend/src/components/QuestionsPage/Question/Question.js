import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import AnswersContainer from '../../Answers/AnswersContainer';


class Question extends Component {
    render() {
        const { question, questionType, subCategoryId } = this.props;
        return (
          <Fragment>
              <li key={question.id}>
                {question.fields.question}
                <AnswersContainer 
                    questionId={question.id}
                    categoryId={question.fields.id}
                    questionText={question.fields.question}
                    questionSign={question.fields.sign}
                    questionType={questionType}
                    subCategoryId={subCategoryId}
                />
            </li>
          </Fragment>
        );
    }
}

Question.propTypes = {
    question: PropTypes.object,
    questionType: PropTypes.string,
    subCategoryId: PropTypes.number
}

export default Question;
