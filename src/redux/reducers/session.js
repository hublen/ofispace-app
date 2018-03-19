import { Map as ImmutableMap } from 'immutable';

import types from '../../constants/actions';
import tabs from '../../constants/tabs';

export default (
  state = ImmutableMap({
    actualAuthTab: tabs.LOGIN_TAB,
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
    default:
      return state;
  }
};
