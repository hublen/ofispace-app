import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/redux/reducers';
import sagas from './src/redux/sagas';

import HomeView from './src/views/Home';
import TourView from './src/views/Tour';
import colors from './src/constants/colors';

export default class App extends Component {
  componentWillMount() {

  }

  render() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;
    const sagaMiddleware = createSagaMiddleware();
    const store =
    createStore(
      reducers, {},
      composeEnhancers(applyMiddleware(sagaMiddleware, ReduxThunk)),
    );
    sagaMiddleware.run(sagas);
    const MainNavigator = TabNavigator({
      tour: { screen: TourView },
      main: {
        screen: TabNavigator({
          home: { screen: HomeView },
        }, {
          swipeEnabled: false,
          lazy: true,
          animationEnabled: true,
          tabBarOptions: {
            style: { backgroundColor: 'white' },
            labelStyle: { fontSize: 12 },
            indicatorStyle: { backgroundColor: colors.brand },
            activeTintColor: colors.brand,
            inactiveTintColor: colors.gray,
          },
        }),
      },
    }, {
      navigationOptions: {
        swipeEnabled: false,
        tabBarVisible: false,
        lazy: true,
      },
    });
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
