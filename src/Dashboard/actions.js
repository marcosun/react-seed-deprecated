/**
 * This module exports Action Creators
 * @module Dashboard/Actions
 * @requires {@link module:Dashboard/ActionTypes}
 */
import {ADD_COUNT} from './actionTypes';

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
