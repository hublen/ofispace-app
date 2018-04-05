import types from '../../constants/actions';

export const changeAuthTab = (payload) => ({
  type: types.CHANGE_AUTH_TAB,
  payload,
});

export const setUpHomeView = () => ({
  type: types.SETUP_HOME_VIEW,
});

export const setActualCity = (payload) => ({
  type: types.SET_ACTUAL_CITY,
  payload,
});

export default changeAuthTab;
