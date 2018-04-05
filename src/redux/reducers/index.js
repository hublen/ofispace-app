import { combineReducers } from 'redux';

import user from './user';
import session from './session';
import location from './location';
import places from './places';
import cities from './cities';

export default combineReducers({
  user,
  session,
  places,
  location,
  cities,
});
