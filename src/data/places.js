import api from '../api';

export const fetchPlacesByCity = (id) => (
  api.places.byCity(id)
    .then((response) => response.json())
    .then((rjson) => ({ response: rjson.data }))
    .catch((error) => ({ error }))
);

export default fetchPlacesByCity;
