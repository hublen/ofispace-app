import { Map as ImmutableMap, fromJS } from 'immutable';

import types from '../../constants/actions';

export default (
  state = ImmutableMap({}),
  action,
) => {
  switch (action.type) {
    case types.PLACES_ENTERED:
      return ImmutableMap().withMutations((innerMap) => {
        Object.keys(action.payload).forEach((key) => {
          const value = action.payload[key];
          innerMap.set(action.payload[key].id, fromJS(value));
        });
      });
    default:
      return state;
  }
};
