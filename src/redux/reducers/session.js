import { Map as ImmutableMap } from 'immutable';

import types from '../../constants/actions';
import tabs from '../../constants/tabs';

export default (
  state = ImmutableMap({
    actualAuthTab: tabs.LOGIN_TAB,
    loggingIn: false,
    actualNotification: ImmutableMap({
      analyzing: false,
      id: undefined,
    }),
  }),
  action,
) => {
  switch (action.type) {
    case types.CHANGE_AUTH_TAB:
      return state.set('actualAuthTab', action.payload);
    case types.USER_NOT_ENTERED:
      return state.set('loggingIn', true);
    case types.RECEIVE_USER:
      return state.set('loggingIn', false);
    case types.SET_ACTUAL_CITY:
      return state.set('actualCity', action.payload.get('id'));
    case types.SET_ACTUAL_PLACE:
      const newState = state.set('actualPlace', action.payload);
      return newState.set('analyzingPlace', true);
    case types.CLOSE_PLACE_MODAL:
      return state.set('analyzingPlace', false);
    default:
      return state;
  }
};
