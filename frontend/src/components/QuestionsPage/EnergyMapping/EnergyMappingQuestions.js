import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../Question/QuestionFactory';
import CompletionPage from '../CompletionPage/CompletionPage';


class EnergyMappingQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: 1,
            questionType: 'EM',
            subCategory: true,
            subCategoryId: 1,
            isValid: false,
            isSubmitted: false
        };

        this.handleNextPageClick = this.handleNextPageClick.bind(this);
        this.handleBackPageClick = this.handleBackPageClick.bind(this);
        this.handleOnSubmitClick = this.handleOnSubmitClick.bind(this);
    }

    componentDidMount() {
        const { resetAllAnswers, profile, fetchCompEMQuestions } = this.props;
        const { categoryId, questionType, subCategoryId } = this.state;
        resetAllAnswers();
        fetchCompEMQuestions(profile.userId, categoryId, questionType, subCategoryId)
    }

    componentDidUpdate(prevProps, prevState) {
        const { profile, fetchCompEMQuestions, answers } = this.props;
        const { categoryId, questionType, subCategoryId } = this.state;
        if (subCategoryId !== prevState.subCategoryId || categoryId !== prevState.categoryId) {
            fetchCompEMQuestions(profile.userId, categoryId, questionType, subCategoryId);
        }
    }
    
    checkSubCateValid(answers) {
        const { categoryId, subCategoryId } = this.state;
        if (answers.answeredEnergyMapping[categoryId][subCategoryId].isValid) {
            this.setState((prevState) => {
                return {
                    isValid: true
                }
            }, () => {
                console.log(this.state.isValid);
            })
        }
        console.log(this.state.isValid);
    }

    handleNextPageClick(e) {
        const { answers } = this.props;
        e.preventDefault();
        this.checkSubCateValid(answers);
    }

    handleUpdateSend() {
        const { answers, profile, updateAnswers, sendAnswers } = this.props;
        const { categoryId, subCategoryId } = this.state;
        
        Object.values(answers.answeredEnergyMapping[categoryId][subCategoryId]).forEach((answer, index) => {
            if (answers.completedEnergyMapping[categoryId][subCategoryId].completed === true) {
                Object.values(answers.completedEnergyMapping[categoryId][subCategoryId]).forEach((completedAns) => {
                    updateAnswers(profile.userId, completedAns, completedAns.id);
                })
            } else {
                sendAnswers(profile.userId, answer, (index + 1));
            }
        })
    }
    
    handleOnSubmitClick(e) {
        const { categoryId, subCategoryId } = this.state;
        e.preventDefault();
        
        if (categoryId < 6) {
            if (subCategoryId < 3) {
                this.handleUpdateSend();
                this.setState((prevState) => {
                    return {
                        subCategoryId: prevState.subCategoryId + 1,
                        isValid:false
                    }
                }, () => {
                    console.log(this.state.subCategoryId);
                })
            } else if (subCategoryId === 3) {
                this.handleUpdateSend();
                this.setState((prevState) => {
                    return {
                        categoryId: prevState.categoryId + 1,
                        subCategoryId: 1,
                        isValid:false
                    }
                }, () => {
                    console.log(this.state.categoryId);
                })
            }   
        } else {
            this.handleUpdateSend();
            this.setState((prevState) => {
                return {
                    isSubmitted: true,
                    isValid:false
                }
            }, () => {
                console.log(this.state.isSubmitted);
            })
        }
    }

    handleBackButton(subCategoryId, categoryId) {
        if (subCategoryId === 1 && categoryId === 1) {
            return null;
        } else {
            return <button onClick={this.handleBackPageClick}>Back</button>
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
        const { questions, answers } = this.props;
        const { categoryId, questionType, subCategory, subCategoryId, isValid, isSubmitted } = this.state;
 
        return (
            <div>
                <h2>Energy Mapping Questions</h2>
                {isSubmitted ? <CompletionPage questionType={questionType} /> : <QuestionFactory questionsArray={questions} categoryId={categoryId} questionType={questionType} subCategory={subCategory} subCategoryId={subCategoryId}/>}
                {this.handleBackButton(subCategoryId, categoryId)}
                {isValid ? <button onClick={(e) => this.handleOnSubmitClick(e)}>Submit</button> : <button onClick={(e) => this.handleNextPageClick(e)}>Next</button>}
                {/* {isValid === true ? <button onClick={(e) => this.handleNextPageClick(e)}>Submit</button> : <button onClick={this.handleIsValid(categoryId, subCategoryId)}>Next</button>} */}
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
