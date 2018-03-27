import { Facebook } from 'expo';

import api from '../api';

export const sendFacebookRequest = async () => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync('439642249802701', {
    permissions: ['public_profile', 'email'],
  });

  if (type === 'cancel') {
    return ({ error: 'Ocurrio un error, favor de intentarlo mas tarde.', data: undefined });
  }

  const dataUser = {
    idtype: 2,
    token,
  };
  return api.user.login(dataUser)
    .then((response) => response.json())
    .then((rjson) => {
      if (rjson.status === 'notYetCreated') {
        return ({ error: undefined, data: { status: 'notYetCreated', accessToken: token } });
      } else if (rjson.status !== 'success') {
        return ({ error: rjson.message, data: undefined });
      }
      return ({ status: 'success', data: rjson.data, error: undefined });
    })
    .catch((error) => {
      if (error.status === 'notYetCreated') {
        return ({ error: undefined, data: { status: 'notYetCreated', accessToken: token } });
      }
      return ({ error: 'Ocurrio un error, favor de intentarlo mas tarde.', data: undefined });
    });
};

export const notYeatCreatedAccount = (accessToken) => (
  fetch(`https://graph.facebook.com/me?fields=id,name,email&&access_token=${accessToken}`, { method: 'GET' })
    .then((response) => response.json())
    .then((responseData) =>
      ({ createdError: undefined, response: { responseData, accessToken } }))
    .catch(() => ({ createdError: 'No ha sido posible conectarse con los servidores de Facebook', response: undefined }))
);

export const postUserAndSignUp = ({ responseData, accessToken }) => {
  console.log(responseData);
  const data = {
    name: responseData.name,
    facebook_id: responseData.id,
    email: responseData.email,
  };
  console.log(data);
  return api.user.signUp(data)
    .then((res) => res.json())
    .then((rjson) => {
      console.log(rjson);
      if (rjson.status !== 'success') {
        return ({ error: 'Ha ocurrido un error intentando crear tu cuenta' });
      }
      const dataUser = {
        idtype: 2,
        token: accessToken,
      };
      return api.user.login(dataUser)
        .then((res) => res.json())
        .then((jsonr) => {
          if (jsonr.status !== 'success') {
            return ({ error: 'Actualmente no estás registrado en Central Ofiz con tu cuenta de Facebook, favor de iniciar sesión con tu correo eléctronico y contraseña.', data: undefined });
          }
          return ({ status: 'success', data: jsonr.data, error: undefined });
        });
    })
    .catch(() => ({ error: 'Ha ocurrido un error intentando iniciar sesión' }));
};
