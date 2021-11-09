import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../Theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack';
import pagina1Screen from './pagina1Screen';
import { RootStackParams } from '../nav/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//     id:number,
//     nombre:string
// }

interface Props extends StackScreenProps<RootStackParams,'personaScreen'>{};

const PersonaScreen = ({route,navigation}:Props) => {
   // const params = route.params as RouterParams;
   const {changeUsername} = React.useContext(AuthContext)
    const params = route.params ;
    //console.log(JSON.stringify(props, null, 3))
    React.useEffect(() => {
        
        navigation.setOptions({
            title:params.nombre
        })
    }, [])
    React.useEffect(()=> {
        changeUsername(params.nombre)
    },[])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
            {
            JSON.stringify(params,null,3)
            }
            </Text>
        </View>
    )
}

export default PersonaScreen
