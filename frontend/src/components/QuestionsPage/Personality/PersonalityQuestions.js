import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';
// import ReactPaginate from 'react-paginate';


class PersonalityQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryCount: 1
        };

        this.handlePageClick = this.handlePageClick.bind(this);
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

    handlePageClick(callback) {
        const { validateAnswers, answers, questions, categoryCount } = this.props;
        const questionCategory = questions.filter((question) => question.fields.QuestionCategory.id === categoryCount);
        validateAnswers(answers.answered, questionCategory);
        
        console.log('fire', this.state.categoryCount);
        this.setState (prevState => {
            console.log(prevState.categoryCount);
            return {
                categoryCount: prevState.categoryCount + 1
            }
        }, () => {
            console.log('fired', this.state.categoryCount);
        });
    }

    render() {
        const { questions } = this.props;
        const { categoryCount } = this.state;
 
        return (
            <div>
                <h2>Personality Questions</h2>
                <QuestionFactory questionsArray={questions} index={categoryCount} />
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