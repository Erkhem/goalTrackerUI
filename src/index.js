import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Dashboard from './components/dashboard';
import NewGoal from './components/newGoal';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router >
          <div>
              <Link to="/newGoal">Add goal :)</Link>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/newGoal" component={NewGoal}/>
          </div>
      </Router>
  </Provider>
  , document.querySelector('.container'));


