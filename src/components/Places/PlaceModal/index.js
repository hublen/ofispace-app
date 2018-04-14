import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Text, View, Linking, Alert } from 'react-native';
import { Map as ImmutableMap, List as ImmutableList } from 'immutable';
import { SafeAreaView } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

import { closePlaceModal } from '../../../redux/actions/session';

import Modal from '../../core/Modal';
import Button from '../../core/Button';
import common from '../../../style/common';
import Images from './Images';
import style from './style';
import AmenitiesCarousel from './Amenities';

class PlaceModal extends Component {
  goToMap = () => {
    const { place } = this.props;
    const address = place.get('Address', ImmutableMap({ }));
    const url = `https://maps.google.com/maps?q=${address.get('lat')},${address.get('lng')}`;
    Linking.canOpenURL(url).then((supported) => {
      if (!supported) {
        Alert.alert('Error', 'Lo sentimos, ocurrió un error. Favor de intentar de nuevo más tarde', [{ text: 'OK' }]);
      }
      return Linking.openURL(url);
    }).catch(() => Alert.alert('Error', 'Lo sentimos, ocurrió un error. Favor de intentar de nuevo más tarde', [{ text: 'OK' }]));
  }

  render() {
    const { place, visible, closeModal } = this.props;
    const address = place.get('Address', ImmutableMap({ }));
    const amenities = place.get('Amenities', ImmutableList());
    const photos = place.get('Photos', ImmutableList());
    const initialRegion = {
      latitude: address.get('lat'),
      longitude: address.get('lng'),
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    };
    return (
      <Modal
        padding
        visible={visible}
        close={closeModal}
        styles={style.topPadding}
      >
        <Text style={common.viewTitle}>
          {place.get('name')}
        </Text>
        <Text>
          <Text style={common.viewStrongDescription}>
            {place.get('place_type')} .
          </Text>
          <Text style={common.viewDescription}> {place.get('description')}</Text>
        </Text>
        <View style={style.actionSection}>
          <View style={[common.flex(6), style.actionText]}>
            <Text style={style.actionTextBody}>Reserva tu espacio</Text>
          </View>
          <View style={[common.flex(4)]}>
            <Button
              ownStyle="brandButton"
              text={`$${place.get('price_per_day')} MXN`}
              onPress={() => console.log('yes')}
            />
          </View>
        </View>
        {photos.size > 0 &&
          <Images photos={photos} />
        }
        {place.has('Amenities') &&
          <View>
            <Text style={style.sectionTitle}>Comodidades</Text>
            <AmenitiesCarousel
              amenities={amenities}
            />
          </View>
        }
        {place.has('Address') &&
          <View>
            <Text style={style.sectionTitle}>Ubicación</Text>
            <MapView
              style={style.map}
              initialRegion={initialRegion}
              zoomEnabled
              rotateEnabled
              scrollEnabled
              pitchEnabled
              liteMode
            >
              <MapView.Marker
                coordinate={{
                  latitude: address.get('lat'),
                  longitude: address.get('lng'),
                }}
                title={place.get('place')}
                description={address.get('address')}
                onPress={this.goToMap}
              />
            </MapView>
          </View>
          }
      </Modal>
    );
  }
}

PlaceModal.defaultProps = {
  visible: false,
};

PlaceModal.propTypes = {
  visible: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  place: ImmutablePropTypes.map.isRequired,
};

const mapStateToProps = (state) => ({
  visible: state.session.get('analyzingPlace', false),
});

const mapDispatchToProps = {
  closeModal: closePlaceModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceModal);
