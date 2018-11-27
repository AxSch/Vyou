import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';


class Answers extends Component {
    render() {
        const { categoryId, questionId, setAnswer, questionText, questionSign } = this.props;
        return (
            <div>
                <label htmlFor={`stronglyAgree-${questionId}`}>Strongly Agree</label>
                <input type="radio" name={`answers-${questionId}`} value={3} id={`stronglyAgree-${questionId}`} onChange={(e) => setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format())}/> 
                
                <label htmlFor="slightlyAgree">Slightly Agree</label>
                <input type="radio" name={`answers-${questionId}`} value={2} id={`slightlyAgree-${questionId}`} onChange={(e) => setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format())}/>  
                
                <label htmlFor={`agree-${questionId}`}>Agree</label>
                <input type="radio" name={`answers-${questionId}`} value={1} id={`agree-${questionId}`} onChange={(e) => setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format())} />  
                
                <label htmlFor={`disagree-${questionId}`}>Disagree</label>
                <input type="radio" name={`answers-${questionId}`} value={-1} id={`disagree-${questionId}`} onChange={(e) => setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format())} />  
                
                <label htmlFor={`slightlyDisagree-${questionId}`}>Slightly Disagree</label>
                <input type="radio" name={`answers-${questionId}`} value={-2} id={`slightlyDisagree-${questionId}`} onChange={(e) => setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format())} />  
                
                <label htmlFor={`stronglyDisagree-${questionId}`}>Strongly Disagree</label>
                <input type="radio" name={`answers-${questionId}`} value={-3} id={`stronglyDisagree-${questionId}`} onChange={(e) => setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format())} />                         
            </div>
        );
    }
}

Answers.PropTypes = {
    setAnswer: PropTypes.func,
    questionId: PropTypes.number,
    categoryId: PropTypes.number,
    questionText: PropTypes.string,
    questionSign: PropTypes.string,
}

export default Answers;
