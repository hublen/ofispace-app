import api from '../api';

export const getActualCity = ({ lat, lng }) => (
  api.location.actualCity({ lat, lng })
    .then((response) => response.json())
    .then((rjson) => ({ response: rjson.data }))
    .catch((error) => ({ error }))
);

export default getActualCity;
