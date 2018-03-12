import { fork, all } from 'redux-saga/effects';

import user from './user';

function * startAppSagas() {
  yield all([
    ...user,
  ]);
}

export default function * () {
  yield fork(startAppSagas);
}
