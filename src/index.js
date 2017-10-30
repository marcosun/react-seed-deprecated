/**
 * Insert react app into the dom and enable HMR
 * @module App
 * @requires react
 * @requires react-dom
 * @requires redux
 * @requires react-redux
 * @requires react-router-redux
 * @requires history
 * @requires react-hot-loader
 * @requires {@link module:App/Router}
 * @requires {@link module:App/Store}
 */
import React from 'react';
import ReactDom from 'react-dom';
import {applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {createBrowserHistory as createHistory} from 'history';
import {AppContainer} from 'react-hot-loader';

// Separate local imports from dependencies
import Root from './router';
import configureStore from './store';

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
 * Wrap react app into hot loader container to enable HMR.
 * Having spent days of time debugging and searching for the formula
 * intergrating react, redux, router, and HMR for development mode,
 * only to discover that one should ALWAYS put store on top level of containers.
 * {@link https://github.com/reactjs/react-redux/issues/356#issuecomment-333321556}
 * @param  {Router} Component - React router
 * created by {@link module:App/Router}
 */
const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Root);

/**
 * Watching for HMR
 */
if (module.hot) {
  /**
   * Any changes detected from React App would cause HMR
   */
  module.hot.accept('./router', () => {
    render(Root);
  });
}
