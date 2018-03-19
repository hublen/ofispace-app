import { fork, all } from 'redux-saga/effects';

import user from './user';
import facebook from './facebook';

function * startAppSagas() {
  yield all([
    ...user,
    ...facebook,
  ]);
}

export default function * () {
  yield fork(startAppSagas);
}
