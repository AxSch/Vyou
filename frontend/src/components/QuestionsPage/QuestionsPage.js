import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonalityQuestions from './Personality/PersonalityQuestions';


class PersonalityQuestionsPage extends Component {
    componentDidMount() {
        const { fetchPersonalityQuestions } = this.props;
        fetchPersonalityQuestions();
    }

    render() {
        const { personalityQuestions } = this.props;
        return (
            <div>
                <h2>Questions</h2>
                <div>
                    <h4>Progress</h4>
                </div>
                <PersonalityQuestions questions={personalityQuestions} />
            </div>
        );
    }
}

PersonalityQuestionsPage.PropTypes = {
    fetchPersonalityQuestions: PropTypes.func,
    personalityQuestions: PropTypes.array
}

export default PersonalityQuestionsPage;
