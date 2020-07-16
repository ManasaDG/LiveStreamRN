import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

const BottomTabNavigator = createBottomTabNavigator({
  Watch_Videos: {screen:ScreenOne},
  Upload_Live: {screen:ScreenTwo}
});

export default BottomTabNavigator;