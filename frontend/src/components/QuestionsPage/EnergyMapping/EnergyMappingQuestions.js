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
            subCategoryId: 1,
            isValid: null
        };

        // this.handlePageClick = this.handlePageClick.bind(this);
        this.handleBackPageClick = this.handleBackPageClick.bind(this);
    }
    componentDidMount() {
        const { resetAllAnswers, profile, fetchCompEMQuestions } = this.props;
        const { categoryId, questionType } = this.state;
        resetAllAnswers();
        fetchCompEMQuestions(profile.userId, categoryId, questionType)
    }

    componentDidUpdate(prevProps, prevState) {
        const { profile, fetchCompEMQuestions } = this.props;
        const { categoryId, questionType } = this.state;
        if (categoryId !== prevState.categoryId) {
            fetchCompEMQuestions(profile.userId, categoryId, questionType);
        }
    }

    // handleSubmit(e) {
    //     const { answers, profile, sendAnswers, updateAnswers } = this.props;
    //     const { categoryId, subCategoryId } = this.state;

    //     if (answers.answeredEnergyMapping[categoryId][subCategoryId].isValid === true) {
    //         Object.values(answers.answeredEnergyMapping).forEach((answer, index) => {
    //             if (answers.completedEnergyMapping[categoryId].completed === true) {
    //                 // Object.values(answers.completedEnergyMapping).forEach((completedAns) => {
    //                     // updateAnswers(profile.userId, completedAns, completedAns.id);
    //                 // })
    //             } else {
    //                 Object.values()
    //                 // sendAnswers(profile.userId, answer, (index + 1));
    //             }
    //         })
    //         this.setState (prevState => {
    //             return {
    //                 categoryId: prevState.categoryId + 1,
    //                 subCategoryId: 1,
    //             }
    //         }, () => {});
    //     }
    // }

    // handleNextButton(subCategoryId) {
    //     if (subCategoryId < 3){
    //         return <button onClick={this.handlePageClick}>Next</button>
    //     } else {
    //         return <button onClick={(e) => this.handleSubmit(e)}>Submit</button>

    //     }
    // }

    handleBackButton(subCategoryId, categoryId) {
        if (subCategoryId === 1 && categoryId === 1) {
            return null;
        } else {
            return <button onClick={this.handleBackPageClick}>Back</button>
        }
    }

    handleIsValid(categoryId, subCategoryId) {
        const { answers } = this.props;
        if (answers.answeredEnergyMapping[categoryId][subCategoryId].isValid === true) {
            this.setState (prevState => {
                return {
                    isValid: true
                }
            }, () => {});
        }
    }

    handleSubmit(e) {
        const { answers, profile, sendAnswers, updateAnswers } = this.props;
        const { categoryId, subCategoryId } = this.state;
        console.log(profile);
        // e.preventDefault();
        if (answers.answeredEnergyMapping[categoryId][subCategoryId].isValid === true) {
            Object.values(answers.answeredEnergyMapping[categoryId][subCategoryId]).forEach((answer, index) => {
                if (answers.completedEnergyMapping[categoryId][subCategoryId].completed === true) {
                    Object.values(answers.completedEnergyMapping[categoryId]).forEach((completedAns) => {
                        updateAnswers(profile.userId, completedAns, completedAns.id);
                    })
                } else {
                    sendAnswers(profile.userId, answer, (index + 1));
                }
            })
            this.setState (prevState => {
                return {
                    categoryId: prevState.categoryId + 1,
                    subCategoryId: 1,
                    isValid: false
                }
            }, () => {});
        }
    }

    // handlePageClick() {
    //     const { answers, sendAnswers, updateAnswers, profile } = this.props;
    //     const { categoryId, subCategoryId } = this.state;

    //     if (categoryId === 1 || categoryId < 6) {
    //       if (subCategoryId < 3) {
    //           if (answers.answeredEnergyMapping[categoryId][subCategoryId].isValid === true) {
    //               this.setState (prevState => {
    //                         return {
    //                           subCategoryId: prevState.subCategoryId + 1
    //                         }
    //                     }, () => {});
    //           }
    //       } else if (subCategoryId === 3) {
    //         if (answers.answeredEnergyMapping[categoryId][subCategoryId].isValid === true) {
    //             Object.values(answers.answeredEnergyMapping[categoryId]).forEach((answer, index) => {
    //                 // console.log(answers.completedEnergyFlow[categoryId].completed);
    //                 if (answers.completedEnergyMapping[categoryId].completed === true) {
    //                     Object.values(answers.completedEnergyMapping[categoryId]).forEach((completedAns) => {
    //                         updateAnswers(profile.userId, completedAns, completedAns.id);
    //                     })
    //                 } else {
    //                     sendAnswers(profile.userId, answer, (index + 1));
    //                 }
    //             });
    //             this.setState (prevState => {
    //               return {
    //                 categoryId: prevState.categoryId + 1,
    //                 subCategoryId: 1,
    //               }
    //           }, () => {});
    //         }
    //       }
    //     }
    // }

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
        const { categoryId, questionType, subCategory, subCategoryId, isValid } = this.state;
 
        return (
            <div>
                <h2>Energy Mapping Questions</h2>
                <QuestionFactory questionsArray={questions} categoryId={categoryId} questionType={questionType} subCategory={subCategory} subCategoryId={subCategoryId}/>
                {this.handleBackButton(subCategoryId, categoryId)}
                {isValid === true ? <button onClick={(e) => this.handleSubmit(e)}>Submit</button> : <button onClick={this.handleIsValid(categoryId, subCategoryId)}>Next</button>}
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
