import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {appStore, persistedStore} from './store/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistedStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
