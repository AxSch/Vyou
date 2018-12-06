import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';


class Answers extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        const { personalityQuestions, energyFlowQuestions, energyLevelQuestions, energyMappingQuestions, answers, categoryId, questionId, setAnswer, questionText, questionSign, validateAnswers, questionType, subCategoryId } = this.props;
        switch(questionType) {
            case 'PS':
                const personalityQues = personalityQuestions.filter((question) => question.fields.id === categoryId);
                setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format(), questionType);
                validateAnswers(answers.answeredPersonality, personalityQues, categoryId, questionType);
                break;
            case 'EF':
                const energyFlowQues =  energyFlowQuestions.filter((question) => question.fields.id === categoryId);
                setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format(), questionType);
                validateAnswers(answers.answeredPersonality, energyFlowQues, categoryId, questionType);
                break;
            case 'EL':
                const energyLevelQues =  energyLevelQuestions.filter((question) => question.fields.id === categoryId);
                setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format(), questionType);
                validateAnswers(answers.answeredPersonality, energyLevelQues, categoryId, questionType);
                break;
            case 'EM':
                const energyMappingQues =  energyMappingQuestions.filter((question) => question.fields.id === categoryId);
                setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format(), questionType, subCategoryId);
                validateAnswers(answers.answeredPersonality, energyMappingQues, categoryId, questionType, subCategoryId);
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
                
                <label htmlFor={`slightlyAgree-${questionId}`}>Slightly Agree</label>
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
    subCategoryId: PropTypes.number,
    questionText: PropTypes.string,
    questionSign: PropTypes.string,
    questionType: PropTypes.string,
}

export default Answers;
