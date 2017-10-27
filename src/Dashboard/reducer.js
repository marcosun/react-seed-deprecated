/**
 * This module receives redux actions and responses with action handlers
 * @module Dashboard/Reducer
 * @requires {@link module:Actions}
 */

import {ADD_COUNT} from './actionTypes';

/**
 * Count Event Handler
 * @function
 * @param  {?number} state=0 - previous state
 * @param  {Object} action - redux action
 * @param  {string} action.type - should be derived from
 * Action Flags {@link module:Actions}
 * @return {Object} next state
 */
const Reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNT: // If ADD_COUNT action is received, increment by 1
      return state + 1;
    default: // Return previous state as default
      return state;
  }
};

/**
 * All action handlers
 * @type {Object}
 */
export default Reducer;
