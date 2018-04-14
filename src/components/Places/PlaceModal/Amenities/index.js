import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { ListView, View, ScrollView } from 'react-native';

import common from '../../../../style/common';
import AmenityCard from './AmenityCard';

const AmenitiesCarousel = (props) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  return (
    <View>
      <ScrollView
        style={common.rowContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <ListView
          dataSource={ds.cloneWithRows(props.amenities.toArray())}
          scrollEnabled={false}
          horizontal
          enableEmptySections
          renderRow={(rowData) =>
            <AmenityCard amenity={rowData} onSelect={props.onSelect} />}
        />
      </ScrollView>
    </View>
  );
};

AmenitiesCarousel.propTypes = {
  amenities: ImmutablePropTypes.map.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AmenitiesCarousel;
