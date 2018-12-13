import answerActions from './actions';
import answersService from '../../../services/answersService';

const setAnswerDispatcher = (categoryId, answerValue, questionId, question, questionSign, lastUpdated, questionType, subCategoryId, scaleAlpha, categoryName, subCategoryName) => {
  return dispatch => {
    dispatch(answerActions.setAnswer(categoryId, Number(answerValue), questionId, question, questionSign, lastUpdated, questionType, subCategoryId, scaleAlpha, categoryName, subCategoryName));
  }
}

const validateAnswersDispatcher = (answers, questions, categoryId, questionType, subCategoryId) => {
  return dispatch => {
    dispatch(answerActions.validateAnswers(answers, questions, categoryId, questionType, subCategoryId))
  }
}

const resetAllAnswersDispatcher = () => {
  return dispatch => {
    dispatch(answerActions.resetAllAnswers());
  }
}

const fetchCompPersonalityDispatcher = (userId, categoryId, questionType) => {
  return dispatch => {
    dispatch(answerActions.fetchCompletedAnswers);
    answersService.fetchCompPersonalityAnswers(userId, categoryId)
    .then(
      response => {
        dispatch(answerActions.fetchCompletedAnswersSuccess(response.data, categoryId, questionType));
      },
      error => {
        dispatch(answerActions.fetchCompletedAnswersFailure(error.data));
      }
    );
  }
}

const fetchCompEFDispatcher = (userId, categoryId, questionType) => {
  return dispatch => {
    dispatch(answerActions.fetchCompletedAnswers);
    answersService.fetchCompEFAnswers(userId, categoryId)
    .then(
      response => {
        dispatch(answerActions.fetchCompletedAnswersSuccess(response.data, categoryId, questionType));
      },
      error => {
        dispatch(answerActions.fetchCompletedAnswersFailure(error.data));
      }
    );
  }
}

const fetchCompELDispatcher = (userId, categoryId, questionType) => {
  return dispatch => {
    dispatch(answerActions.fetchCompletedAnswers);
    answersService.fetchCompELAnswers(userId, categoryId)
    .then(
      response => {
        dispatch(answerActions.fetchCompletedAnswersSuccess(response.data, categoryId, questionType));
      },
      error => {
        dispatch(answerActions.fetchCompletedAnswersFailure(error.data));
      }
    );
  }
}

const fetchCompEMDispatcher = (userId, categoryId, questionType) => {
  return dispatch => {
    dispatch(answerActions.fetchCompletedAnswers);
    answersService.fetchCompEMAnswers(userId, categoryId)
    .then(
      response => {
        dispatch(answerActions.fetchCompletedAnswersSuccess(response.data, categoryId, questionType));
      },
      error => {
        dispatch(answerActions.fetchCompletedAnswersFailure(error.data));
      }
    );
  }
}

const sendPSAnswersDispatcher = (userId, answer, index) => {
  return dispatch => {
    dispatch(answerActions.sendAnswers);
    if (answer !== true) {
      answersService.sendPersonalityAnswers(userId, answer, index)
      .then(
        response => {
          dispatch(answerActions.sendAnswersSuccess(response.data));
        },
        error => {
          dispatch(answerActions.sendAnswersFailure(error.data));
        }
      ); 
    }
  }
}

const sendEFAnswersDispatcher = (userId, answer, index) => {
  return dispatch => {
    dispatch(answerActions.sendAnswers);
    if (answer !== true) {
      answersService.sendEnergyFlowAnswers(userId, answer, index)
      .then(
        response => {
          dispatch(answerActions.sendAnswersSuccess(response.data));
        },
        error => {
          dispatch(answerActions.sendAnswersFailure(error.data));
        }
      ); 
    }
  }
}

const sendELAnswersDispatcher = (userId, answer, index) => {
  return dispatch => {
    dispatch(answerActions.sendAnswers);
    if (answer !== true) {
      answersService.sendEnergyLevelAnswers(userId, answer, index)
      .then(
        response => {
          dispatch(answerActions.sendAnswersSuccess(response.data));
        },
        error => {
          dispatch(answerActions.sendAnswersFailure(error.data));
        }
      ); 
    }
  }
}

const sendEMAnswersDispatcher = (userId, answer, index) => {
  return dispatch => {
    dispatch(answerActions.sendAnswers);
    if (answer !== true) {
      answersService.sendEnergyMappingAnswers(userId, answer, index)
      .then(
        response => {
          dispatch(answerActions.sendAnswersSuccess(response.data));
        },
        error => {
          dispatch(answerActions.sendAnswersFailure(error.data));
        }
      ); 
    }
  }
}

const updatePSAnswersDispatcher = (userId, answer, index) => {
  return dispatch => {
    dispatch(answerActions.updateAnswers);
    if (answer !== true) {
      answersService.updatePersonalityAnswers(userId, answer, index)
      .then(
        response => {
          dispatch(answerActions.updateAnswersSuccess(response.data));
        },
        error => {
          dispatch(answerActions.updateAnswersFailure(error.data));
        }
      ); 
    }
  }
}

const updateEFAnswersDispatcher = (userId, answer, index) => {
  return dispatch => {
    dispatch(answerActions.updateAnswers);
    if (answer !== true) {
      answersService.updateEnergyFlowAnswers(userId, answer, index)
      .then(
        response => {
          dispatch(answerActions.updateAnswersSuccess(response.data));
        },
        error => {
          dispatch(answerActions.updateAnswersFailure(error.data));
        }
      ); 
    }
  }
}

const updateELAnswersDispatcher = (userId, answer, index) => {
  return dispatch => {
    dispatch(answerActions.updateAnswers);
    if (answer !== true) {
      answersService.updateEnergyLevelAnswers(userId, answer, index)
      .then(
        response => {
          dispatch(answerActions.updateAnswersSuccess(response.data));
        },
        error => {
          dispatch(answerActions.updateAnswersFailure(error.data));
        }
      ); 
    }
  }
}

const updateEMAnswersDispatcher = (userId, answer, index) => {
  return dispatch => {
    dispatch(answerActions.updateAnswers);
    if (answer !== true) {
      answersService.updateEnergyMappingAnswers(userId, answer, index)
      .then(
        response => {
          dispatch(answerActions.updateAnswersSuccess(response.data));
        },
        error => {
          dispatch(answerActions.updateAnswersFailure(error.data));
        }
      ); 
    }
  }
}



const answersDispatchers = {
  setAnswerDispatcher,
  resetAllAnswersDispatcher,
  validateAnswersDispatcher,
  fetchCompPersonalityDispatcher,
  fetchCompEFDispatcher,
  fetchCompELDispatcher,
  fetchCompEMDispatcher,
  sendPSAnswersDispatcher,
  sendEFAnswersDispatcher,
  sendELAnswersDispatcher,
  sendEMAnswersDispatcher,
  updatePSAnswersDispatcher,
  updateEFAnswersDispatcher,
  updateELAnswersDispatcher,
  updateEMAnswersDispatcher
};

export default answersDispatchers;

