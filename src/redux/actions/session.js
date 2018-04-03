import types from '../../constants/actions';

export const changeAuthTab = (payload) => ({
  type: types.CHANGE_AUTH_TAB,
  payload,
});

export const setUpHomeView = () => ({
  type: types.SETUP_HOME_VIEW,
});

export default changeAuthTab;
