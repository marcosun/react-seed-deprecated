/**
 * This module exports Action Flags as well as Action creactors
 * @module Actions
 */

/**
 * Add Count flag
 * @type {string}
 */
export const ADD_COUNT = 'INCREMENT';

/**
 * Add Count action creator
 * @function
 * @return {{type: string}} Add Count action
 * whose type field is equal to {@link module:Actions.ADD_COUNT}
 */
export const addCount = () => (
  {
    type: ADD_COUNT,
  }
);
