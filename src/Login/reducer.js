/**
 * This module receives redux actions and responses with action handlers
 * @module Login/Reducer
 * @requires {@link Login/ActionTypes}
 */
import {
  LOGIN_REQUEST,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
} from './actionTypes';

/**
 * Initial state value of react store
 * @type {{isAuthenticating: boolean, errorMsg: string}}
 */
const initialState = {
  isAuthenticating: false,
  errorMsg: '',
};

/**
 * Reducer function manipulates login leaf node of redux store
 * @param {Object} state - Previous leaf node of redux store
 * @param {boolean} state.isAuthenticating=false - Represents status if is authenticating or not
 * @param {string} state.errorMsg='' - Error message from API
 * @param {Object} action Redux action
 * @param {string} action.type Redux action name
 * @return {Object} New redux store leaf node
 */
export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
      };
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        isAuthenticating: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticating: false,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
}
