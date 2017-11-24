/**
 * This module receives redux actions and responses with action handlers
 * @module Auth/Reducer
 * @requires {@link Auth/ActionTypes}
 */
import {
  LOGIN_SUCCESS,
} from './actionTypes';

/**
 * Initial state value of react store
 * @type {{username: string, password: string}}
 */
const initialState = {
  username: '',
  password: '',
};

/**
 * Reducer function manipulates auth leaf node of redux store
 * @param {Object} state - Previous leaf node of redux store
 * @param {Object} state.username - Represents username
 * @param {Object} state.password - Represents password
 * @param {Object} action Redux action
 * @param {string} action.type Redux action name
 * @return {Object} New redux store leaf node
 */
export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
        password: action.password,
      };
    default:
      return state;
  }
}
