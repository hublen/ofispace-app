import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

const Tabs = (props) => (
  <View
    style={styles.tabs}
    onPress={props.onPress}
  >
    {props.options.map((option) => (
      <TouchableOpacity
        onPress={() => props.onPress(option.value)}
        key={option.label}
        style={styles.tab}
      >
        <Text style={styles.tabText}>{option.label.toUpperCase()}</Text>
        {option.value === props.activeTab && <View style={styles.activeTab} />}
      </TouchableOpacity>
    ))}
  </View>
);

Tabs.defaultProps = {
  options: [],
};

Tabs.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  activeTab: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Tabs;
