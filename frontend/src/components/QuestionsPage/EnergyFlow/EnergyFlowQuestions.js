import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';
import CompletionPage from '../CompletionPage/CompletionPage';

class EnergyFlowQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: 1,
            questionType: 'EF',
            isSubmitted: false
        };

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleBackPageClick = this.handleBackPageClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { resetAllAnswers, profile, fetchCompEFQuestions } = this.props;
        const { categoryId, questionType } = this.state;
        resetAllAnswers();
        fetchCompEFQuestions(profile.userId, categoryId, questionType)
    }

    componentDidUpdate(prevProps, prevState) {
        const { profile, fetchCompEFQuestions } = this.props;
        const { categoryId, questionType } = this.state;
        if (categoryId !== prevState.categoryId) {
            fetchCompEFQuestions(profile.userId, categoryId, questionType);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { answers, profile, sendAnswers, updateAnswers } = this.props;
        const { categoryId } = this.state;
        
        if (answers.answeredEnergyFlow[categoryId].isValid === true) {
            Object.values(answers.answeredEnergyFlow[categoryId]).forEach((answer, index) => {
                // console.log(answers.completedEnergyFlow[categoryId].completed);
                if (answers.completedEnergyFlow[categoryId].completed === true) {
                    Object.values(answers.completedEnergyFlow[categoryId]).forEach((completedAns) => {
                        updateAnswers(profile.userId, completedAns, completedAns.id);
                    })
                } else {
                    sendAnswers(profile.userId, answer, (index + 1));
                }
            })
            this.setState (prevState => {
                return {
                    categoryId: prevState.categoryId + 1
                }
            }, () => {});
        }
        this.setState (prevState => {
            return {
                isSubmitted: true
            }
        }, () => {});
    }

    handleNextButton(categoryId) {
        if (categoryId === 1 || categoryId < 3) {
            return <button onClick={this.handlePageClick}>Next</button>
        } else if (categoryId === 3) {
            return <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        }
    }

    handleBackButton(categoryId) {
        if (categoryId === 1) {
            return null;
        } else {
            return <button onClick={this.handleBackPageClick}>Back</button>
        }
    }

    handlePageClick() {
        const { answers, profile, sendAnswers, updateAnswers } = this.props;
        const { categoryId } = this.state;

        if (answers.answeredEnergyFlow[categoryId].isValid === true) {
            Object.values(answers.answeredEnergyFlow[categoryId]).forEach((answer, index) => {
                // console.log(answers.completedEnergyFlow[categoryId].completed);
                if (answers.completedEnergyFlow[categoryId].completed === true) {
                    Object.values(answers.completedEnergyFlow[categoryId]).forEach((completedAns) => {
                        updateAnswers(profile.userId, completedAns, completedAns.id);
                    })
                } else {
                    sendAnswers(profile.userId, answer, (index + 1));
                }
            })
            this.setState (prevState => {
                return {
                    categoryId: prevState.categoryId + 1
                }
            }, () => {});
        }
    }

    handleBackPageClick() {
        this.setState (prevState => {
            return {
                categoryId: prevState.categoryId - 1
            }
        }, () => {});
    }

    render() {
        const { questions } = this.props;
        const { categoryId, questionType, subCategory, isSubmitted } = this.state;
 
        return (
            <div>
                <h2>Energy Flow</h2>
                {isSubmitted ? <CompletionPage questionType={questionType} /> : <QuestionFactory questionsArray={questions} categoryId={categoryId} questionType={questionType}/>}
                {!isSubmitted ? this.handleBackButton(categoryId) : null}
                {!isSubmitted ? this.handleNextButton(categoryId) : null}
            </div>
        );
    }
}

EnergyFlowQuestions.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.object,
    resetAllAnswers: PropTypes.func
}

export default EnergyFlowQuestions;