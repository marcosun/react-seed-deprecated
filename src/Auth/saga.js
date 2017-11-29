/**
 * This module exports saga
 * @module Auth/Saga
 * @requires redux-saga
 * @requires redux-saga/effects
 * @requires {@link module:Auth/Actions}
 */
import {delay} from 'redux-saga';
import {put} from 'redux-saga/effects';

import {
  loginSucceeded,
  loginFailed,
} from './actions';

/**
 * Auth login request
 * Update username and password when login successfully
 * @param {String} username
 * @param {String} password
 */
export function* loginRequest(username, password) {
  yield delay(10000);

  // api request starts below

  if (username === 'ibus' && password === '123456') { // SUCCESS
    yield put(loginSucceeded(username, password));
  } else { // FAILURE
    yield put(loginFailed('用户名或者密码错误'));
    throw new Error('用户名或者密码错误');
  }
}
