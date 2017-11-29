/**
 * This module receives redux actions and responses with action handlers
 * @module Login/Reducer
 * @requires {@link Login/Actions}
 */
import {
  login,
} from './actions';

/**
 * Initial state value of react store
 * @type {}
 */
const initialState = {
  
};

/**
 * Reducer function manipulates login leaf node of redux store
 * @param {Object} state - Previous leaf node of redux store
 * @param {Object} action Redux action
 * @param {string} action.type Redux action name
 * @return {Object} New redux store leaf node
 */
export default function Reducer(state=initialState, action) {
  return state;
}
