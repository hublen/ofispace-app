import { fork, takeEvery, call, put, select } from 'redux-saga/effects';
import { PermissionsAndroid, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { fetchCities } from '../actions/cities';
import { locationChanged } from '../actions/location';
import { getActualLocation } from '../selectors/location';
import { getAllCities } from '../selectors/cities';

import types from '../../constants/actions';

const androidPermissionLocation = async () => {
  const request = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
  const granted = await PermissionsAndroid.request(request);
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }
  return false;
};

const getGeo = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});

function * handleSetUpHomeView() {
  let granted = true;
  const actualLocation = yield select(getActualLocation);
  const cities = yield select(getAllCities);

  if (Platform.OS === 'android' && parseFloat(DeviceInfo.getSystemVersion()) >= 6) {
    granted = yield call(androidPermissionLocation);
  }

  if (granted) {
    const location = yield call(getGeo);
    const { latitude, longitude } = location.coords;
    if (!(actualLocation.get('longitude') === longitude && actualLocation.get('latitude') === latitude)) {
      yield put((locationChanged({ longitude, latitude })));
    }
  }

  if (!cities.size) {
    yield put(fetchCities());
  }
}

function * watchSessionActions() {
  yield takeEvery(
    types.SETUP_HOME_VIEW,
    handleSetUpHomeView,
  );
}

export default [
  fork(watchSessionActions),
];
