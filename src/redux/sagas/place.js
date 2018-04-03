import { fork, takeEvery, call, put } from 'redux-saga/effects';

import { fetchPlacesByCity } from '../../data/places';

import { placesEntered } from '../actions/places';
import types from '../../constants/actions';

function * handleFetchPlacesByCity(action) {
  const { response, error } = yield call(
    fetchPlacesByCity,
    action.payload,
  );

  console.log(response);

  if (!error) {
    yield put(placesEntered(response));
  }
}

function * watchSessionActions() {
  yield takeEvery(
    types.FETCH_PLACES_BY_CITY,
    handleFetchPlacesByCity,
  );
}

export default [
  fork(watchSessionActions),
];
