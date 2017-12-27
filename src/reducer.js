/**
 * This module composes root reducer including react-router
 * @module App/Reducer
 * @requires redux
 * @requires react-router-redux
 */
import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import auth from './Auth/reducer';

/**
 * This is a create reducer function
 * It returns current permanent and asynchronously loaded reducers
 * @param  {function} asyncReducers - asynchronously loaded recuders
 * @return {object} - root reducer
 */
export default function createReducer(asyncReducers) {
  /**
   * Return root reducer
   * Name of each leaf store should match Page Name or Functionality Name
   */
  return combineReducers({
    // Permanent redux reducers
    router,
    form: formReducer,
    auth,
    // Aync reducers
    ...asyncReducers,
  });
}
