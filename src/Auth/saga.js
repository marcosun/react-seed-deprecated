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
 * @param {Object} payload
 * @param {String} payload.username
 * @param {String} payload.password
 */
export function* loginRequest({username, password}) {
  yield delay(1000);

  // api request starts below
  if (username !== 'ibus') {
    const failureResponse = {
      name: 'VALIDATION_ERROR',
      details: [{
        field: 'username',
        value: username,
        issue: '用户名错误',
        location: 'body',
      }],
      message: '账号或密码错误，请重新登录',
    };

    yield put(loginFailed(failureResponse));

    // Reject promise so it can be catched by parent saga
    yield Promise.reject(failureResponse);
  } else if (password !== '123456') {
    const failureResponse = {
      name: 'VALIDATION_ERROR',
      details: [{
        field: 'password',
        issue: '密码错误',
        location: 'body',
      }],
      message: '账号或密码错误，请重新登录',
    };

    yield put(loginFailed(failureResponse));

    // Reject promise so it can be catched by parent saga
    yield Promise.reject(failureResponse);
  } else {
    yield put(loginSucceeded({username, token: '234e8fvq2efwcsgfrw'}));
  }
}
