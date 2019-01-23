import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
// import TransitionGroup from 'react-transition-group/TransitionGroup'

class QuestionFactory extends Component {
  constructor(props) {
    super(props);

    this.renderQuestion = this.renderQuestion.bind(this);
    this.renderQuestionCategory = this.renderQuestionCategory.bind(this);
  }

  renderQuestion = (questions, categoryId, questionType, subCategory) => {
    const { subCategoryId } = this.props;

    if (subCategory) {
      const questionCategory = questions.filter((question) => question.fields.id === categoryId);
      const questionSubCategory = questionCategory.filter((question) => question.fields.subCategory_id === subCategoryId);
      // console.log(questionSubCategoryq);
      return questionSubCategory.map((question) => {
        return (
          <Question key={`${questionType}_${question.id}`} question={question} questionType={questionType} subCategoryId={subCategoryId}/>
        );
      });
    } else {
      return questions.filter((question) => question.fields.id === categoryId).map((question) => {
          return (
              <Question key={`${questionType}_${question.id}`} question={question} questionType={questionType}/>
          );
      })
    }
  }

  renderQuestionCategory = (questions, categoryId) => {
    const questionList = questions.filter((question) => question.fields.QuestionCategory.id === categoryId);
    // console.log(questionList[0].fields);
    if (questionList[0].fields) {
      return (
          <h3>{questionList[0].fields.QuestionCategory.category_name}</h3>
        );
    }
    return null;
  }

  render() {
    const { questionsArray, categoryId, questionType, subCategory } = this.props;
    return (
      <div className='question-list-container'>
        {/* {renderQuestionCategory(questionsArray, index)} */}
        <div className='question-list'>
         {this.renderQuestion(questionsArray, categoryId, questionType, subCategory)}
        </div>
    </div>
    );
  }
}

QuestionFactory.propTypes = {
  questionsArray: PropTypes.array,
  categoryId: PropTypes.number,
  questionType: PropTypes.string,
  subCategory: PropTypes.bool,
  subCategoryId: PropTypes.number,
}

export default QuestionFactory;
