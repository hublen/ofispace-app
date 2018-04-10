import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/redux/reducers';
import sagas from './src/redux/sagas';

import HomeView from './src/views/Home';
import ProfileView from './src/views/Profile';
import SearchView from './src/views/Search';
import HistoryView from './src/views/History';
import TourView from './src/views/Tour';
import colors from './src/constants/colors';

class App extends Component {
  componentDidMount() {

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
          search: { screen: SearchView },
          history: { screen: HistoryView },
          profile: { screen: ProfileView },
        }, {
          swipeEnabled: false,
          lazy: true,
          animationEnabled: true,
          tabBarOptions: {
            style: { backgroundColor: 'white' },
            labelStyle: { fontSize: 12 },
            indicatorStyle: { backgroundColor: colors.brand },
            activeTintColor: colors.brand,
            inactiveTintColor: colors.regularTextColor,
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

export default App;
