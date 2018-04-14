import types from '../../constants/actions';

export const fetchPlacesByCity = (payload) => ({
  type: types.FETCH_PLACES_BY_CITY,
  payload,
});

export const placesEntered = (payload) => ({
  type: types.PLACES_ENTERED,
  payload,
});

export const receivedPlaceAddress = (payload) => ({
  type: types.RECEIVE_PLACE_ADDRESS,
  payload,
});

export const receivedPlaceAmenities = (payload) => ({
  type: types.RECEIVE_PLACE_AMENITIES,
  payload,
});

export const receivedPlaceImages = (payload) => ({
  type: types.RECEIVE_PLACE_IMAGES,
  payload,
});

export default fetchPlacesByCity;
