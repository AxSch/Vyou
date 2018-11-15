import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class Answers extends Component {
    render() {
        return (
            <div>
                <label htmlFor="stronglyAgree">Strongly Agree</label>
                <input type="radio" name="answers" value={3} id="stronglyAgree" /> 
                <label htmlFor="stronglyAgree">Slightly Agree</label>
                <input type="radio" name="answers" value={2} id="stronglyAgree" />  
                <label htmlFor="stronglyAgree">Agree</label>
                <input type="radio" name="answers" value={1} id="stronglyAgree" />  
                <label htmlFor="stronglyAgree">Disagree</label>
                <input type="radio" name="answers" value={-1} id="stronglyAgree" />  
                <label htmlFor="stronglyAgree">Slightly Disagree</label>
                <input type="radio" name="answers" value={-2} id="stronglyAgree" />  
                <label htmlFor="stronglyAgree">Strongly Disagree</label>
                <input type="radio" name="answers" value={-3} id="stronglyAgree" />                         
            </div>
        );
    }
}

Answers.PropTypes = {
    someOnChangeFunc: PropTypes.func
}

export default Answers;
