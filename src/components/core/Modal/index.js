import React from 'react';
import { Modal, ScrollView, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line

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
    <View style={[{ flex: 1 }, props.padding ? styles.viewPadding : undefined]}>
      <ScrollView
        style={[
          styles.scroller,
          props.padding ? styles.scrollPadding : undefined,
          props.styles,
        ]}
      >
        {props.children}
      </ScrollView>
    </View>
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
  close: undefined,
  padding: false,
  styles: {},
};

ModalView.propTypes = {
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  close: PropTypes.func,
  padding: PropTypes.bool,
  styles: PropTypes.object, // eslint-disable-line
  children: PropTypes.element.isRequired,
};

export default ModalView;
