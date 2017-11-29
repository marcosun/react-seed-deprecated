/**
 * This module receives redux actions and responses with action handlers
 * @module Auth/Reducer
 * @requires {@link Auth/ActionTypes}
 */
import {
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
} from './actionTypes';

// Initial state value of react store
const initialState = {
  user: {
    username: '',
    token: '',
    isLoggedIn: false,
  },
  error: {
    name: '',
    details: [
      // {
      //   field: '',
      //   value: '',
      //   issue: '',
      //   location: '',
      // },
    ],
    message: '',
  },
};

/**
 * Reducer function manipulates auth leaf node of redux store
 * @param {Object} state - Previous leaf node of redux store
 * @param {Object} state.user - Represents a user
 * @param {string} state.user.username - Represents username
 * @param {string} state.user.token - Represents access token
 * @param {boolean} state.user.isLoggedIn - Log in status
 * @param {Object} state.error - Represents error
 * @param {string} state.error.name - A human-readable,
 * unique name for the error
 * @param {string} state.error.details - An array that contains
 * individual instance(s) of the error with specifics such as the following.
 * This field is required for client side errors(4xx).
 * @param {string} state.error.details.field - name of
 * the path parameter or query parameter
 * @param {string} state.error.details.value - Value of the field in error
 * @param {string} state.error.details.issue - Reason for error
 * @param {string} state.error.details.location - The location of
 * the field in the error, either query, path, or body.
 * @param {string} state.error.message - A human-readable message,
 * describing the error
 * @param {Object} action Redux action
 * @param {string} action.type Redux action name
 * @return {Object} New redux store leaf node
 */
export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        user: {
          username: action.payload.username,
          token: action.payload.token,
          isLoggedIn: true,
        },
        error: {...initialState.error}, // Clear error
      };
    case LOGIN_FAILED:
      return {
        ...state,
        user: {...initialState.user}, // Clear user
        error: {
          name: action.payload.name,
          details: action.payload.details.map((detail) => {
            return {
              field: detail.field,
              value: detail.value,
              issue: detail.issue,
              location: detail.location,
            };
          }),
          message: action.payload.message,
        },
      };
    default:
      return state;
  }
}
