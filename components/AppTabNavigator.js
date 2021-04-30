import * as React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppStackNavigator} from './AppStackNavigator';
import Points from '../Screens/Points';
import ColorInfo from '../Screens/ColorInfo';

export const AppTabNavigator=createBottomTabNavigator({
Points:{
  screen:AppStackNavigator,
  navigationOptions:{
    tabBarIcon:<Image source={require("../assets/6.png")} style={{width:20,height:20}}/>,
    tabBarLabel:"Points"
  }
},
ColorInfo:{
  screen:ColorInfo,
  navigationOptions:{
    tabBarIcon:<Image source={require("../assets/8.png")} style={{width:20,height:20}}/>,
    tabBarLabel:"Color Info"
  }
},

})