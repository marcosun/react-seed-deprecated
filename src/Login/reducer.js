/**
 * This module receives redux actions and responses with action handlers
 * @module Login/Reducer
 * @requires {@link Login/ActionTypes}
 */
import {TYPING_USERNAME, TYPING_PASSWORD} from './actionTypes';

const Reducer = (state={username: '', password: ''}, action) => {
  switch (action.type) {
    case TYPING_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case TYPING_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};

/**
 * All action handlers
 * @type {Object}
 */
export default Reducer;
