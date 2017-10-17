import React from 'React';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './App';

/**
 * Wrap React App into hot loader container to enable HMR
 * @param  {Component} Component React-router-redux connected React App
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
