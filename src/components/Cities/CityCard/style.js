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
    padding: 10,
    height: 40,
    backgroundColor: colors.inverseText,
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
  selectedOverlay: {
    ...absouleView,
    zIndex: 1,
    backgroundColor: colors.brandClearerOverlay,
  },
  cityTitle: {
    fontWeight: 'bold',
    color: colors.regularTextColor,
    fontSize: style.subSectionHeaderFontSize,
  },
};
