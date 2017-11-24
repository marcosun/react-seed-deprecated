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
import {put, takeEvery, select} from 'redux-saga/effects';

import {
  loginSuccess,
} from './actions';

import {
  LOGIN_REQUEST as LOGIN_PAGE_LOGIN_REQUEST,
} from '../Login/actionTypes';
import {
  loginSuccess as loginPageloginSuccess,
} from '../Login/actions';

/**
 * Auth login request
 * Update username and password when login successfully
 * @param {String} username
 * @param {String} password
 */
export function* loginRequest(username, password) {
  yield delay(1000);

  // api request starts below

  yield put(loginSuccess(username, password));
}

/**
 * Find username & password from state
 * Call auth login request
 * Fire login page login success event
 */
export function* loginPageLoginRequest() {
  const {username, password} = yield select((state) => (state.login));

  yield loginRequest(username, password);
  yield put(loginPageloginSuccess());
}

/**
 * Watch login request from login page
 */
export default function* watchLoginPageLoginRequest() {
  yield takeEvery(LOGIN_PAGE_LOGIN_REQUEST, loginPageLoginRequest);
}
