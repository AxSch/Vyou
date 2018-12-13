import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';
import CompletionPage from '../CompletionPage/CompletionPage';

class EnergyLevelQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: 1,
            questionType: 'EL',
            subCategory: true,
            isValid: null,
            isSubmitted: false
        };

        this.handleIsValid = this.handleIsValid.bind(this);
    }
    
    componentDidMount() {
        const { resetAllAnswers, profile, fetchCompELQuestions } = this.props;
        const { categoryId, questionType } = this.state;
        resetAllAnswers();
        fetchCompELQuestions(profile.userId, categoryId, questionType);
        this.setState (prevState => {
            return {
                isValid: false
            }
        }, () => {});
    }

    componentDidUpdate(prevProps, prevState) {
        const { profile, fetchCompELQuestions } = this.props;
        const { categoryId, questionType } = this.state;
        if (categoryId !== prevState.categoryId) {
            fetchCompELQuestions(profile.userId, categoryId, questionType);
        }
    }

    
    handleIsValid(categoryId) {
        const { answers } = this.props;
        if (answers.answeredEnergyLevel[categoryId].isValid === true) {
            this.setState (prevState => {
                return {
                    isValid: true
                }
            }, () => {});
        }
    }

    handleSubmit(e) {
        const { answers, profile, sendAnswers, updateAnswers } = this.props;
        const { categoryId } = this.state;

        e.preventDefault();
        if (answers.answeredEnergyLevel[categoryId].isValid === true) {
            Object.values(answers.answeredEnergyLevel[categoryId]).forEach((answer, index) => {
                if (answers.completedEnergyLevel[categoryId].completed === true) {
                    Object.values(answers.completedEnergyLevel[categoryId]).forEach((completedAns) => {
                        updateAnswers(profile.userId, completedAns, completedAns.id);
                        this.setState (prevState => {
                            return {
                                isSubmitted: true
                            }
                        }, () => {});
                    })
                } else {
                    sendAnswers(profile.userId, answer, (index + 1));
                    this.setState (prevState => {
                        return {
                            isSubmitted: true
                        }
                    }, () => {});
                }
            })
            this.setState (prevState => {
                return {
                    categoryId: prevState.categoryId + 1
                }
            }, () => {});
        }
    }

    render() {
        const { questions } = this.props;
        const { categoryId, questionType, subCategory, isValid, isSubmitted } = this.state;
 
        return (
            <div>
                <h2>Energy Level Questions</h2>
                {isSubmitted ? <CompletionPage questionType={questionType} /> : <QuestionFactory questionsArray={questions} categoryId={categoryId} questionType={questionType} subCategory={subCategory}/>}
                {isValid === true ? <button onClick={(e) => this.handleSubmit(e)}>Submit</button> : <button onClick={this.handleIsValid(categoryId)}>Next</button>}
            </div>
        );
    }
}

EnergyLevelQuestions.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.object,
    resetAllAnswers: PropTypes.func
}

export default EnergyLevelQuestions;
