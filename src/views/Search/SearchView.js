import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line
import { Map as ImmutableMap } from 'immutable';
import { ScrollView } from 'react-native';

import { selectActualCity } from '../../redux/selectors/cities';
import { checkUserLogin } from '../../redux/actions/user';
import { setUpSearchView } from '../../redux/actions/session';

import common from '../../style/common';
import SectionHeader from '../../components/core/SectionHeader';

class SearchView extends Component {
  static navigationOptions = {
    title: 'Search',
    tabBarIcon: ({ tintColor }) => (<Ionicons name="ios-search-outline" size={32} color={tintColor} style={{ paddingTop: 10 }} />),
  }


  static propTypes = {
    checkUserLogin: PropTypes.func.isRequired,
    setUpSearchView: PropTypes.func.isRequired,
  };

  componentDidMount() {
//    this.props.setUpSearchView();
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
  setUpSearchView,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
