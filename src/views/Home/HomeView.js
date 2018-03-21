import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { checkUserLogin } from '../../redux/actions/user';
import { navigationPropTypes } from '../../proptypes';

import AuthView from '../../components/users/Auth';

class HomeView extends Component {
  static defaultProps = {
    navigation: null,
    loggingIn: false,
  };

  static propTypes = {
    loggingIn: PropTypes.bool,
    navigation: navigationPropTypes,
    checkUserLogin: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.checkUserLogin();
  }

  render() {
    return (
      <View>
        <AuthView
          visible={this.props.loggingIn}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loggingIn: state.session.get('loggingIn'),
});

const mapDispatchToProps = ({
  checkUserLogin,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
