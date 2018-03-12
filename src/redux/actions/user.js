import types from '../../constants/actions';

export const userEntered = (payload) => ({
  type: types.RECEIVE_USER,
  payload,
});

export const userlogOut = (payload) => ({
  type: types.USER_LOGOUT,
  payload,
});
