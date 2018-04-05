import { fork, takeEvery, call, put } from 'redux-saga/effects';

import { cityEntered } from '../actions/location';
import { setActualCity } from '../actions/session';
import { getActualCity } from '../../data/location';
import { fetchPlacesByCity } from '../actions/places';

import types from '../../constants/actions';

function * handleLocationEntered(action) {
  const { response, error } = yield call(
    getActualCity,
    action.payload,
  );
  if (!error) {
    yield put(setActualCity(response));
    yield put(cityEntered({ city: response }));
  }
}

function * handleSetActualCity(action) {
  yield put(fetchPlacesByCity(action.payload.id));
}

function * watchLocationActions() {
  yield takeEvery(
    types.LOCATION_CHANGED,
    handleLocationEntered,
  );
  yield takeEvery(
    types.SET_ACTUAL_CITY,
    handleSetActualCity,
  );
}

export default [
  fork(watchLocationActions),
];
