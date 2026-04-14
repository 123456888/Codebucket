import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from "./DrawerNavigator";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MainApp" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default StackNavigator