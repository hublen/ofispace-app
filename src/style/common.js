import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants/dimensions';
import colors from '../constants/colors';
import styles from '../constants/styles';

export default {
  view: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: colors.regularBackground,
  },
  viewTitle: {
    fontSize: styles.sectionHeaderFontSize * 1.7,
    fontWeight: styles.sectionHeaderFontWeight,
    color: colors.regularTextColor,
  },
  viewDescription: {
    color: colors.regularLighterText,
    fontSize: styles.subSectionBodyFontSize,
    fontWeight: styles.subSectionBodyFontWeight,
    marginBottom: 7,
  },
  viewStrongDescription: {
    color: colors.regularLighterText,
    fontSize: styles.subSectionBodyFontSize,
    fontWeight: styles.subSectionStrongBodyFontWeight,
    marginBottom: 7,
  },
  sectionView: {
    borderTopWidth: 1,
    borderColor: colors.semiTransparent,
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
    shadowColor: colors.regularTextColor,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 0,
  },
  flex: (number) => ({
    flex: number,
  }),
};
