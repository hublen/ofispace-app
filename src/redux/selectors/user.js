import { AsyncStorage } from 'react-native';
import api from '../../api';

export const getUserProfile = (state) => state.user;

export const checkLogin = async () => AsyncStorage.getItem(api.key);

export default getUserProfile;
