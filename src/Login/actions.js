/**
 * This module exports Action Creators
 * @module Login/Actions
 * @requires {@link module:Login/ActionTypes}
 */
import {
  LOGIN_REQUEST,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
} from './actionTypes';

/**
 * Login request action creator
 * @function
 * @param  {string} username - Login username
 * @param  {string} password - Login password
 * @return {Object} Redux action
 */
export const loginRequest = ({username, password}) => (
  {
    type: LOGIN_REQUEST,
    username,
    password,
  }
);

/**
 * Login succeeded action creator
 * @function
 * @return {Object} Redux action
 */
export const loginSucceeded = () => (
  {
    type: LOGIN_SUCCEEDED,
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
