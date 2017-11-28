/**
 * This module receives redux actions and responses with action handlers
 * @module Auth/Reducer
 * @requires {@link Auth/ActionTypes}
 */
import {
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
} from './actionTypes';

/**
 * Initial state value of react store
 * @type {{username: string, password: string, errorMsg: string}}
 */
const initialState = {
  username: '',
  password: '',
  errorMsg: '',
};

/**
 * Reducer function manipulates auth leaf node of redux store
 * @param {Object} state - Previous leaf node of redux store
 * @param {Object} state.username - Represents username
 * @param {Object} state.password - Represents password
 * @param {Object} state.errorMsg - Represents error message
 * @param {Object} action Redux action
 * @param {string} action.type Redux action name
 * @return {Object} New redux store leaf node
 */
export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        username: action.username,
        password: action.password,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        username: '',
        password: '',
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
}
