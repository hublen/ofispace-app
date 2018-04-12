import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line
import PropTypes from 'prop-types';

import colors from '../../../constants/colors';
import styles from './style';

const ListItemButton = (props) => (
  <TouchableOpacity
    style={styles.fieldView}
    onPress={props.onPress}
  >
    <Ionicons
      name={props.icon}
      backgroundColor={colors.transparent}
      color={colors.regularText}
      style={styles.icon}
      size={24}
    />
    <Text style={styles.text}>
      {props.title}
    </Text>
  </TouchableOpacity>
);


ListItemButton.defaultProps = {
  title: undefined,
};

ListItemButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ListItemButton;
