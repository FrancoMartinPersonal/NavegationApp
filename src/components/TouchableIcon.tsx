import React, { useContext } from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import IconAwe from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props{
    iconName:string
}

const TouchableIcon = ({iconName}:Props) => {
    const {changeFavoriteIcon} = useContext(AuthContext)

    return (
        
            <TouchableOpacity
            onPress={function(){changeFavoriteIcon(iconName)}}
            >
                <Text>
            <IconIon name={iconName}

             size={80} color="#900" />
             </Text>
            </TouchableOpacity>
       
    )
}

export default TouchableIcon
