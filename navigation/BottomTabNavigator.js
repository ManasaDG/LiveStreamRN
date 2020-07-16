import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';
import ScreenFour from '../screens/ScreenFour';

const BottomTabNavigator = createBottomTabNavigator({
  Watch_Videos: {screen:ScreenOne},
  Go_Live: {screen:ScreenTwo},
  Live_Streams: {screen:ScreenThree},
  Upload_Video: {screen:ScreenFour}
});

export default BottomTabNavigator;