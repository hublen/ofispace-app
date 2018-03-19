import types from '../../constants/actions';

export const changeAuthTab = (payload) => ({
  type: types.CHANGE_AUTH_TAB,
  payload,
});

export default changeAuthTab;
