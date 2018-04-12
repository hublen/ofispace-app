import colors from '../../../constants/colors';
import { SCREEN_HEIGHT } from '../../../constants/dimensions';
import styles from '../../../constants/styles';

export default {
  mainView: {
    flex: 1,
    padding: 0,
    marginBottom: 10,
    backgroundColor: colors.brand,
  },
  profile: {
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight:  SCREEN_HEIGHT / 3,
  },
  avatar: {
    borderRadius: 62.5,
    backgroundColor: colors.inverseText,
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: colors.inverseText,
    marginBottom: 5,
  },
  name: {
    color: colors.inverseText,
    fontSize: styles.viewHeaderFontSize,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  email: {
    fontSize: styles.subSectionBodyFontSize,
    color: colors.lighterInverseText,
    marginBottom: 10,
  },
  sections: {
    padding: 0,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.transparent,
  },
  item: {
    flex: 1,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemValue: {
    color: colors.inverseText,
    fontWeight: 'bold',
    fontSize: styles.sectionHeaderFontSize,
    marginBottom: 2,
  },
  itemLabel: {
    color: colors.inverseText,
    fontSize: colors.subSectionBodyFontSize,
    marginBottom: 2,
  },
};
