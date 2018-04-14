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
    case types.RECEIVE_PLACE_ADDRESS: {
      const { id, address } = action.payload;
      return state.mergeIn(
        [id],
        fromJS({
          Address: fromJS(address),
        }),
      );
    }
    case types.RECEIVE_PLACE_AMENITIES: {
      const { id, amenities } = action.payload;
      return state.mergeIn(
        [id],
        fromJS({
          Amenities: fromJS(amenities),
        }),
      );
    }
    case types.RECEIVE_PLACE_IMAGES: {
      const { id, images } = action.payload;
      return state.mergeIn(
        [id],
        fromJS({
          Images: fromJS(images),
        }),
      );
    }
    default:
      return state;
  }
};
