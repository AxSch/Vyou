import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';


class PersonalityQuestions extends Component {
    render() {
        const { questions } = this.props;
        return (
            <div>
                <h2>Personality Questions</h2>
                <QuestionFactory questionsArray={questions} index={1} />
            </div>
        );
    }
}

PersonalityQuestions.PropTypes = {
    questions: PropTypes.array
}

export default PersonalityQuestions;