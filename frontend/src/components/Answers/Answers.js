import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class Answers extends Component {
    render() {
        const { questionId } = this.props;
        return (
            <div>
                <label htmlFor={`stronglyAgree-${questionId}`}>Strongly Agree</label>
                <input type="radio" name={`stronglyAgree-${questionId}`} value={3} id={`stronglyAgree-${questionId}`} /> 
                <label htmlFor={`slightlyAgree-${questionId}`}>Slightly Agree</label>
                <input type="radio" name={`slightlyAgree-${questionId}`} value={2} id={`slightlyAgree-${questionId}`} />  
                <label htmlFor={`agree-${questionId}`}>Agree</label>
                <input type="radio" name={`agree-${questionId}`} value={1} id={`agree-${questionId}`} />  
                <label htmlFor={`disagree-${questionId}`}>Disagree</label>
                <input type="radio" name={`disagree-${questionId}`} value={-1} id={`disagree-${questionId}`} />  
                <label htmlFor={`slightlyDisagree-${questionId}`}>Slightly Disagree</label>
                <input type="radio" name={`slightlyDisagree-${questionId}`} value={-2} id={`slightlyDisagree-${questionId}`} />  
                <label htmlFor={`stronglyDisagree-${questionId}`}>Strongly Disagree</label>
                <input type="radio" name={`stronglyDisagree-${questionId}`} value={-3} id={`stronglyDisagree-${questionId}`} />                         
            </div>
        );
    }
}

Answers.PropTypes = {
    someOnChangeFunc: PropTypes.func,
    questionId: PropTypes.number
}

export default Answers;
