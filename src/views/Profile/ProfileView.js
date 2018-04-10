import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line
import { Map as ImmutableMap } from 'immutable';
import { ScrollView } from 'react-native';

import { selectActualCity } from '../../redux/selectors/cities';
import { checkUserLogin } from '../../redux/actions/user';
import { setUpProfileView } from '../../redux/actions/session';

import common from '../../style/common';
import SectionHeader from '../../components/core/SectionHeader';

class ProfileView extends Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: ({ tintColor }) => (<Ionicons name="ios-person-outline" size={32} color={tintColor} style={{ paddingTop: 10 }} />),
  }


  static propTypes = {
    checkUserLogin: PropTypes.func.isRequired,
    setUpProfileView: PropTypes.func.isRequired,
  };

  componentDidMount() {
//    this.props.setUpProfileView();
  }

  render() {
    return (
      <SafeAreaView style={common.view}>
        <ScrollView
          style={common.view}
        >
          <SectionHeader
            title="Hello"
          />
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
  setUpProfileView,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
