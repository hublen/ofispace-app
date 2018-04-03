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
        style={[style.bodyView, common.semiBorder, common.shadow]}
      >
        <Text style={style.placeTitle}>{place.get('name')}</Text>
        <Text
          style={style.placeDescription}
          numberOfLines={2}
        >
          {place.get('description')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

PlaceCard.propTypes = {
  place: ImmutablePropTypes.map.isRequired,
};

export default PlaceCard;
