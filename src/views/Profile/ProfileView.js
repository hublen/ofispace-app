import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line
import { Map as ImmutableMap } from 'immutable';
import Communications from 'react-native-communications';
import { ScrollView, Alert } from 'react-native';

import navigationPropTypes from '../../proptypes/navigation';
import { userlogOut } from '../../redux/actions/user';

import common from '../../style/common';
import ListItemButton from '../../components/core/ListItemButton';
import ProfileContainer from '../../components/users/ProfileContainer';
import admins from '../../constants/admins';
import colors from '../../constants/colors';

class ProfileView extends Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: ({ tintColor }) => (<Ionicons name="ios-person-outline" size={32} color={tintColor} style={{ paddingTop: 10 }} />),
  }

  static defaultProps = {
    user: ImmutableMap({}),
    navigation: undefined,
  }

  static propTypes = {
    user: ImmutablePropTypes.map,
    navigation: navigationPropTypes,
    logout: PropTypes.func.isRequired,
  };

  suggestLocal = () => {
    Alert.alert(
      '¿Crees que hace falta un lúgar?',
      'Nuestro equipo se pondra en contacto con ellos para agregarlos a la plataforma lo mas pronto posible.',
      [
        {
          text: 'Enviar Correo',
          onPress: () => Communications.email(
            admins,
            null, null,
            'Quiero un nuevo espacio en la plataforma',
            'Hola, me gustaria que este espacio este en la plataforma: (Nombre, Ciudad, Descripción)',
          ),
        },
        { text: 'Cancelar', style: 'cancel' },
      ],
    );
  }

  instantCall() {
    Alert.alert(
      '¿Necesitas ayuda?',
      'Alguien siempre esta para ayudarte en Hublen, contestaremos el correo electrónico en unos minutos.',
      [
        { text: 'Enviar Correo', onPress: () => Communications.email(admins, null, null, 'Necesito ayuda', 'Hublen - Hola, he tenido un problema: ') },
        { text: 'Cancelar', style: 'cancel' },
      ],
    );
  }

  render() {
    const { user, navigation } = this.props;
    return (
      <SafeAreaView style={[common.view, { backgroundColor: colors.brand }]}>
        <ScrollView
          style={common.view}
        >
          <ProfileContainer
            name={user.get('name')}
            avatar={user.get('avatar_url')}
            email={user.get('email')}
            items={[
              { label: 'Reservaciones', value: user.get('bookings') },
              { label: 'Reseñas', value: user.get('reviews') },
            ]}
          />
          <ListItemButton
            title="Sugerir un nuevo espacio"
            onPress={this.suggestLocal}
            icon="ios-laptop-outline"
          />
          <ListItemButton
            title="¿Necesitas ayuda?"
            onPress={this.instantCall}
            icon="ios-mail-outline"
          />
          <ListItemButton
            title="Cerrar Sesión"
            onPress={() => this.props.logout({ navigation })}
            icon="ios-log-out-outline"
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logout: userlogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
