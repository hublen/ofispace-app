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

export const setActualPlace = (payload) => ({
  type: types.SET_ACTUAL_PLACE,
  payload,
});

export const closePlaceModal = (payload) => ({
  type: types.CLOSE_PLACE_MODAL,
  payload,
});

export default changeAuthTab;
