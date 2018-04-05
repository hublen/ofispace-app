import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setActualCity } from '../../../redux/actions/session';
import { selectActualCity } from '../../../redux/selectors/cities';

import common from '../../../style/common';
import style from './style';

const CityCard = (props) => {
  const { city } = props;
  return (
    <TouchableOpacity
      style={[common.mainCardView, style.innerViewPadding]}
      onPress={() => props.setActualCity(city)}
    >
      <View style={style.imageView} >
        <Image
          resizeMode="cover"
          style={style.image}
          source={{ uri: city.get('cover') }}
        />
        <View style={props.actualCity.get('id') === city.get('id') ? undefined : style.imageOverlay} />
      </View>
      <View
        style={[style.bodyView, common.semiBorder, common.shadow]}
      >
        <Text style={style.cityTitle}>{city.get('name')}</Text>
      </View>
    </TouchableOpacity>
  );
};

CityCard.propTypes = {
  setActualCity: PropTypes.func.isRequired,
  city: ImmutablePropTypes.map.isRequired,
  actualCity: ImmutablePropTypes.map.isRequired,
};

const mapStateToProps = (state) => ({
  actualCity: selectActualCity(state),
});

const mapDispatchToProps = {
  setActualCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);
