import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class PersonalityQuestions extends Component {
    Question(questions) {
        return questions.map((question) => {
            // console.log(question);
                return (
                    <Fragment>
                        <li key={question.id}>
                            {question.fields.question}
                        </li>
                    </Fragment>
                );
        });
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