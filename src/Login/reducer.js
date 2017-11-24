/**
 * This module receives redux actions and responses with action handlers
 * @module Login/Reducer
 * @requires {@link Login/ActionTypes}
 */
import {
  TYPING_USERNAME,
  TYPING_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from './actionTypes';

/**
 * Initial state value of react store
 * @type {{username: string, password: string, isAuthenticating: boolean}}
 */
const initialState = {
  username: '',
  password: '',
  isAuthenticating: false,
};

/**
 * Reducer function manipulates login leaf node of redux store
 * @param {Object} state - Previous leaf node of redux store
 * @param {string} state.username='' - Represents what has typed as login username
 * @param {string} state.password='' - Represents what has typed as login password
 * @param {boolean} state.isAuthenticating=false - Represents status if is authenticating or not
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
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
      };
    default:
      return state;
  }
}
