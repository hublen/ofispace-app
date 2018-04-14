import { Map as ImmutableMap } from 'immutable';

export const getPlaceById =
  (state, id) => state.places.get(id, ImmutableMap({ }));

export const getActualPlace = (state) => {
  const actualId = state.session.get('actualPlace');
  return state.places.get(actualId, ImmutableMap({ }));
};

export default getPlaceById;
