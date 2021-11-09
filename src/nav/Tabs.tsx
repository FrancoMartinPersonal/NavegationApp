import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../Theme/AppTheme';
import { Text } from 'react-native';
import {  useRoute } from '@react-navigation/core';
import { TopTapNavigator } from './TopTapNavigator';
import IconIon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor:'white'
    }}
   
    screenOptions={({route})=>({
      headerShown: false,
     tabBarActiveTintColor:colores.primary,
    tabBarStyle:{
      borderTopColor:colores.primary
    
    },
    tabBarLabelStyle:{
      fontSize:20
    },  tabBarIcon: (props)=>{
     
     let myIconIon = <IconIon name="umbrella-outline" size={30} color={colores.primary} />;
     let iconName :Element = '';
     
     switch(route.name){
       case'Tab1Screen':
       iconName=myIconIon;
       break;
       case'TopTapNavigator':
       myIconIon = <IconIon name="documents-outline" size={20} color={colores.primary} />;
       iconName=myIconIon;
       break;
       case'StackNavigator':
       myIconIon = <IconIon name="albums-outline" size={30} color={colores.primary} />;
       iconName=myIconIon;
       break;
     }
      return (
        <Text>
         {iconName}
        </Text>
      )
    }
  
    
    })}
    
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title:'tab 1', tabBarIcon: (p)=> <Text style={{color:p.color}}>1</Text>}}  component={Tab1Screen} /> */}
      <Tab.Screen name="Tab1Screen" options={{title:'tab 1'}}  component={Tab1Screen} />
      <Tab.Screen name="TopTapNavigator" options={{title:'Top Tap'}} component={TopTapNavigator} />
      <Tab.Screen name="StackNavigator" options={{title:'stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}