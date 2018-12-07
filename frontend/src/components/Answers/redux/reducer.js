import actionTypes from './actionTypes';
import _ from 'lodash';

const initialState = {
  answeredPersonality: {
    1: {
      isValid: null
    },
    2: {
      isValid: null
    },
    3: {
      isValid: null
    },
    4: {
      isValid: null
    },
    5: {
      isValid: null
    },
    6: {
      isValid: null
    },
    7: {
      isValid: null
    },
    8: {
      isValid: null
    },
    9: {
      isValid: null
    },
    10: {
      isValid: null
    },
    11: {
      isValid: null
    },
    12: {
      isValid: null
    },
    13: {
      isValid: null
    },
    14: {
      isValid: null
    },
    15: {
      isValid: null
    },
    16: {
      isValid: null
    }
  },
  answeredEnergyFlow: {
    1 : {
      isValid: null
    },
    2 : {
      isValid: null
    },
    3 : {
      isValid: null
    }
  },
  answeredEnergyLevel: {
    1 : {
      isValid: null
    },
  },
  answeredEnergyMapping: {
    1 : {
      1 : {},
      2 : {},
      3 : {}
    },
    2 : {
      1 : {},
      2 : {},
      3 : {}
    },
    3 : {
      1 : {},
      2 : {},
      3 : {}
    },
    4 : {
      1 : {},
      2 : {},
      3 : {}
    },
    5 : {
      1 : {},
      2 : {},
      3 : {}
    },
    6 : {
      1 : {},
      2 : {},
      3 : {}
    },
  },
  completedPersonality: {
    1: {
      isValid: null
    },
    2: {
      isValid: null
    },
    3: {
      isValid: null
    },
    4: {
      isValid: null
    },
    5: {
      isValid: null
    },
    6: {
      isValid: null
    },
    7: {
      isValid: null
    },
    8: {
      isValid: null
    },
    9: {
      isValid: null
    },
    10: {
      isValid: null
    },
    11: {
      isValid: null
    },
    12: {
      isValid: null
    },
    13: {
      isValid: null
    },
    14: {
      isValid: null
    },
    15: {
      isValid: null
    },
    16: {
      isValid: null
    }
  },
}

const updateAnswer = (state, userAnswer, categoryId, questionType, subCategoryId) => {
  let newState = _.clone(state);
  switch (questionType) {
    case 'PS':
      newState.answeredPersonality = {
        ...newState.answeredPersonality,
        [categoryId]: {
          ...newState.answeredPersonality[categoryId],
          [userAnswer.questionId]: {
            ...newState.answeredPersonality[categoryId][userAnswer.questionId],
            question: userAnswer.question,
            questionSign: userAnswer.questionSign,
            value: userAnswer.answerValue,
            lastUpdated: userAnswer.lastUpdated,
    
          }
        }
      }
      return newState;
    case 'EF':
      newState.answeredEnergyFlow = {
        ...newState.answeredEnergyFlow,
        [categoryId]: {
          ...newState.answeredEnergyFlow[categoryId],
          [userAnswer.questionId]: {
            ...newState.answeredEnergyFlow[categoryId][userAnswer.questionId],
            question: userAnswer.question,
            questionSign: userAnswer.questionSign,
            value: userAnswer.answerValue,
            lastUpdated: userAnswer.lastUpdated,
    
          }
        }
      }
      return newState;
    case 'EL':
      newState.answeredEnergyLevel = {
        ...newState.answeredEnergyLevel,
        [categoryId]: {
          ...newState.answeredEnergyLevel[categoryId],
          [userAnswer.questionId]: {
            ...newState.answeredEnergyLevel[categoryId][userAnswer.questionId],
            question: userAnswer.question,
            questionSign: userAnswer.questionSign,
            value: userAnswer.answerValue,
            lastUpdated: userAnswer.lastUpdated,
    
          }
        }
      }
      return newState;
    case 'EM':
      newState.answeredEnergyMapping = {
        ...newState.answeredEnergyMapping,
        [categoryId]: {
          ...newState.answeredEnergyMapping[categoryId],
          [subCategoryId]: {
            ...newState.answeredEnergyMapping[categoryId][subCategoryId],
            [userAnswer.questionId]: {
              ...newState.answeredEnergyMapping[categoryId][subCategoryId][userAnswer.questionId],
              question: userAnswer.question,
              questionSign: userAnswer.questionSign,
              value: userAnswer.answerValue,
              lastUpdated: userAnswer.lastUpdated
            }
          }
        }
      }
      return newState;
    default:
      return state
  }
}



