import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator";
import Icon from 'react-native-vector-icons/Ionicons'
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <Icon
            name="menu-outline"
            size={26}
            color="black"
            style={{ marginLeft: 15 }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      })}>
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator