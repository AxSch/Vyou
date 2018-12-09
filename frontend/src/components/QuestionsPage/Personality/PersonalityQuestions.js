import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';


class PersonalityQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: 1,
            questionType: 'PS',
        };

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleBackPageClick = this.handleBackPageClick.bind(this);
        this.handleNextButton = this.handleNextButton.bind(this);
    }
    componentDidMount() {
        const { resetAllAnswers, profile, fetchCompPSQuestions } = this.props;
        const { categoryId, questionType } = this.state;
        resetAllAnswers();
        fetchCompPSQuestions(profile.userId, categoryId, questionType)
    }

    handleSubmit(e) {
        e.preventDefault();
        // sendAnswers();
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
        const { answers, profile, sendAnswers, questions } = this.props;
        const { categoryId, questionType } = this.state;
        
        const questionCategory = questions.filter((question) => question.fields.id === categoryId);
        console.log(questionCategory);
        if (answers.answeredPersonality[categoryId].isValid === true) {
            Object.values(answers.answeredPersonality[categoryId]).forEach((answer) => {
                sendAnswers(profile.userId, answer);
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
        const { categoryId, questionType } = this.state;
 
        return (
            <div>
                <h2>Personality Questions</h2>
                <QuestionFactory questionsArray={questions} categoryId={categoryId} questionType={questionType}/>
                {this.handleBackButton(categoryId)}
                {this.handleNextButton(categoryId)}
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