const validateAnswers = (state, answers, questions, categoryId, questionType, subCategoryId) => {
  let newState = _.clone(state);
  switch(questionType) {
    case 'PS':
      if (newState.answeredPersonality[categoryId]) {
        const answersArr = Object.values(newState.answeredPersonality[categoryId]);
        if (answersArr.length - 1 === questions.length) {
          newState.answeredPersonality[categoryId].isValid = true;
        } else {
          newState.answeredPersonality[categoryId].isValid = false;
        }
      }
      return newState;
    case 'EF':
      if (newState.answeredEnergyFlow[categoryId]) {
        const answersArr = Object.values(newState.answeredEnergyFlow[categoryId]);

        if (answersArr.length - 1 === questions.length) {
          newState.answeredEnergyFlow[categoryId].isValid = true;
        } else {
          newState.answeredEnergyFlow[categoryId].isValid = false;
        }
      }
      return newState;
    case 'EL':
      if (newState.answeredEnergyLevel[categoryId]) {
        const answersArr = Object.values(newState.answeredEnergyLevel[categoryId]);
        if (answersArr.length - 1 === questions.length) {
          newState.answeredEnergyLevel[categoryId].isValid = true;
        } else {
          newState.answeredEnergyLevel[categoryId].isValid = false;
        }
      }
      return newState;
    case 'EM':
      if (newState.answeredEnergyMapping[categoryId]) {
        const answersArr = Object.values(newState.answeredEnergyMapping[categoryId][subCategoryId]);
        const questionCategory = questions.filter((question) => question.fields.id === categoryId);
        const questionSubCategory = questionCategory.filter((question) => question.fields.subCategory_id === subCategoryId);

        if (answersArr.length - 1 === questionSubCategory.length) {
          newState.answeredEnergyMapping[categoryId][subCategoryId].isValid = true;
        } else {
          newState.answeredEnergyMapping[categoryId][subCategoryId].isValid = false;
        }
      }
      return newState;
    default:
      return state;
  }
}


const updateCompletedAnswer = (state, userAnswers, categoryId, questionType, subCategoryId) => {
  let newState = _.clone(state);
  switch (questionType) {
    case 'PS':
      newState.completedPersonality = {
        ...newState.completedPersonality,
        ...newState.completedPersonality[categoryId],
        [categoryId]: [...userAnswers]
      }
      return newState;
    case 'EF':
      newState.answeredEnergyFlow = {
        ...newState.answeredEnergyFlow,
        [categoryId]: {
          ...newState.answeredEnergyFlow[categoryId],
          [userAnswers.questionId]: {
            ...newState.answeredEnergyFlow[categoryId][userAnswers.questionId],
            question: userAnswers.question,
            questionSign: userAnswers.questionSign,
            value: userAnswers.answerValue,
            lastUpdated: userAnswers.lastUpdated,
    
          }
        }
      }
      return newState;
    case 'EL':
      newState.answeredEnergyLevel = {
        ...newState.answeredEnergyLevel,
        [categoryId]: {
          ...newState.answeredEnergyLevel[categoryId],
          [userAnswers.questionId]: {
            ...newState.answeredEnergyLevel[categoryId][userAnswers.questionId],
            question: userAnswers.question,
            questionSign: userAnswers.questionSign,
            value: userAnswers.answerValue,
            lastUpdated: userAnswers.lastUpdated,
    
          }
        }
      }
      return newState;
    case 'EM':
      newState.answeredEnergyMapping = {
        ...newState.answeredEnergyMapping,
        [categoryId]: {
          ...newState.answeredEnergyMapping[categoryId],
          [subCategoryId]: {
            ...newState.answeredEnergyMapping[categoryId][subCategoryId],
            [userAnswers.questionId]: {
              ...newState.answeredEnergyMapping[categoryId][subCategoryId][userAnswers.questionId],
              question: userAnswers.question,
              questionSign: userAnswers.questionSign,
              value: userAnswers.answerValue,
              lastUpdated: userAnswers.lastUpdated
            }
          }
        }
      }
      return newState;
    default:
      return state
  }
}

const answersReducer = (state=initialState, action) => {
  switch(action.type){
    case actionTypes.SET_ANSWER:
      const setAnswerState = updateAnswer(state, action.payload.userAnswer, action.payload.categoryId, action.payload.questionType, action.payload.subCategoryId);
      return setAnswerState;
    case actionTypes.SAVE_ANSWERS:
      return {
        ...state
      }
    case actionTypes.VALIDATE_ANSWERS:
      const validAnswerState = validateAnswers(state, action.payload.answers, action.payload.questions, action.payload.categoryId, action.payload.questionType, action.payload.subCategoryId);
      return validAnswerState;
    case actionTypes.RESET_ANSWERS:
      return initialState;
    case actionTypes.FETCH_COMPLETED_ANSWERS:
      return state
    case actionTypes.FETCH_COMPLETED_ANSWERS_SUCCESS:
      const setCompletedAnsState = updateCompletedAnswer(state, action.payload.completedAnswers, action.payload.categoryId, action.payload.questionType)
      return setCompletedAnsState;
    case actionTypes.FETCH_COMPLETED_ANSWERS_FAILURE:
      return state
    default:
      return state;
  }
}

export default answersReducer;
