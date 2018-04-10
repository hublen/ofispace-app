import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';

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
  if (!error && response) {
    yield put(setActualCity(fromJS(response)));
    yield put(cityEntered({ city: fromJS(response) }));
  }
}

function * handleSetActualCity(action) {
  if (action.payload) {
    yield put(fetchPlacesByCity(action.payload.get('id')));
  }
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
