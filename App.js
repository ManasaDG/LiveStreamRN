/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import awsConfig from './src/aws-exports';
import Amplify from 'aws-amplify';
import AppNavigator from './navigation/AppNavigator'
Amplify.configure(awsConfig);

import { withAuthenticator } from 'aws-amplify-react-native';

function App(){
  return (
    <AppNavigator /> 
  );
}
export default withAuthenticator(App);


