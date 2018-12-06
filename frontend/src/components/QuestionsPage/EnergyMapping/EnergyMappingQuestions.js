import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';


class EnergyMappingQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: 1,
            questionType: 'EM',
            subCategory: true,
            subCategoryId: 1
        };

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleBackPageClick = this.handleBackPageClick.bind(this);
    }
    componentDidMount() {
        const { resetAllAnswers } = this.props;
        resetAllAnswers();
    }

    handleNextButton(categoryId) {
        if (categoryId === 1 || categoryId < 6){
            return <button onClick={this.handlePageClick}>Next</button>
        } else {
            return <button onClick={this.handleSubmit}>Submit</button>

        }
    }

    handleBackButton(subCategoryId, categoryId) {
        if (subCategoryId === 1 && categoryId === 1) {
            return null;
        } else {
            return <button onClick={this.handleBackPageClick}>Back</button>
        }
    }

    handlePageClick() {
        const { answers } = this.props;
        const { categoryId, subCategoryId } = this.state;

        if (categoryId === 1 || categoryId < 6) {
          if (subCategoryId < 3) {
              if (answers.answeredEnergyMapping[categoryId][subCategoryId].isValid === true) {
                  this.setState (prevState => {
                            return {
                              subCategoryId: prevState.subCategoryId + 1,
                            }
                        }, () => {});
              }
          } else if (subCategoryId === 3) {
            if (answers.answeredEnergyMapping[categoryId][subCategoryId].isValid === true) {
                this.setState (prevState => {
                  return {
                    categoryId: prevState.categoryId + 1,
                    subCategoryId: 1,
                  }
              }, () => {});
            }
          }
        }
    }

    handleBackPageClick() {
        const { categoryId, subCategoryId } = this.state;

        if (categoryId === 1 && subCategoryId > 1) {
            this.setState (prevState => {
                return {
                    subCategoryId: prevState.subCategoryId - 1,
                }
            }, () => {});
        } else if (categoryId > 1 && subCategoryId === 1) {
            this.setState (prevState => {
                return {
                    categoryId: prevState.categoryId - 1,
                    subCategoryId: 3,
                }
            }, () => {});
        } else if (categoryId > 1 && subCategoryId > 1) {
            this.setState (prevState => {
                return {
                    subCategoryId: prevState.subCategoryId - 1,
                }
            }, () => {});
        }
    }

    render() {
        const { questions } = this.props;
        const { categoryId, questionType, subCategory, subCategoryId, categoryComplete } = this.state;
 
        return (
            <div>
                <h2>Energy Mapping Questions</h2>
                <QuestionFactory questionsArray={questions} categoryId={categoryId} questionType={questionType} subCategory={subCategory} subCategoryId={subCategoryId}/>
                {this.handleBackButton(subCategoryId, categoryId)}
                {this.handleNextButton(categoryId)}
            </div>
        );
    }
}

EnergyMappingQuestions.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.object,
    resetAllAnswers: PropTypes.func
}

export default EnergyMappingQuestions;
