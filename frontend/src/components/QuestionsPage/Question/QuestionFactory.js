import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const renderQuestion = (questions, categoryId, questionType, subCategory) => {
  if(subCategory) {
    return questions.filter((question) => question.fields.id === categoryId).map((question) => {
      return (
          <Question question={question} questionType={questionType}/>
      );
  })
  }
  return questions.filter((question) => question.fields.QuestionCategory.id === categoryId).map((question) => {
      return (
          <Question question={question} questionType={questionType}/>
      );
  })
}

const renderQuestionCategory = (questions, categoryId) => {
  const questionList = questions.filter((question) => question.fields.QuestionCategory.id === categoryId);
  // console.log(questionList[0].fields);
  if (questionList[0].fields) {
    return (
        <h3>{questionList[0].fields.QuestionCategory.category_name}</h3>
      );
  }
  return null;
}

class QuestionFactory extends Component {
  render() {
    const { questionsArray, categoryId, questionType, subCategory } = this.props;
    return (
      <div>
        {/* {renderQuestionCategory(questionsArray, index)} */}
      <ul>
       {renderQuestion(questionsArray, categoryId, questionType, subCategory)}
      </ul>
    </div>
    );
  }
}

QuestionFactory.propTypes = {
  questionsArray: PropTypes.array,
  categoryId: PropTypes.number,
  questionType: PropTypes.string,
  subCategory: PropTypes.bool
}

export default QuestionFactory;
