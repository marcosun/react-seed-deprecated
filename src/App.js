import React from 'react';
import {applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router-dom';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';

// Create a history of your choosing
// We're using a browser history in this case
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

import configureStore from './store';
// Apply our middleware for navigation
const store = configureStore(applyMiddleware(middleware));

import Dashboard from './Dashboard';
import OdAnalytics from './OdAnalytics';

/**
 * react-router-redux connected React App
 * @return {Component}
 */
export default function App() {
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
}
