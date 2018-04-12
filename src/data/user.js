import api from '../api';

export const postLogin = (data) => (
  api.user.login(data)
    .then((response) => response.json())
    .then((response) => (
      { response }
    ))
    .catch((error) => ({ error }))
    .catch((error) => ({ error }))
);

export const postSignUp = (data) => (
  api.user.signUp(data)
    .then((response) => response.json())
    .then((response) => (
      { response }
    ))
    .catch((error) => ({ error }))
);

export const postRecovery = (data) => (
  api.user.resetPassword(data)
    .then((response) => response.json())
    .then((response) => (
      { response }
    ))
    .catch((error) => ({ error }))
);

export const checkUserTokenInfo = (token) => (
  api.user.userInfo(token)
    .then((response) => response.json())
    .then((response) => (
      { response: response.data }
    ))
    .catch((error) => ({ error }))
);

export const registerUserToken = (token, userToken) => (
  api.user.registerToken(token, userToken)
    .then((response) => response.json())
    .then((response) => ({ response }))
    .catch((error) => ({ error }))
);
