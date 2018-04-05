import { fork, takeEvery, call, put } from 'redux-saga/effects';

import { receivedCities } from '../actions/cities';
import { fetchAllCities } from '../../data/cities';

import types from '../../constants/actions';

function * handleFetchCities(action) {
  const { response, error } = yield call(
    fetchAllCities,
    action.payload,
  );
  if (!error) {
    yield put(receivedCities(response));
  }
}

function * watchCitiesActions() {
  yield takeEvery(
    types.FETCH_CITIES,
    handleFetchCities,
  );
}

export default [
  fork(watchCitiesActions),
];
