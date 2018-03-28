import types from '../../constants/actions';

export const fetchPlacesByCity = (payload) => ({
  type: types.FETCH_PLACES_BY_CITY,
  payload,
});

export const placesEntered = (payload) => ({
  type: types.PLACES_ENTERED,
  payload,
});

export default fetchPlacesByCity;
