/**
 * This module exports saga
 * @module Login/Saga
 * @requires redux-saga/effects
 * @requires redux-form
 * @requires {@link module:Auth/Saga}
 * @requires {@link module:Login/Actions}
 */
import {put, takeEvery} from 'redux-saga/effects';
import {SubmissionError} from 'redux-form';

import {
  loginRequest as authLoginRequest,
} from '../Auth/saga';
import {
  login,
} from './actions';

/**
 * Call auth login request
 * If authen succeeded, Fire login succeeded event
 * If authen failed, Fire login failed event
 */
export function* loginRequest({payload: {username, password}}) {
  try {
    yield authLoginRequest({username, password});
    yield put(login.success());
  } catch (err) {
    const formError = new SubmissionError({
      username: err.details[0].field === 'username'
        ? err.details[0].issue
        : '', // specific field error
      password: err.details[0].field === 'password'
        ? err.details[0].issue
        : '', // specific field error
      _error: err.message, // global form error
    });

    yield put(login.failure(formError));
  }
}

/**
 * Watch login request
 */
export default function* watchLoginRequest() {
  yield takeEvery(login.REQUEST, loginRequest);
}
