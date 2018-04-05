import api from '../api';

export const fetchAllCities = () => (
  api.cities.fetchAll()
    .then((response) => response.json())
    .then((rjson) => ({ response: rjson.data }))
    .catch((error) => ({ error }))
);

export default fetchAllCities;
