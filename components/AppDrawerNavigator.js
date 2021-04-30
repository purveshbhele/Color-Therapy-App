import * as React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import AppInfo from '../Screens/AppInfo';

export const AppDrawerNavigator =createDrawerNavigator({
  Home:{
    screen:AppTabNavigator,
  },
  AppInfo:{
    screen:AppInfo
  }
})