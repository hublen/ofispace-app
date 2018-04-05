import types from '../../constants/actions';

export const fetchCities = () => ({
  type: types.FETCH_CITIES,
});

export const receivedCities = (payload) => ({
  type: types.RECEIVED_CITIES,
  payload,
});

export default fetchCities;
