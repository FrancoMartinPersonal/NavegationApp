import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { StackNavigator } from './src/nav/StackNavigator';
import { MenuLateralBasico } from './src/nav/MenuLateralBasico';
import { MenuLateral } from './src/nav/MenuLateral';
import { Tabs } from './src/nav/Tabs';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
      <MenuLateral/>
      {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({children}:any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}