import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';


class Answers extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        const { 
                personalityQuestions,
                energyFlowQuestions, 
                energyLevelQuestions, 
                energyMappingQuestions, 
                answers, categoryId, 
                questionId, 
                setAnswer, 
                questionText, 
                questionSign, 
                validateAnswers, 
                questionType, 
                subCategoryId,
                subCategoryName, 
                categoryName, 
                scaleAlpha } = this.props;

        switch(questionType) {
            case 'PS':
                const personalityQues = personalityQuestions.filter((question) => question.fields.id === categoryId);
                setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format(), questionType, null, scaleAlpha, categoryName);
                validateAnswers(answers.answeredPersonality, personalityQues, categoryId, questionType);
                break;
            case 'EF':
                const energyFlowQues =  energyFlowQuestions.filter((question) => question.fields.id === categoryId);
                setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format(), questionType, null, scaleAlpha, categoryName, subCategoryName);
                validateAnswers(answers.answeredPersonality, energyFlowQues, categoryId, questionType);
                break;
            case 'EL':
                const energyLevelQues =  energyLevelQuestions.filter((question) => question.fields.id === categoryId);
                setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format(), questionType, null, scaleAlpha, categoryName);
                validateAnswers(answers.answeredPersonality, energyLevelQues, categoryId, questionType);
                break;
            case 'EM':
                const energyMappingQues =  energyMappingQuestions.filter((question) => question.fields.id === categoryId);
                setAnswer(categoryId, e.target.value, questionId, questionText, questionSign, moment().format(), questionType, subCategoryId, scaleAlpha, categoryName, subCategoryName);
                validateAnswers(answers.answeredPersonality, energyMappingQues, categoryId, questionType, subCategoryId);
                break;
            default:
                return null;
        }

    }

    render() {
        const { questionId } = this.props;

        return (
            <div className="answers-container">
                <div className="answer">
                    <label htmlFor={`stronglyAgree-${questionId}`}>
                        <input type="radio" required name={`answers-${questionId}`} value={3} id={`stronglyAgree-${questionId}`} onChange={(e) => this.handleOnChange(e)}/>
                        <span>Strongly Agree</span>
                    </label>
                </div>

                <div className="answer">
                    <label htmlFor={`slightlyAgree-${questionId}`}>
                        <input type="radio" required name={`answers-${questionId}`} value={2} id={`slightlyAgree-${questionId}`} onChange={(e) => this.handleOnChange(e)}/>
                        <span>Slightly Agree</span>
                    </label>
                </div>

                <div className="answer">
                    <label htmlFor={`agree-${questionId}`}>
                        <input type="radio" required name={`answers-${questionId}`} value={1} id={`agree-${questionId}`} onChange={(e) => this.handleOnChange(e)} />
                        <span>Agree</span>
                    </label>
                </div>

                <div className="answer">
                    <label htmlFor={`disagree-${questionId}`}>
                        <input type="radio" required name={`answers-${questionId}`} value={-1} id={`disagree-${questionId}`} onChange={(e) => this.handleOnChange(e)} />
                        <span>Disagree</span>
                    </label>
                </div>

                <div className="answer">
                    <label htmlFor={`slightlyDisagree-${questionId}`}>
                        <input type="radio" required name={`answers-${questionId}`} value={-2} id={`slightlyDisagree-${questionId}`} onChange={(e) => this.handleOnChange(e)} />
                        <span>Slightly Disagree</span>
                    </label>
                </div>

                <div className="answer">
                    <label htmlFor={`stronglyDisagree-${questionId}`}>
                        <input type="radio" required name={`answers-${questionId}`} value={-3} id={`stronglyDisagree-${questionId}`} onChange={(e) => this.handleOnChange(e)} />
                        <span>Strongly Disagree</span>
                    </label>
                </div>
            </div>
        );
    }
}

Answers.propTypes = {
    setAnswer: PropTypes.func,
    questionId: PropTypes.number,
    categoryId: PropTypes.number,
    subCategoryId: PropTypes.number,
    questionText: PropTypes.string,
    questionSign: PropTypes.string,
    questionType: PropTypes.string,
}

export default Answers;
