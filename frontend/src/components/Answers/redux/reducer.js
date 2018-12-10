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
  completedEnergyFlow: {
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
  completedEnergyLevel: {
    1 : {
      isValid: null
    },
  },
  completedEnergyMapping: {
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
  error: null,
  answersSent: {
    status: null,
    sent: false
  }
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
            categoryId: categoryId,
            categoryName: userAnswer.categoryName,
            questionSign: userAnswer.questionSign,
            scaleAlpha: userAnswer.scaleAlpha,
            value: userAnswer.answerValue,
            lastUpdated: userAnswer.lastUpdated
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
            categoryId: categoryId,
            categoryName: userAnswer.categoryName,
            subCategoryName: userAnswer.subCategoryName,
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
            categoryId: categoryId,
            categoryName: userAnswer.categoryName,
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
              categoryId: categoryId,
              categoryName: userAnswer.categoryName,
              subCategoryId: subCategoryId,
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
        ...newState.completedEnergyFlow,
        ...newState.completedEnergyFlow,
        [categoryId]: [...userAnswers]
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

const checkIfCompleted = (state, categoryId, questionType, subCategoryId) => {
  let newState = _.clone(state)
  switch (questionType) {
    case 'PS':
      if (newState.completedPersonality[categoryId].length > 0) {
        newState.completedPersonality[categoryId] = {
          ...newState.completedPersonality[categoryId],
          completed: true
        }  
        return newState;
      }
      break;
    case 'EL':
        if (newState.completedEnergyLevel[categoryId].length > 0) {
          newState.completedEnergyLevel[categoryId] = {
            ...newState.completedEnergyLevel[categoryId],
            completed: true
          }  
          return newState;
        }
        break;
    case 'EF':
        if (newState.completedEnergyFlow[categoryId].length > 0) {
          newState.completedEnergyFlow[categoryId] = {
            ...newState.completedEnergyFlow[categoryId],
            completed: true
          }  
          return newState;
        }
        break;
    case 'EM':
        if (newState.completedEnergyMapping[categoryId].length > 0) {
          newState.completedEnergyMapping[categoryId] = {
            ...newState.completedEnergyMapping[categoryId],
            [subCategoryId]: {
              completed: true

            }
          }  
          return newState;
        }
        break;
      default:
        return newState;
  }
  // if (newState.completedPersonality[categoryId].length > 0) {
  //   // console.log(newState);
  //   newState.completedPersonality[categoryId] = {
  //     ...newState.completedPersonality[categoryId],
  //     completed: true
  //   }
  //   // console.log(newState);
  // }
  return newState;
}

const checkAnswerSent = (state, statusCode, answer) => {
  let newState = _.clone(state);
  if (statusCode === 201) {
    newState.answersSent = {
      sent: true,
      status: statusCode,
      answer: answer
    }
    return newState;
  } else {
    newState.answersSent = {
      sent: false,
      status: statusCode,
      answer: answer
    }
    return newState;
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
      const checkState = checkIfCompleted(setCompletedAnsState, action.payload.categoryId);
      return checkState;
    case actionTypes.FETCH_COMPLETED_ANSWERS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    case actionTypes.SEND_ANSWERS:
      return state
    case actionTypes.SEND_ANSWERS_SUCCESS:
      const sentState = checkAnswerSent(state, action.payload.statusCode, action.payload.answer);
      return sentState;
      // console.log(actionTypes.SEND_ANSWERS_SUCCESS);
      // break;
    case actionTypes.SEND_ANSWERS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
  
    case actionTypes.UPDATE_ANSWERS:
      return state
    case actionTypes.UPDATE_ANSWERS_SUCCESS:
      const updateState = checkAnswerSent(state, action.payload.statusCode, action.payload.answer);
      return updateState;
      // console.log(actionTypes.SEND_ANSWERS_SUCCESS);
      // break;
    case actionTypes.UPDATE_ANSWERS_FAILURE:
    default:
      return state;
  }
}

export default answersReducer;
