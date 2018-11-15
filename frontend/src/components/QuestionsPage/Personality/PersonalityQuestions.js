import React, { Component, Fragment } from 'react';
import Answers from '../../Answers/Answers';
import PropTypes from 'prop-types';


class PersonalityQuestions extends Component {
    Question(questions) {
            return questions.filter((question) => question.fields.QuestionCategory.id === 1).map((question) => {
                return (
                    <Fragment>
                        <li key={question.id}>
                            {question.fields.question}
                            {question.fields.QuestionCategory.id}
                            {question.fields.QuestionCategory.category_name}
                            <Answers />
                        </li>
                    </Fragment>
                );
        })
    }
    render() {
        const { questions } = this.props;
        return (
            <div>
                <h2>Personality Questions</h2>
                <ul>
                    {this.Question(questions)}
                </ul>
            </div>
        );
    }
}

PersonalityQuestions.PropTypes = {
    questions: PropTypes.array
}

export default PersonalityQuestions;