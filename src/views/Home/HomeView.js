import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map as ImmutableMap } from 'immutable';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

import { checkUserLogin } from '../../redux/actions/user';
import { setUpHomeView } from '../../redux/actions/session';
import { navigationPropTypes } from '../../proptypes';

import style from './style';
import AuthView from '../../components/users/Auth';

class HomeView extends Component {
  static defaultProps = {
    navigation: null,
    loggingIn: false,
    places: ImmutableMap({}),
  };

  static propTypes = {
    loggingIn: PropTypes.bool,
    navigation: navigationPropTypes,
    places: ImmutablePropTypes.map,
    checkUserLogin: PropTypes.func.isRequired,
    setUpHomeView: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.checkUserLogin();
    this.props.setUpHomeView();
  }

  render() {
    return (
      <View>
        <AuthView
          visible={false}
          navigation={this.props.navigation}
        />
        {this.props.places.toList().map((place) => (
          <Card
            image={{ uri: place.get('coverPicture') }}
          >
            <Text style={style.cardTitle}>{place.get('name')}</Text>
            <Text
              numberOfLines={2}
              style={style.cardDescription}
            >
              {place.get('description')}
            </Text>
            <Text style={style.priceCard}>
              ${place.get('price_per_hour')} MXN / Hora
            </Text>
          </Card>
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loggingIn: state.session.get('loggingIn', false),
  places: state.places,
});

const mapDispatchToProps = ({
  checkUserLogin,
  setUpHomeView,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
