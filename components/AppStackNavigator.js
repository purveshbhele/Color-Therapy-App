import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Points from '../Screens/Points';
import ShowImages from '../Screens/showImages';


export const AppStackNavigator = createStackNavigator({
  Points : {
    screen : Points,
    navigationOptions:{
      headerShown : false
    }
  },
  ShowImages : {
    screen : ShowImages,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'Points'
  }
);


