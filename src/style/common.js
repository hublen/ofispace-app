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
  mainCardView: {
    height: 'auto',
    marginBottom: 3,
  },
  innerViewPadding: {
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  semiBorder: {
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
  },
  shadow: {
    shadowColor: colors.gray,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
};
