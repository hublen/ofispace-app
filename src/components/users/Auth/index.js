import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, ScrollView, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../../api';

import { navigationPropTypes } from '../../../proptypes';

import tabs from '../../../constants/tabs';
import authImage from '../../../img/authImage.jpg';

import { getAuthTab } from '../../../redux/selectors/session';
import { changeAuthTab } from '../../../redux/actions/session';
import { requestLogin, requestSignUp, requestRecoverPassword, requestFacebookLogin } from '../../../redux/actions/user';

import { Tabs, TextButton } from '../../core';
import { Login, SignUp, RecoverPassword, FacebookForm } from './Forms';
import common from '../../../style/common';
import styles from './style';
import ModalView from '../../core/Modal';

class AuthView extends Component {
  static defaultProps = {
    navigation: null,
    visible: false,
  };

  static propTypes = {
    visible: PropTypes.bool,
    navigation: navigationPropTypes,
    requestRecoverPassword: PropTypes.func.isRequired,
    changeAuthTab: PropTypes.func.isRequired,
    requestSignUp: PropTypes.func.isRequired,
    requestFacebookLogin: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired,
    requestLogin: PropTypes.func.isRequired,
  };

  state = {
    options: [{
      label: 'Iniciar Sesión',
      value: tabs.LOGIN_TAB,
    }, {
      label: 'Crear cuenta',
      value: tabs.SIGNUP_TAB,
    }],
  };

  async componentDidMount() {
    const loggedIn =
      await AsyncStorage.getItem(api.key);
    if (loggedIn) {
      this.props.navigation.navigate('home');
    }
  }

  render() {
    const { state } = this;
    return (
      <ModalView
        visible={this.props.visible}
        closable={false}
      >
        <View style={[common.view, styles.paddingView]}>
          <Image
            style={styles.cover}
            source={authImage}
          />
          <ScrollView
            style={[common.overlay, common.viewPadding, styles.view]}
          >
            <FacebookForm
              navigation={this.props.navigation}
              requestFacebookLogin={this.props.requestFacebookLogin}
            />
            <View
              style={[
                styles.authBox,
                common.semiFullWidthCentered,
                common.regularChildViewPadding,
              ]}
            >
              <Tabs
                onPress={(activeTab) => this.props.changeAuthTab(activeTab)}
                options={state.options}
                activeTab={this.props.activeTab}
              />
              {this.props.activeTab === tabs.LOGIN_TAB &&
                <Login
                  navigation={this.props.navigation}
                  requestLogin={this.props.requestLogin}
                />
              }
              {this.props.activeTab === tabs.SIGNUP_TAB &&
                <SignUp
                  requestSignUp={this.props.requestSignUp}
                />
              }
              {this.props.activeTab === tabs.RECOVER_TAB ?
                <RecoverPassword
                  requestRecoverPassword={this.props.requestRecoverPassword}
                />
                :
                <TextButton
                  ownStyle="brand"
                  text="Recupera tu contraseña"
                  onPress={() => this.props.changeAuthTab(tabs.RECOVER_TAB)}
                />
              }
            </View>
          </ScrollView>
        </View>
      </ModalView>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTab: getAuthTab(state),
});

const mapDispatchToProps = {
  requestLogin,
  changeAuthTab,
  requestSignUp,
  requestRecoverPassword,
  requestFacebookLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthView);
