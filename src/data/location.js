import api from '../api';

export const getActualCity = ({ latitude, longitude }) => (
  api.location.actualCity({ latitude, longitude })
    .then((response) => response.json())
    .then((rjson) => ({ response: rjson.data }))
    .catch((error) => ({ error }))
);

export default getActualCity;
