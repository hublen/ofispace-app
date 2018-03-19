import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { Alert, AsyncStorage } from 'react-native';
import { key } from '../../api';

import { userEntered } from '../actions/user';
import { changeAuthTab } from '../actions/session';
import { checkLogin } from '../selectors/user';
import { postLogin, postSignUp, postRecovery, checkUserTokenInfo } from '../../data/user';

import tabs from '../../constants/tabs';
import types from '../../constants/actions';
import messages from '../../constants/messages';

const onSuccessLogin = async (data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log(error); // eslint-disable-line
  }
};

const removeAuthToken = () => {
  AsyncStorage.removeItem(key);
};

function * handleRequestUserLogin(action) {
  const { response } = yield call(
    postLogin,
    action.payload.data,
  );
  if (response.status === 'success') {
    yield put(userEntered(response.data));
    return action.payload.navigation.navigate('home');
  }

  return Alert.alert(
    messages.errorHeader,
    'Asegurate de que tu correo electrónico y contraseña son correctas.',
    [{ text: 'OK' }],
  );
}

function * handleRequestSignUp(action) {
  const { response } = yield call(
    postSignUp,
    action.payload,
  );
  if (response.status === 'success') {
    Alert.alert(
      messages.success,
      'Haz creado tú cuenta exitosamente, para proceder confirma tu correo electrónico e inicia sesión.',
      [{ text: 'OK' }],
    );
    return yield put(changeAuthTab(tabs.LOGIN_TAB));
  }

  return Alert.alert(
    messages.errorHeader,
    'No hemos podido, asegurate de que no haz creado una cuenta antes con este correo electrónico.',
    [{ text: 'OK' }],
  );
}

function * handleRequestRecoverPassword(action) {
  const { response } = yield call(
    postRecovery,
    action.payload,
  );
  if (response.status === 'success') {
    Alert.alert(
      messages.success,
      'Hemos enviado un correo con indicaciones para recuperar tu contraseña.',
      [{ text: 'OK' }],
    );
    return yield put(changeAuthTab(tabs.LOGIN_TAB));
  }

  return Alert.alert(
    messages.errorHeader,
    'No hemos podido, asegurate de que haz creado una cuenta antes con este correo electrónico.',
    [{ text: 'OK' }],
  );
}

function * handleReceiveUser(action) {
  yield call(onSuccessLogin, JSON.stringify(action.payload));
}

function * handleCheckLogin() {
  const { token } = yield call(checkLogin);
  if (!token) {
    return undefined;
  }
  const { response, error } = yield call(checkUserTokenInfo, token);
  if (error) {
    return removeAuthToken();
  }
  return yield put(userEntered(response));
}

function * watchUserActions() {
  yield takeEvery(
    types.REQUEST_USER_LOGIN,
    handleRequestUserLogin,
  );
  yield takeEvery(
    types.REQUEST_SIGN_UP,
    handleRequestSignUp,
  );
  yield takeEvery(
    types.REQUEST_RECOVER_PASSWORD,
    handleRequestRecoverPassword,
  );
  yield takeEvery(
    types.RECEIVE_USER,
    handleReceiveUser,
  );
  yield takeEvery(
    types.CHECK_LOGIN,
    handleCheckLogin,
  );
}

export default [
  fork(watchUserActions),
];
