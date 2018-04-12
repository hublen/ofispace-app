import types from '../../constants/actions';

export const userEntered = (payload) => ({
  type: types.RECEIVE_USER,
  payload,
});

export const userNotEntered = () => ({
  type: types.USER_NOT_ENTERED,
});

export const userlogOut = (payload) => ({
  type: types.USER_LOGOUT,
  payload,
});

export const requestRecoverPassword = (payload) => ({
  type: types.REQUEST_RECOVER_PASSWORD,
  payload,
});

export const requestFacebookLogin = (payload) => ({
  type: types.REQUEST_FACEBOOK_LOGIN,
  payload,
});

export const checkUserLogin = () => ({
  type: types.CHECK_LOGIN,
});

export const requestLogin = (payload) => ({
  type: types.REQUEST_USER_LOGIN,
  payload,
});

export const requestSignUp = (payload) => ({
  type: types.REQUEST_SIGN_UP,
  payload,
});
