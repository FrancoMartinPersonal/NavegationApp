import React from 'react'
import { View, Text } from 'react-native'
import IconAwe from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
    
    const myIconAwe = <IconAwe name="rocket" size={30} color="#900" />;
    const myIconIon = <TouchableIcon iconName="Rocket"/>
    React.useEffect(()=>{

        console.log('Tab1Screen effect')
    },[])
    
    return (
        <View>
             <TouchableIcon iconName="rocket"/>
            <TouchableIcon iconName="bicycle-outline"/>
        </View>
    )
}

export default Tab1Screen

