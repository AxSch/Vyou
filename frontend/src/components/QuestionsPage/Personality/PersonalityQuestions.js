import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';
// import ReactPaginate from 'react-paginate';


class PersonalityQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryCount: 1,
            questionType: 'PS'
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
            console.log('fire', this.state.categoryCount);
            this.setState (prevState => {
                return {
                    categoryCount: prevState.categoryCount + 1
                }
            }, () => {
                console.log('fired', this.state.categoryCount);
            });
        }
    }

    handleBackPageClick(callback) {
        // const { validateAnswers, answers, questions, categoryCount } = this.props;
        // const questionCategory = questions.filter((question) => question.fields.QuestionCategory.id === categoryCount);
        // validateAnswers(answers.answered, questionCategory);
        
        // console.log('fire', this.state.categoryCount);
        this.setState (prevState => {
            // console.log(prevState.categoryCount);
            return {
                categoryCount: prevState.categoryCount - 1
            }
        }, () => {
            console.log('fired', this.state.categoryCount);
        });
    }

    render() {
        const { questions } = this.props;
        const { categoryCount, questionType } = this.state;
 
        return (
            <div>
                <h2>Personality Questions</h2>
                <QuestionFactory questionsArray={questions} categoryId={categoryCount} questionType={questionType} />
                {this.handleBackButton(categoryCount)}
                {this.handleNextButton(categoryCount)}
            </div>
        );
    }
}

PersonalityQuestions.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.object,
    resetAllAnswers: PropTypes.func
}

export default PersonalityQuestions;