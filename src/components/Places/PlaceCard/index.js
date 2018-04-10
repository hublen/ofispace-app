import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import common from '../../../style/common';
import style from './style';

const PlaceCard = (props) => {
  const { place } = props;
  return (
    <TouchableOpacity
      style={[common.mainCardView, common.innerViewPadding]}
    >
      <View style={style.imageView} >
        <Image
          resizeMode="cover"
          style={style.image}
          source={{ uri: place.get('coverPicture') }}
        />
        <View style={style.imageOverlay} />
      </View>
      <View
        style={[style.bodyView, common.semiBorder, common.shadow, common.rowContainer]}
      >
        <View style={[common.flex(8), style.column]}>
          <Text style={style.placeTitle}>{place.get('name')}</Text>
          <Text
            style={style.placeType}
          >
            {place.get('place_type', 'Cowork')}
          </Text>
        </View>
        <View style={[common.flex(2), style.column, { textAlign: 'center', verticalAlign: 'middle' }]}>
          <Text style={style.price}>${place.get('price_per_hour', '100')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

PlaceCard.propTypes = {
  place: ImmutablePropTypes.map.isRequired,
};

export default PlaceCard;
