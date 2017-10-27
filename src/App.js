/**
 * This module integrates redux with react-router and
 * enables HTML5 browser history
 * @module App
 * @requires react
 * @requires redux
 * @requires react-redux
 * @requires history
 * @requires react-router-dom
 * @requires react-router-redux
 * @requires {@link module:Store}
 * @requires {@link module:Dashboard}
 */

import React from 'react';
import {applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createBrowserHistory as createHistory} from 'history';
import {Route} from 'react-router-dom';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';

import configureStore from './store';
import {Container as Dashboard} from './Dashboard';
import {Container as Login} from './Login';

/**
 * Contains HTML5 browser history instance
 */
const history = createHistory();

/**
 * Represents history middleware to be injected into redux
 */
const middleware = routerMiddleware(history);

/**
 * Represents the integration of redux store and react router
 */
const store = configureStore(applyMiddleware(middleware));

/**
 * Create an react app that allows redux to manage router
 * @return {Component} react-router-redux connected React App.
 * The returned value can be directly injected to dom.
 * Otherwise it can also be supplied to {@link module:Index} to enable HMR
 */
export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}
