import { fork, all } from 'redux-saga/effects';

import user from './user';
import facebook from './facebook';
import session from './session';
import location from './location';
import place from './place';
import cities from './cities';

function * startAppSagas() {
  yield all([
    ...user,
    ...facebook,
    ...session,
    ...location,
    ...place,
    ...cities,
  ]);
}

export default function * () {
  yield fork(startAppSagas);
}
