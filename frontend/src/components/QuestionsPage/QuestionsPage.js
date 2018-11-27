import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonalityQuestions from './Personality/PersonalityQuestions';


class PersonalityQuestionsPage extends Component {
    componentDidMount() {
        const { fetchPersonalityQuestions } = this.props;
        fetchPersonalityQuestions();
    }

    render() {
        const { personalityQuestions, resetAllAnswers, answers, validateAnswers } = this.props;
        return (
            <div>
                <h2>Questions</h2>
                <div>
                    <h4>Progress</h4>
                </div>
                <PersonalityQuestions validateAnswers={validateAnswers} questions={personalityQuestions} answers={answers} resetAllAnswers={resetAllAnswers}/>
            </div>
        );
    }
}

PersonalityQuestionsPage.propTypes = {
    fetchPersonalityQuestions: PropTypes.func,
    personalityQuestions: PropTypes.array,
    answers: PropTypes.object
}

export default PersonalityQuestionsPage;
