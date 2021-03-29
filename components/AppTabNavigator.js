import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import HealthScreen from '../screens/HealthScreen';



export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: HomeScreen,
   /* navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    }*/
  },
  HealthScreen: {
    screen: HealthScreen,
   /* navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }*/
  }
});