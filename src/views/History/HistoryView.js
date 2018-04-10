import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line
import { Map as ImmutableMap } from 'immutable';
import { ScrollView } from 'react-native';

import { selectActualCity } from '../../redux/selectors/cities';
import { checkUserLogin } from '../../redux/actions/user';
import { setUpHistoryView } from '../../redux/actions/session';

import common from '../../style/common';
import SectionHeader from '../../components/core/SectionHeader';

class HistoryView extends Component {
  static navigationOptions = {
    title: 'History',
    tabBarIcon: ({ tintColor }) => (<Ionicons name="ios-bookmark-outline" size={32} color={tintColor} style={{ paddingTop: 10 }} />),
  }


  static propTypes = {
    checkUserLogin: PropTypes.func.isRequired,
    setUpHistoryView: PropTypes.func.isRequired,
  };

  componentDidMount() {
//    this.props.setUpHistoryView();
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
  setUpHistoryView,
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryView);
