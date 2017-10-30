/**
 * This module receives redux actions and responses with action handlers
 * @module Login/Reducer
 * @requires {@link Login/ActionTypes}
 */
import {TYPING_USERNAME, TYPING_PASSWORD} from './actionTypes';

/**
 * Initial state value of react store
 * @type {{username: string, password: string}}
 */
const initialState = {
  username: '',
  password: '',
};

/**
 * Reducer function manipulates login leaf node of redux store
 * @param {Object} state - Previous leaf node of redux store
 * @param {string} state.username='' - Represents what has typed as login username
 * @param {string} state.password='' - Represents what has typed as login password
 * @param {Object} action Redux action
 * @param {string} action.type Redux action name
 * @return {Object} New redux store leaf node
 */
export default function Reducer(state=initialState, action) {
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
}
