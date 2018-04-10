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
    height: 150,
    overflow: 'hidden',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  bodyView: {
    padding: 5,
    backgroundColor: colors.inverseText,
  },
  image: absouleView,
  imageOverlay: {
    ...absouleView,
    zIndex: 1,
    backgroundColor: colors.cardTransparentOverlay,
  },
  placeTitle: {
    fontWeight: 'bold',
    color: colors.regularTextColor,
    fontSize: style.subSectionHeaderFontSize * 1.1,
    marginTop: 4,
  },
  placeType: {
    color: colors.regularLighterText,
    fontSize: style.subSectionBodyFontSize * 1.1,
    fontWeight: style.subSectionBodyFontWeight,
  },
  favorite: {
    right: 5,
    top: 5,
    position: 'absolute',
  },
  column: {
    flexDirection: 'column',
  },
  price: {
    paddingTop: style.subSectionHeaderFontSize * 0.5,
    color: colors.brand,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: style.subSectionHeaderFontSize * 1.2,
  },
};
