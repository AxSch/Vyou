import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';


class Answers extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        const { personalityQuestions, answers, categoryId, questionId, setAnswer, questionText, questionSign, validateAnswers, questionType } = this.props;
        switch(questionType) {
            case 'PS':
                const questionCategory = personalityQuestions.filter((question) => question.fields.QuestionCategory.id === categoryId);
                setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format());
                validateAnswers(answers.answeredPersonality, questionCategory, categoryId);
                break;
            default:
                return null;
        }

    }

    render() {
        const { questionId } = this.props;
        return (
            <div>
                <label htmlFor={`stronglyAgree-${questionId}`}>Strongly Agree</label>
                <input type="radio" name={`answers-${questionId}`} value={3} id={`stronglyAgree-${questionId}`} onChange={(e) => this.handleOnChange(e)}/> 
                
                <label htmlFor="slightlyAgree">Slightly Agree</label>
                <input type="radio" name={`answers-${questionId}`} value={2} id={`slightlyAgree-${questionId}`} onChange={(e) => this.handleOnChange(e)}/>  
                
                <label htmlFor={`agree-${questionId}`}>Agree</label>
                <input type="radio" name={`answers-${questionId}`} value={1} id={`agree-${questionId}`} onChange={(e) => this.handleOnChange(e)} />  
                
                <label htmlFor={`disagree-${questionId}`}>Disagree</label>
                <input type="radio" name={`answers-${questionId}`} value={-1} id={`disagree-${questionId}`} onChange={(e) => this.handleOnChange(e)} />  
                
                <label htmlFor={`slightlyDisagree-${questionId}`}>Slightly Disagree</label>
                <input type="radio" name={`answers-${questionId}`} value={-2} id={`slightlyDisagree-${questionId}`} onChange={(e) => this.handleOnChange(e)} />  
                
                <label htmlFor={`stronglyDisagree-${questionId}`}>Strongly Disagree</label>
                <input type="radio" name={`answers-${questionId}`} value={-3} id={`stronglyDisagree-${questionId}`} onChange={(e) => this.handleOnChange(e)} />                         
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
    questionType: PropTypes.string,
}

export default Answers;
