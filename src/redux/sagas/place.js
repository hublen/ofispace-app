import { fork, takeEvery, call, put, select } from 'redux-saga/effects';

import { getPlaceById } from '../selectors/places';
import { fetchPlacesByCity, fetchPlaceAddress, fetchPlaceAmenities, fetchPlaceImages } from '../../data/places';
import { placesEntered, receivedPlaceAddress, receivedPlaceAmenities, receivedPlaceImages } from '../actions/places';
import types from '../../constants/actions';

function * handleFetchPlacesByCity(action) {
  if (action.payload) {
    const { response, error } = yield call(
      fetchPlacesByCity,
      action.payload,
    );

    if (!error) {
      yield put(placesEntered(response));
    }
  }
}

function * handleSetActualPlace(action) {
  const id = action.payload;
  const place = yield select(getPlaceById, id);

  if (!place.has('Address')) {
    const { address } = yield call(
      fetchPlaceAddress,
      id,
    );
    if (address) {
      yield put(receivedPlaceAddress({ id, address }));
    }
  }

  if (!place.has('Amenities')) {
    const { amenities } = yield call(
      fetchPlaceAmenities,
      id,
    );
    if (amenities) {
      yield put(receivedPlaceAmenities({ id, amenities }));
    }
  }

  if (!place.has('Images')) {
    const { images } = yield call(
      fetchPlaceImages,
      id,
    );
    if (images) {
      yield put(receivedPlaceImages({ id, images }));
    }
  }
}

function * watchSessionActions() {
  yield takeEvery(types.FETCH_PLACES_BY_CITY, handleFetchPlacesByCity);
  yield takeEvery(types.SET_ACTUAL_PLACE, handleSetActualPlace);
}

export default [
  fork(watchSessionActions),
];
