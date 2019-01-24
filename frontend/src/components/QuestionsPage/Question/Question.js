import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import AnswersContainer from '../../Answers/AnswersContainer';


class Question extends Component {
    render() {
        const { question, questionType, subCategoryId } = this.props;
        return (
          <Fragment>
              <div className="question-container" key={question.id}>
                <p className="question">
                  {question.fields.question}
                </p>
                
                <AnswersContainer
                    questionId={question.id}
                    categoryId={question.fields.id}
                    categoryName={question.fields.category_name}
                    questionText={question.fields.question}
                    questionType={questionType}
                    questionSign={question.fields.sign}
                    scaleAlpha={question.fields.scale_alpha}
                    subCategoryId={subCategoryId}
                    subCategoryName={question.fields.subCategory_name ? question.fields.subCategory_name : question.fields.subCategory}
                />
            </div>
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
