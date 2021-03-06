import questionRequestActions from './actions';
import questionsService from '../../../services/questionsService';

const requestPSQuestionsDispatcher = (category) => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
    questionsService.personalityQuestions()
      .then(
        response => {
          dispatch(questionRequestActions.questionRequestSuccess(response.data, category));
        },
        error => {
          dispatch(questionRequestActions.questionRequestFailure(error.data));
        }
      );
  }
}

const requestEFQuestionsDispatcher = (category) => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
    questionsService.energyFlowQuestions()
      .then(
        response => {
          dispatch(questionRequestActions.questionRequestSuccess(response.data, category));
        },
        error => {
          dispatch(questionRequestActions.questionRequestFailure(error.data));
        }
      );
  }
}

const requestELQuestionsDispatcher = (category) => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
    questionsService.energyLevelQuestions()
      .then(
        response => {
          dispatch(questionRequestActions.questionRequestSuccess(response.data, category));
        },
        error => {
          dispatch(questionRequestActions.questionRequestFailure(error.data));
        }
      );
  }
}

const requestEMQuestionsDispatcher = (category) => {
  return dispatch => {
    dispatch(questionRequestActions.questionRequest);
    questionsService.energyMappingQuestions()
      .then(
        response => {
          dispatch(questionRequestActions.questionRequestSuccess(response.data, category));
        },
        error => {
          dispatch(questionRequestActions.questionRequestFailure(error.data));
        }
      );
  }
}

const questionsDispatchers = {
  requestPSQuestionsDispatcher,
  requestEFQuestionsDispatcher,
  requestELQuestionsDispatcher,
  requestEMQuestionsDispatcher
}

export default questionsDispatchers;
