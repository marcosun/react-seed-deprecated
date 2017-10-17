import {createStore, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import rootReducer from './reducers';

/**
 * Factory composing react store with reducers and middlewares
 * @param  {Object} initialState Instance by calling applyMiddleware
 * @return {Object}              Root store
 */
export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...rootReducer,
      // Add the reducer to your store on the `router` key
      router: routerReducer,
    }),
    initialState
  );

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
