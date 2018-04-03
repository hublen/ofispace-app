import { fork, takeEvery, call, put } from 'redux-saga/effects';

import { cityEntered } from '../actions/location';
import { getActualCity } from '../../data/location';
import { fetchPlacesByCity } from '../actions/places';

import types from '../../constants/actions';

function * handleLocationEntered(action) {
  const { response, error } = yield call(
    getActualCity,
    action.payload,
  );
  if (!error) {
    console.log(response);
    yield put(cityEntered({ city: response }));
  }
}

function * handleCityEntered(action) {
  yield put(fetchPlacesByCity(action.payload.city.id));
}

function * watchLocationActions() {
  yield takeEvery(
    types.LOCATION_CHANGED,
    handleLocationEntered,
  );
  yield takeEvery(
    types.CITY_ENTERED,
    handleCityEntered,
  );
}

export default [
  fork(watchLocationActions),
];
