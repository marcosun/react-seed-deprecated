/**
 * Insert react app into the dom and enable HMR
 * @module Index
 * @requires react
 * @requires react-dom
 * @requires react-hot-loader
 * @requires {@link module:App}
 */

import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';

// Separate local imports from dependencies
import App from './App';

/**
 * Wrap React App into hot loader container to enable HMR
 * @param  {Component} Component - react-router-redux connected React App
 * created by {@link module:App}
 */
const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

/**
 * Watching for HMR
 */
if (module.hot) {
  /**
   * Any changes detected from React App would cause HMR
   */
  module.hot.accept('./App', () => {
    render(App);
  });
}
