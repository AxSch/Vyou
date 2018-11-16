import React, { Component, Fragment } from 'react';
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

    handleNextButton(count) {
        if (count === 1 || count < 16) {
            return <button onClick={this.handlePageClick}>Next</button>
        } else {
            return <button onClick={this.handleSubmit}>Submit</button>
        }
    }

    handlePageClick(callback) {
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
                {/* <ReactPaginate 
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={8}
                    onPageChange={this.handlePageClick(this.state.categoryCount)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={8}
                /> */}
            </div>
        );
    }
}

PersonalityQuestions.PropTypes = {
    questions: PropTypes.array
}

export default PersonalityQuestions;