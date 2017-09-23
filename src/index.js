import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import App from './app';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router >
          <App />
      </Router>
  </Provider>
  , document.querySelector('.container'));


