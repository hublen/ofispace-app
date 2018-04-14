import api from '../api';

export const fetchPlacesByCity = (id) => (
  api.places.byCity(id)
    .then((response) => response.json())
    .then((rjson) => ({ response: rjson.data }))
    .catch((error) => ({ error }))
);

export const fetchPlaceAddress = (id) => (
  api.places.fetchAddress(id)
    .then((response) => response.json())
    .then((rjson) => ({ address: rjson.data }))
    .catch((error) => ({ error }))
);

export const fetchPlaceAmenities = (id) => (
  api.places.fetchAmenities(id)
    .then((response) => response.json())
    .then((rjson) => ({ amenities: rjson.data }))
    .catch((error) => ({ error }))
);

export const fetchPlaceImages = (id) => (
  api.places.fetchPlaceImages(id)
    .then((response) => response.json())
    .then((rjson) => ({ images: rjson.data }))
    .catch((error) => ({ error }))
);

export default fetchPlacesByCity;
