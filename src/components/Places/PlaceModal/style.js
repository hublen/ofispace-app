import colors from '../../../constants/colors';
import styles from '../../../constants/styles';

export default {
  sectionTitle: {
    fontWeight: styles.subsectionHeaderFontWeight,
    color: colors.regularText,
    fontSize: styles.subSectionHeaderFontSize,
  },
  topPadding: {
    paddingVertical: 70,
  },
  map: {
    marginTop: 7,
    height: 200,
    flex: 1,
  },
  actionSection: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 2,
    marginVertical: 5,
    borderBottomWidth: 0.1,
    borderColor: colors.semiTransparent,
    backgroundColor: colors.regularBackground,
  },
  actionText: {
    justifyContent: 'center',
    alignItems: 'left',
  },
  actionTextBody: {
    fontSize: styles.sectionHeaderFontSize,
    fontWeight: styles.sectionHeaderFontWeight,
    color: colors.regularTextColor,
  },
};
