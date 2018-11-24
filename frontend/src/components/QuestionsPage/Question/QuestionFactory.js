import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const renderQuestion = (questions, category_id) => {
  return questions.filter((question) => question.fields.QuestionCategory.id === category_id).map((question) => {
      return (
          <Question question={question}/>
      );
  })
}

const renderQuestionCategory = (questions, index) => {
  const questionList = questions.filter((question) => question.fields.QuestionCategory.id === index);
  console.log(questionList[0].fields);
  if (questionList[0].fields) {
    return (
        <h3>{questionList[0].fields.QuestionCategory.category_name}</h3>
      );
  }
  return null;
}

class QuestionFactory extends Component {
  render() {
    const { questionsArray, index } = this.props;
    return (
      <div>
        {/* {renderQuestionCategory(questionsArray, index)} */}
      <ul>
       {renderQuestion(questionsArray, index)}
      </ul>
    </div>
    );
  }
}

QuestionFactory.PropTypes = {
  questionsArray: PropTypes.array,
  index: PropTypes.number
}

export default QuestionFactory;
