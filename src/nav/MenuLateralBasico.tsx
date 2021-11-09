import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import React from 'react';
import { useWindowDimensions } from 'react-native';
const Drawer = createDrawerNavigator();

export  const  MenuLateralBasico = () => {
     const dimensions = useWindowDimensions()

  return (
    <Drawer.Navigator
    screenOptions={{
       
        drawerType:( dimensions.width <= 500 ?  'front':'permanent') ,
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}