export const getUserProfile = (state) => state.user;

export const checkLogin = (state) => state.user.get('token', undefined);

export default getUserProfile;
