import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../../constants/dimensions';
import colors from '../../../constants/colors';

export default {
  cover: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  view: {
    paddingTop: 100,
  },
  authBox: {
    backgroundColor: colors.regularBackground,
    borderRadius: 5,
  },
};
