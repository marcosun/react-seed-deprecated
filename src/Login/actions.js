/**
 * This module exports Action Creators
 * @module Login/Actions
 * @requires redux-form-saga
 */
import {createFormAction} from 'redux-form-saga';

/**
 * Export login object created by redux-form-saga
 * It links redux-form and redux-saga
 */
export const login = createFormAction('LOGIN/LOGIN');
