import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import boyImage from '../../../img/boy.png';
import style from './style';

const ProfileContainer = ({
  name,
  avatar,
  email,
  items,
}) => (
  <View style={style.mainView}>
    <View style={style.profile}>
      <Image
        source={avatar ? boyImage : { uri: avatar }}
        style={style.avatar}
      />
      <Text style={style.name}>{name}</Text>
      <Text style={style.email}>{email}</Text>
    </View>
    <View style={style.sections}>
      {items.map((item) => (
        <View key={item.label} style={style.item}>
          <Text style={style.itemValue}>
            {item.value !== null ? item.value : 0}
          </Text>
          <Text style={style.itemLabel}>
            {item.label}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

ProfileContainer.defaultProps = {
  avatar: undefined,
  email: '',
  name: '',
  items: [],
};

ProfileContainer.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  })),
};

export default ProfileContainer;
