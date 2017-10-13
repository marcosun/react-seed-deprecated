import { createStore } from 'redux';
import rootReducer from './reducers';

// export default function configureStore(initialState) {
//   const store = createStore(rootReducer, initialState);

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducers', () => {
//       store.replaceReducer(rootReducer);
//     });
//   }

//   return store;
// }

const store = createStore(rootReducer);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(rootReducer);
  });
}

export default store;