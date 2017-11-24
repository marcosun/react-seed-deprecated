/**
 * This module exports Action Creators
 * @module Login/Actions
 * @requires {@link module:Login/ActionTypes}
 */
import {
  TYPING_USERNAME,
  TYPING_PASSWORD,
  LOGIN_AUTHENTICATE,
} from './actionTypes';

/**
 * Typing username action creator
 * @function
 * @param  {string} username - Login username
 * @return {Object} Redux action
 */
export const typingUsername = (username) => (
  {
    type: TYPING_USERNAME,
    username,
  }
);

/**
 * Typing password action creator
 * @function
 * @param  {string} password - Login password
 * @return {Object} Redux action
 */
export const typingPassword = (password) => (
  {
    type: TYPING_PASSWORD,
    password,
  }
);

/**
 * Login authenticate action creator
 * @function
 * @param  {string} username - Login username
 * @param  {string} password - Login password
 * @return {Object} Redux action
 */
export const loginAuthenticate = (username, password) => (
  {
    type: LOGIN_AUTHENTICATE,
    username,
    password,
  }
);
