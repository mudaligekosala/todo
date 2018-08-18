import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import HomePage from './src/views/Home';

import configStore from './src/store/store';

const store = configStore();

Navigation.registerComponent(
  "todo.HomePage", () =>
  HomePage,
  store,
  Provider
)

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "todo.HomePage",
    title: "Home",
    navigatorStyle: {
      navBarHidden: true
    }
  }
})