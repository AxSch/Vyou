import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';
import CompletionPage from '../CompletionPage/CompletionPage';

class PersonalityQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: 1,
            questionType: 'PS',
            isSubmitted: false
        };

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleBackPageClick = this.handleBackPageClick.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        const { resetAllAnswers, profile, fetchCompPSQuestions } = this.props;
        const { categoryId, questionType } = this.state;
        resetAllAnswers();
        fetchCompPSQuestions(profile.userId, categoryId, questionType)
    }

    componentDidUpdate(prevProps, prevState) {
        const { profile, fetchCompPSQuestions } = this.props;
        const { categoryId, questionType } = this.state;
        if (categoryId !== prevState.categoryId) {
            fetchCompPSQuestions(profile.userId, categoryId, questionType);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { answers, profile, sendAnswers, updateAnswers } = this.props;
        const { categoryId } = this.state;

        if (answers.answeredPersonality[categoryId].isValid === true) {
            Object.values(answers.answeredPersonality[categoryId]).forEach((answer, index) => {
                if (answers.completedPersonality[categoryId].completed === true) {
                    Object.values(answers.completedPersonality[categoryId]).forEach((completedAns) => {
                        updateAnswers(profile.userId, completedAns, completedAns.id);
                    })
                } else {
                    sendAnswers(profile.userId, answer, (index + 1));
                }
            })
            this.setState (prevState => {
                return {
                    isSubmitted: true
                }
            }, () => {});
        }
    }

    handleNextButton(count) {
        if (count === 1 || count < 16) {
            return <button onClick={this.handlePageClick}>Next</button>
        } else {
            return <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        }
    }

    handleBackButton(count) {
        if (count === 1) {
            return null;
        } else {
            return <button onClick={this.handleBackPageClick}>Back</button>
        }
    }

    handlePageClick() {
        const { answers, profile, sendAnswers, updateAnswers } = this.props;
        const { categoryId } = this.state;
        
        if (answers.answeredPersonality[categoryId].isValid === true) {
            Object.values(answers.answeredPersonality[categoryId]).forEach((answer, index) => {
                if (answers.completedPersonality[categoryId].completed === true) {
                    Object.values(answers.completedPersonality[categoryId]).forEach((completedAns) => {
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
        const { categoryId, questionType, isSubmitted} = this.state;
 
        return (
            <div>
                <h2>Personality Questions</h2>
                {isSubmitted ? <CompletionPage questionType={questionType} /> : <QuestionFactory questionsArray={questions} categoryId={categoryId} questionType={questionType}/>}
                {!isSubmitted ? this.handleBackButton(categoryId) : null}
                {!isSubmitted ? this.handleNextButton(categoryId) : null}
            </div>
        );
    }
}

PersonalityQuestions.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.object,
    resetAllAnswers: PropTypes.func,
    fetchCompPSQuestions: PropTypes.func,
    profile: PropTypes.any
}

export default PersonalityQuestions;