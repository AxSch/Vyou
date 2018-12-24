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
                    categoryName={question.fields.category_name}
                    questionText={question.fields.question}
                    questionType={questionType}
                    questionSign={question.fields.sign}
                    scaleAlpha={question.fields.scale_alpha}
                    subCategoryId={subCategoryId}
                    subCategoryName={question.fields.subCategory_name}
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
