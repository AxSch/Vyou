import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';


class EnergyLevelQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: 1,
            questionType: 'EL',
            subCategory: true,
            isValid: null
        };

        this.handleIsValid = this.handleIsValid.bind(this);
    }
    
    componentDidMount() {
        const { resetAllAnswers, profile, fetchCompELQuestions } = this.props;
        const { categoryId, questionType } = this.state;
        resetAllAnswers();
        fetchCompELQuestions(profile.userId, categoryId, questionType)
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

    render() {
        const { questions } = this.props;
        const { categoryId, questionType, subCategory, isValid } = this.state;
 
        return (
            <div>
                <h2>Energy Level Questions</h2>
                <QuestionFactory questionsArray={questions} categoryId={categoryId} questionType={questionType} subCategory={subCategory}/>
                {isValid === true ? <button onClick={this.handleSubmit}>Submit</button> : <button onClick={this.handleIsValid(categoryId)}>Next</button>}
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
