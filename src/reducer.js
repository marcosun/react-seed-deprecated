/**
 * This module composes root reducer including react-router
 * @module App/Reducer
 * @requires redux
 * @requires react-router-redux
 * @requires {@link module:Home}
 * @requires {@link module:Login}
 */
import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import auth from './Auth/reducer';
import home from './Home/reducer';
import login from './Login/reducer';

/**
 * Return root reducer
 * Name of each leaf store should match Page Name or Functionality Name
 */
export default combineReducers({
  router,
  form: formReducer,
  auth,
  login,
  home,
});
