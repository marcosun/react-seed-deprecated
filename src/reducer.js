/**
 * This module composes root reducer including react-router
 * @module App/Reducer
 * @requires redux
 * @requires react-router-redux
 * @requires {@link module:Dashboard}
 * @requires {@link module:Login}
 */
import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import Auth from './Auth';
import dashboard from './Dashboard';
import login from './Login';

/**
 * Return root reducer
 * Name of each leaf store should match Page Name or Functionality Name
 */
export default combineReducers({
  router,
  form: formReducer,
  Auth,
  login,
  dashboard,
});
