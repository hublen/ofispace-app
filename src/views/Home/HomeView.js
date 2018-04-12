import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line
import { Map as ImmutableMap } from 'immutable';
import { ScrollView } from 'react-native';

import { selectActualCity } from '../../redux/selectors/cities';
import { checkUserLogin } from '../../redux/actions/user';
import { setUpHomeView } from '../../redux/actions/session';
import { navigationPropTypes } from '../../proptypes';

import common from '../../style/common';
import SectionHeader from '../../components/core/SectionHeader';
import CitiesCarouselList from '../../components/Cities/CarouselList';
import AuthView from '../../components/users/Auth';
import PlaceCard from '../../components/Places/PlaceCard';

class HomeView extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTitle: 'hublen',
    headerLeft: null,
    tabBarIcon: ({ tintColor }) => (<Ionicons name="ios-home-outline" size={32} color={tintColor} style={{ paddingTop: 10 }} />),
  }

  static defaultProps = {
    navigation: null,
    loggingIn: false,
    places: ImmutableMap({}),
    cities: ImmutableMap({}),
    actualCity: ImmutableMap({ }),
  };

  static propTypes = {
    loggingIn: PropTypes.bool,
    cities: ImmutablePropTypes.map,
    actualCity: ImmutablePropTypes.map,
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
    const { actualCity, loggingIn } = this.props;
    const city = actualCity.get('name');
    return (
      <SafeAreaView style={common.view}>
        <ScrollView
          style={common.view}
        >
          <AuthView
            visible={loggingIn}
            navigation={this.props.navigation}
          />
          <CitiesCarouselList
            title="Explore"
            dataSource={this.props.cities}
          />
          <SectionHeader title={city ? `Spaces in ${city}` : 'Spaces'} />
          {this.props.places.toList().map((place) => (
            <PlaceCard key={place.get('id')} place={place} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  loggingIn: state.session.get('loggingIn', false),
  actualCity: selectActualCity(state),
  cities: state.cities,
  places: state.places,
});

const mapDispatchToProps = ({
  checkUserLogin,
  setUpHomeView,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
