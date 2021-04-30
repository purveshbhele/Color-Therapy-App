import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'

export default function App(){
  return(
    <AppContainer/>
  )
}
const switchNavigator=createSwitchNavigator({
  Drawer:{screen:AppDrawerNavigator}
})


const AppContainer=createAppContainer(switchNavigator);