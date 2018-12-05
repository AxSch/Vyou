import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';


class EnergyLevelsQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryCount: 1,
            questionType: 'EL',
            subCategory: true
        };

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleBackPageClick = this.handleBackPageClick.bind(this);
    }
    componentDidMount() {
        const { resetAllAnswers } = this.props;
        resetAllAnswers();
    }

    handleNextButton(count) {
        if (count === 1 || count < 16) {
            return <button onClick={this.handlePageClick}>Next</button>
        } else {
            return <button onClick={this.handleSubmit}>Submit</button>
        }
    }

    handleBackButton(count) {
        if (count === 1) {
            return null;
        } else {
            return <button onClick={this.handleBackPageClick}>Back</button>
        }
    }

    handlePageClick(callback) {
        const { answers } = this.props;

        if (answers.isValid === true) {
            this.setState (prevState => {
                return {
                    categoryCount: prevState.categoryCount + 1
                }
            }, () => {});
        }
    }

    handleBackPageClick(callback) {
        this.setState (prevState => {
            return {
                categoryCount: prevState.categoryCount - 1
            }
        }, () => {});
    }

    render() {
        const { questions } = this.props;
        const { categoryCount, questionType, subCategory } = this.state;
 
        return (
            <div>
                <h2>Energy Level Questions</h2>
                <QuestionFactory questionsArray={questions} categoryId={categoryCount} questionType={questionType} subCategory={subCategory}/>
                {this.handleBackButton(categoryCount)}
                {this.handleNextButton(categoryCount)}
            </div>
        );
    }
}

EnergyLevelsQuestions.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.object,
    resetAllAnswers: PropTypes.func
}

export default EnergyLevelsQuestions;