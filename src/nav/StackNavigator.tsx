import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import pagina1Screen from '../screens/pagina1Screen';
import pagina2Screen from '../screens/pagina2Screen';
import pagina3Screen from '../screens/pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';

export type RootStackParams = {
  pagina1Screen:undefined,
  pagina2Screen:undefined,
  pagina3Screen:undefined,
  personaScreen:{id:number,nombre:string},
}

const Stack = createStackNavigator<RootStackParams>();

export  const StackNavigator= () =>  {
  return (
    <Stack.Navigator
    //initialRouteName="pagina2Screen"
    screenOptions={{
      headerStyle:{
        elevation:0,
        shadowColor:'transparent'
      },
      //headerShown:false,
      cardStyle:{
        backgroundColor:"white"
      }
    }}
    >
      <Stack.Screen name="pagina1Screen"
      options={{title:" Página 1"}}
      component={pagina1Screen} />
      <Stack.Screen name="pagina2Screen"
      options={{title:" Página 2"}}
      component={pagina2Screen} />
      <Stack.Screen name="pagina3Screen"
      options={{title:" Página 3"}}
      component={pagina3Screen} />
      <Stack.Screen name="personaScreen"
      component={PersonaScreen} />

    </Stack.Navigator>
  );
}