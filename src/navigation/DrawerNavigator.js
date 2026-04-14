import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Dashboard" component={TabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator