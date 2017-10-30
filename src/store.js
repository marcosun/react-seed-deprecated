/**
 * This module composes redux store instance.
 * Redux store manages many complex states for the app
 * @module App/Store
 * @requires redux
 * @requires {@link module:App/Reducer}
 */
import {createStore} from 'redux';

import rootReducer from './reducer';

/**
 * Factory composing react store with reducers and middlewares
 * @param  {Object} initialState - Instance by calling applyMiddleware
 * @return {Object}              Root store
 */
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
