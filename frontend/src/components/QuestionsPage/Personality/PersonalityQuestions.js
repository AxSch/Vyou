import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';
// import ReactPaginate from 'react-paginate';


class PersonalityQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: 1,
            questionType: 'PS',
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
        const { categoryId } = this.state;
        
        if (answers.answeredPersonality[categoryId].isValid === true) {
            this.setState (prevState => {
                return {
                    categoryId: prevState.categoryId + 1
                }
            }, () => {});
        }
    }

    handleBackPageClick(callback) {
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
    resetAllAnswers: PropTypes.func
}

export default PersonalityQuestions;