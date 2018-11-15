import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PersonalityQuestions extends Component {

    render() {
        return (
            <div>
                <h2>Personality Questions</h2>
                
            </div>
        );
    }
}

PersonalityQuestions.PropTypes = {
    questions: PropTypes.array
}

export default PersonalityQuestions;