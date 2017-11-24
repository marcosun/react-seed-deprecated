import {all} from 'redux-saga/effects';

import {Saga as auth} from './Auth';

/**
 * [*rootSaga description]
 * @yield {[type]} [description]
 */
export default function* rootSaga() {
  yield all([
    auth(),
  ]);
}
