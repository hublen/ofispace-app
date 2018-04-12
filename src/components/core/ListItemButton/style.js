import colors from '../../../constants/colors';
import styles from '../../../constants/styles';

export default {
  text: {
    color: colors.regularTextColor,
    fontSize: styles.subSectionHeaderFontSize,
    fontWeight: styles.subsectionHeaderFontWeight,
    marginLeft: 10,
  },
  icon: {
    color: colors.regularTextColor,
    fontWeight: styles.subsectionHeaderFontWeight,
  },
  fieldView: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    padding: styles.insideItemPadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
};
