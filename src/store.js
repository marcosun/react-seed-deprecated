import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import rootReducer from './reducers';

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...rootReducer,
      router: routerReducer, // Add the reducer to your store on the `router` key
    }),
    initialState
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}