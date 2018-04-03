import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line
import { Map as ImmutableMap } from 'immutable';
import { ScrollView } from 'react-native';

import { checkUserLogin } from '../../redux/actions/user';
import { setUpHomeView } from '../../redux/actions/session';
import { navigationPropTypes } from '../../proptypes';

import common from '../../style/common';
import AuthView from '../../components/users/Auth';
import PlaceCard from '../../components/Places/PlaceCard';

class HomeView extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTitle: 'CentralOfiz',
    headerLeft: null,
    tabBarIcon: ({ tintColor }) => (<Ionicons name="ios-home-outline" size={32} color={tintColor} style={{ paddingTop: 10 }} />),
  }

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
      <SafeAreaView style={common.view}>
        <ScrollView
          style={common.view}
        >
          <AuthView
            visible={false}
            navigation={this.props.navigation}
          />
          {this.props.places.toList().map((place) => (
            <PlaceCard place={place} />
          ))}
        </ScrollView>
      </SafeAreaView>
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
