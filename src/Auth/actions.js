/**
 * This module exports Action Creators
 * @module Auth/Actions
 * @requires {@link module:Auth/ActionTypes}
 */
import {
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
} from './actionTypes';

/**
 * Login succeeded action creator
 * @function
 * @param  {string} username - Login username
 * @param  {string} password - Login password
 * @return {Object} Redux action
 */
export const loginSucceeded = (username, password) => (
  {
    type: LOGIN_SUCCEEDED,
    username,
    password,
  }
);

/**
 * Login failed action creator
 * @function
 * @param  {string} errorMsg - Error message
 * @return {Object} Redux action
 */
export const loginFailed = (errorMsg) => (
  {
    type: LOGIN_FAILED,
    errorMsg,
  }
);
