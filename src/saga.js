/**
 * Saga entrance file
 * @requires redux-saga
 * @requires redux-form-saga
 * @requires {@link module:Auth/Saga}
 */
import {all} from 'redux-saga/effects';

import formActionSaga from 'redux-form-saga';
import {Saga as login} from './Login';

/**
 * [*rootSaga description]
 * @yield {[type]} [description]
 */
export default function* rootSaga() {
  yield all([
    formActionSaga(),
    login(),
  ]);
}
