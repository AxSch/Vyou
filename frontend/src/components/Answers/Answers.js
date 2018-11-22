import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class Answers extends Component {
    render() {
        return (
            <div>
                <label htmlFor="stronglyAgree">Strongly Agree</label>
                <input type="radio" name="answers-stronglyAgree" value={3} id="stronglyAgree" /> 
                <label htmlFor="slightlyAgree">Slightly Agree</label>
                <input type="radio" name="answers-slightlyAgree" value={2} id="slightlyAgree" />  
                <label htmlFor="agree">Agree</label>
                <input type="radio" name="answers-agree" value={1} id="agree" />  
                <label htmlFor="disagree">Disagree</label>
                <input type="radio" name="answers-disagree" value={-1} id="disagree" />  
                <label htmlFor="slightlyDisagree">Slightly Disagree</label>
                <input type="radio" name="answers-slightlyDisagree" value={-2} id="slightlyDisagree" />  
                <label htmlFor="stronglyDisagree">Strongly Disagree</label>
                <input type="radio" name="answers-stronglyDisagree" value={-3} id="stronglyDisagree" />                         
            </div>
        );
    }
}

Answers.PropTypes = {
    someOnChangeFunc: PropTypes.func
}

export default Answers;
