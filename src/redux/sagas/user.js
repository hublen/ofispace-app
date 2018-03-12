import { fork, takeEvery } from 'redux-saga/effects';

import types from '../../constants/actions';

function * handleReceiveUser() {
}

function * watchUserActions() {
  yield takeEvery(
    types.RECEIVE_USER,
    handleReceiveUser,
  );
}

export default [
  fork(watchUserActions),
];
