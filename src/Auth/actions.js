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
 * @param {Object} payload
 * @param  {string} payload.username - Login username
 * @param  {string} payload.token - Access token
 * @return {Object} Redux action
 */
export const loginSucceeded = ({username, token}) => (
  {
    type: LOGIN_SUCCEEDED,
    payload: {
      username,
      token,
    },
  }
);

/**
 * Login failed action creator
 * @function
 * @param {Object} payload
 * @param  {string} payload.name - A human-readable, unique name for the error
 * @param  {Object} payload.details - An array that contains
 * individual instance(s) of the error with specifics such as the following.
 * This field is required for client side errors(4xx).
 * @param  {string} payload.details.field - name of the path parameter or query parameter
 * @param  {string} payload.details.value - Value of the field in error
 * @param  {string} payload.details.issue - Reason for error
 * @param  {string} payload.details.location - The location of the field in the error,
 * either query, path, or body.
 * @param  {string} message - A human-readable message, describing the error
 * If this field is not present, the default value is body.
 * @return {Object} Redux action
 */
export const loginFailed = ({name, details, message}) => (
  {
    type: LOGIN_FAILED,
    payload: {
      name,
      details,
      message,
    },
  }
);
