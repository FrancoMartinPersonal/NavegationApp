import React from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, styles } from '../Theme/AppTheme';
import { useRoute } from '@react-navigation/core';
import { Text } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

interface Props extends MaterialTopTabScreenProps<any,any>{}
export const TopTapNavigator =({}:Props) => {
    
    const {top} = useSafeAreaInsets()
    const route = useRoute();
    
  return (
    <Tab.Navigator
    style={{
        paddingTop:top
    }}
    sceneContainerStyle={{
        backgroundColor:'white'
    }}
    screenOptions={({route})=>({
        headerShown: false,
       tabBarActiveTintColor:colores.primary,
      tabBarStyle:{
        borderTopColor:colores.primary
      
      },
     tabBarIcon: ({color})=>{
       
      let myIconIon = <IconIon name="chatbubbles-outline" size={30} color={colores.primary} />;
      let iconName :Element =myIconIon;
      
      switch(route.name){
        case'Chat':
        iconName=myIconIon;
        break;
        case'Contacts':
         myIconIon = <IconIon name="people-circle-outline" size={30} color={colores.primary} />;
        iconName=myIconIon;
        break;
        case'Albums':
         myIconIon = <IconIon name="play-circle-outline" size={30} color={colores.primary} />;
         iconName=myIconIon;
         break;
       }
        return (
          <Text style={{color}}>
           {iconName}
          </Text>
        )
      }
    
      
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}