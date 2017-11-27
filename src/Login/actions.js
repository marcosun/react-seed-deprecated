/**
 * This module exports Action Creators
 * @module Login/Actions
 * @requires {@link module:Login/ActionTypes}
 */
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
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
 * Login success action creator
 * @function
 * @return {Object} Redux action
 */
export const loginSuccess = () => (
  {
    type: LOGIN_SUCCESS,
  }
);
