/**
 * This module composes redux store instance.
 * Redux store manages many complex states for the app
 * @module Store
 * @requires redux
 * @requires react-router-redux
 * @requires {@link module:Reducer}
 */

import {createStore, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Reducer from './reducer';

/**
 * Factory composing react store with reducers and middlewares
 * @param  {Object} initialState Instance by calling applyMiddleware
 * @return {Object}              Root store
 */
export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...Reducer,
      // Add the reducer to your store on the `router` key
      router: routerReducer,
    }),
    initialState
  );

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(Reducer);
    });
  }

  return store;
}
