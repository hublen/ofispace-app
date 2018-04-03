import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map as ImmutableMap } from 'immutable';
import { View } from 'react-native';

import { checkUserLogin } from '../../redux/actions/user';
import { setUpHomeView } from '../../redux/actions/session';
import { navigationPropTypes } from '../../proptypes';

import AuthView from '../../components/users/Auth';
import PlaceCard from '../../components/Places/PlaceCard';

class HomeView extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTitle: 'CentralOfiz',
    headerLeft: null,
    // tabBarIcon: ({ tintColor }) => (<Icon style={styles.quantityButton} size={20} flexDirection="column" name="add" />),
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
      <View>
        <AuthView
          visible={false}
          navigation={this.props.navigation}
        />
        {this.props.places.toList().map((place) => (
          <PlaceCard place={place} />
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
