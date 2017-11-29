/**
 * This module exports saga
 * @module Login/Saga
 * @requires redux-saga/effects
 * @requires {@link module:Auth/Saga}
 * @requires {@link module:Login/ActionTypes}
 * @requires {@link module:Login/Actions}
 */
import {put, takeEvery} from 'redux-saga/effects';

import {
  loginRequest as authLoginRequest,
} from '../Auth/saga';
import {
  LOGIN_REQUEST,
} from './actionTypes';
import {
  loginSucceeded,
  loginFailed,
} from './actions';

/**
 * Call auth login request
 * If authen succeeded, Fire login succeeded event
 * If authen failed, Fire login failed event
 */
export function* loginRequest({type, username, password}) {
  try {
    yield authLoginRequest(username, password);
    yield put(loginSucceeded());
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}

/**
 * Watch login request from login page
 */
export default function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUEST, loginRequest);
}
