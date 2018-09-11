import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {appReducer, storeState} from '../mainRedux/mainReducer';

const loggerMiddleware = createLogger();

const appStore = createStore(
      appReducer,
      storeState,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
  );

export default appStore;