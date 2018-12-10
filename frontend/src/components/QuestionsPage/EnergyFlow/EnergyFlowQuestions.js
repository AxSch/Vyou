import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';


class EnergyFlowQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: 1,
            questionType: 'EF'
        };

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleBackPageClick = this.handleBackPageClick.bind(this);
    }
    componentDidMount() {
        const { resetAllAnswers } = this.props;
        resetAllAnswers();
    }

    handleNextButton(categoryId) {
        if (categoryId === 1 || categoryId < 3) {
            return <button onClick={this.handlePageClick}>Next</button>
        } else if (categoryId === 3) {
            return <button onClick={this.handleSubmit}>Submit</button>
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
        const { answers } = this.props;
        const { categoryId } = this.state;

        if (answers.answeredEnergyFlow[categoryId].isValid === true) {
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
        const { categoryId, questionType, subCategory } = this.state;
 
        return (
            <div>
                <h2>Energy Flow Questions</h2>
                <QuestionFactory questionsArray={questions} categoryId={categoryId} questionType={questionType}/>
                {this.handleBackButton(categoryId)}
                {this.handleNextButton(categoryId)}
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