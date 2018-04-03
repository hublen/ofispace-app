import { fork, takeEvery, call, put, select } from 'redux-saga/effects';
import { Alert, AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';
import { key } from '../../api';

import { userEntered, userNotEntered } from '../actions/user';
import { changeAuthTab } from '../actions/session';
import { checkLogin } from '../selectors/user';
import { postLogin, postSignUp, postRecovery, checkUserTokenInfo, registerUserToken } from '../../data/user';

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

const getPushToken = async () => {
  const previousToken = await AsyncStorage.getItem('pushtoken');
  if (previousToken) {
    return ({ status: 'success', token: previousToken });
  }

  const { status } = await
    Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

  if (status !== 'granted') {
    return ({ status: 'error', message: 'Es necesario permitir a la aplicación el uso de notificaciones para hacerte llegar cualquier información necesaria.' });
  }

  const token = await Notifications.getExpoPushTokenAsync();
  AsyncStorage.setItem('pushtoken', token);
  return ({ token });
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
  const { token, status, message } = yield call(getPushToken);
  if (status === 'error') {
    Alert.alert(
      'Espera',
      message,
      [{ text: 'OK' }],
    );
  } else {
    yield call(registerUserToken, token, action.payload.token);
  }

  yield call(onSuccessLogin, JSON.stringify(action.payload));
}

function * handleCheckLogin() {
  const token = yield select(checkLogin);
  if (!token) {
    yield put(userNotEntered());
    return undefined;
  }
  const { response, error } = yield call(checkUserTokenInfo, token);
  if (error) {
    yield put(userNotEntered());
    return yield call(removeAuthToken);
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
