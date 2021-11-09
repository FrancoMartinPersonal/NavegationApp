import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../Theme/AppTheme'

interface Props extends StackScreenProps<any,any>{}
const pagina3Screen = ({navigation}:Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title} >pagina3Screen</Text>
            <Button
            title="Regresar"
            onPress={()=>navigation.pop()}
            />
            <Button
            title="Ir al Página 1"
            onPress={()=>navigation.popToTop()}
            />
        </View>
    )
}

export default pagina3Screen
