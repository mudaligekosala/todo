import React from 'react';
import { Navigation } from 'react-native-navigation';

import HomePage from './src/components/views/Home';

Navigation.registerComponent("todo.HomePage",() => HomePage)

Navigation.startSingleScreenApp({
  screen:{
    screen:"todo.HomePage",
    title:"Home",
    navigatorStyle:{
      navBarHidden:true
    }
  }
})