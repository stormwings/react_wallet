import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.scss';
import App from './App';

// redux persist information
import store from './redux/store';
export let persistor = store();

ReactDOM.render(
  <Provider store={persistor.store}>
    <PersistGate loading={null} persistor={persistor.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

export const reduxStore = persistor.store;
