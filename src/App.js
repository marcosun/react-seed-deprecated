import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// import configureStore from './store';

// const store = configureStore();

import store from './store';

import Dashboard from './Dashboard';
import OdAnalytics from './OdAnalytics';

export default function() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/odAnalytics" component={OdAnalytics}/>
        </div>
      </Router>
    </Provider>
  );
};