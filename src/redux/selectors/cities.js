import { Map as ImmutableMap } from 'immutable';

export const getAllCities = (state) => state.cities;

export const selectActualCity = (state) => state.cities.get(state.session.get('actualCity', undefined), ImmutableMap({ }));

export default getAllCities;
