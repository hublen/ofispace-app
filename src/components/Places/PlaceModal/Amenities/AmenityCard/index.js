import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import CircleCard from '../../../../core/CircleCard';

const AmenityCard = (props) => (
  <CircleCard
    title={props.amenity.get('name')}
    img={props.amenity.get('icon_image')}
  />
);

AmenityCard.propTypes = {
  amenity: ImmutablePropTypes.map.isRequired,
};

export default AmenityCard;
