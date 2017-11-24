/**
 * This module exports Action Creators
 * @module Auth/Actions
 * @requires {@link module:Auth/ActionTypes}
 */
import {
  LOGIN_SUCCESS,
} from './actionTypes';

/**
 * Login request action creator
 * @function
 * @param  {string} username - Login username
 * @param  {string} password - Login password
 * @return {Object} Redux action
 */
export const loginSuccess = (username, password) => (
  {
    type: LOGIN_SUCCESS,
    username,
    password,
  }
);
