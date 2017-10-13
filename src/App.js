import React from 'react';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

import configureStore from './store';
const store = configureStore(applyMiddleware(middleware)); // Apply our middleware for navigating

import Dashboard from './Dashboard';
import OdAnalytics from './OdAnalytics';

export default function() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/odAnalytics" component={OdAnalytics}/>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};