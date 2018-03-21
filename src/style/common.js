import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants/dimensions';
import colors from '../constants/colors';

export default {
  view: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: colors.regularBackground,
  },
  overlay: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: colors.transparentOverlay,
  },
  viewPadding: {
    padding: 15,
  },
  semiFullWidthCentered: {
    marginHorizontal: SCREEN_WIDTH * 0.05,
  },
  regularChildViewPadding: {
    padding: 15,
  },
};
