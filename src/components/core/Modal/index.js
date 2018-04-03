import React from 'react';
import { Modal, ScrollView, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PropTypes from 'prop-types';

import styles from './style';
import colors from '../../../constants/colors';

const ModalView = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    onRequestClose={props.close}
    visible={props.visible}
  >
    <ScrollView style={styles.scroller}>
      {props.children}
    </ScrollView>
    {props.closable &&
    <TouchableOpacity onPress={props.close} style={styles.close}>
      <View>
        <Ionicons
          name="md-close"
          backgroundColor={colors.regularBackground}
          color={colors.regularTextColor}
          size={30}
        />
      </View>
    </TouchableOpacity>}
  </Modal>
);

ModalView.defaultProps = {
  visible: false,
  closable: true,
};

ModalView.propTypes = {
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ModalView;
