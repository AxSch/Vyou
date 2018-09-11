import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {appReducer, storeState} from '../mainRedux/mainReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware));

const appStore = createStore(
      appReducer,
      storeState,
      enhancer
  );

export default appStore;