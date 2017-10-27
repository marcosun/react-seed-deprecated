/**
 * This module exports Action Creators
 * @module Login/Actions
 * @requires {@link Login/ActionTypes}
 */
import {TYPING_USERNAME, TYPING_PASSWORD} from './actionTypes';

/**
 * @function
 * @param  {string} username - login username
 * @return {Object} redux action
 */
export const typingUsername = (username) => (
  {
    type: TYPING_USERNAME,
    username,
  }
);
/**
 * @function
 * @param  {string} password - login password
 * @return {Object} redux action
 */
export const typingPassword = (password) => (
  {
    type: TYPING_PASSWORD,
    password,
  }
);
