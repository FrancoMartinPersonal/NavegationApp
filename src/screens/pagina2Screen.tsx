import { useNavigation } from '@react-navigation/core'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../Theme/AppTheme'

interface Props extends StackScreenProps<any,any>{}

const pagina2Screen = ({navigation}:Props) => {
    
    React.useEffect(() => {
        navigation.setOptions({
            title:'Hola Mundo',
            headerBackTitle:'atrás'
        })
        return () => {
            
        }
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>pagina2Screen</Text>
            <Button
            title="ir a página 1"
            onPress={()=>navigation.navigate('pagina1Screen')}
            />
            <Button
            title="ir a página 3"
            onPress={()=>navigation.navigate('pagina3Screen')}
            />

           
        </View>
    )
}

export default pagina2Screen
