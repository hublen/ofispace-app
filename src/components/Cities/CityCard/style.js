import colors from '../../../constants/colors';
import style from '../../../constants/styles';

const absouleView = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 150,
};

export default {
  imageView: {
    height: 120,
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bodyView: {
    padding: 5,
    height: 30,
    backgroundColor: colors.inverseText,
    borderBottomRadius: 20,
  },
  innerViewPadding: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  image: absouleView,
  imageOverlay: {
    ...absouleView,
    zIndex: 1,
    backgroundColor: colors.brandOverlay,
  },
  cityTitle: {
    fontWeight: '600',
    color: colors.regularTextColor,
    fontSize: style.subSectionHeaderFontSize,
  },
};
