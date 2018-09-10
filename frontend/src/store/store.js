import { createStore } from 'redux';
import {appReducer, storeState} from '../mainRedux/mainReducer';

const appStore = createStore(appReducer, storeState);

export default appStore;