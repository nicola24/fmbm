import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './rootReducer';
import App from './components/Router';

// const store = createStore(
//   rootReducer,
// );

const store = compose(window.devToolsExtension ? (
  window.devToolsExtension()) : f => f)(createStore)(rootReducer);

const MOUNT_NODE = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE,
);
