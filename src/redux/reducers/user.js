import {
  Map as ImmutableMap,
  fromJS,
} from 'immutable';

import types from '../../constants/actions';

export default (state = ImmutableMap(), action) => {
  switch (action.type) {
    case types.RECEIVE_USER:
      return fromJS(action.payload);
    case types.USER_LOGOUT:
      return ImmutableMap();
    default:
      return state;
  }
};
