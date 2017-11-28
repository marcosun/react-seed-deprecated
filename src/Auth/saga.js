/**
 * This module exports saga
 * @module Auth/Saga
 * @requires redux-saga
 * @requires redux-saga/effects
 * @requires {@link module:Auth/Actions}
 * @requires {@link module:Login/ActionTypes}
 * @requires {@link module:Login/Actions}
 */
import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';

import {
  loginSucceeded,
  loginFailed,
} from './actions';

import {
  LOGIN_REQUEST as LOGIN_PAGE_LOGIN_REQUEST,
} from '../Login/actionTypes';
import {
  loginSucceeded as loginPageLoginSucceeded,
  loginFailed as loginPageLoginFailed,
} from '../Login/actions';

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

/**
 * Call auth login request
 * If authen succeeded, Fire login page login succeeded event
 * If authen failed, Fire login page login failed event
 */
export function* loginPageLoginRequest({type, username, password}) {
  try {
    yield loginRequest(username, password);
    yield put(loginPageLoginSucceeded());
  } catch (e) {
    yield put(loginPageLoginFailed(e.message));
  }
}

/**
 * Watch login request from login page
 */
export default function* watchLoginPageLoginRequest() {
  yield takeEvery(LOGIN_PAGE_LOGIN_REQUEST, loginPageLoginRequest);
}
