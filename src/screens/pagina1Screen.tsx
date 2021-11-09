import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { colores, styles } from '../Theme/AppTheme'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';
import IconIon from 'react-native-vector-icons/Ionicons';
// interface Props extends StackScreenProps<any,any>{}
interface Props extends DrawerScreenProps<any,any>{}

const pagina1Screen = ({navigation}: Props) => {
    React.useEffect(()=>{
        navigation.setOptions({
          
            headerLeft:() => (
                <TouchableOpacity
                
              
                onPress={() =>{navigation.toggleDrawer()}}>
                    <Text>
                    <IconIon name="menu" size={40} color={colores.primary} />
                    </Text>
                </TouchableOpacity>
               
            )
        })
    },[])
    console.log(navigation)
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>pagina1Screen</Text>
            <Button
            title="ir a página 2"
            onPress={()=>navigation.navigate('pagina2Screen')}>

            </Button>
            <Button
            title="ir a persona"
            onPress={()=>navigation.navigate('personaScreen')}>

            </Button>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity
            style={{...styles.botonGrande,
                backgroundColor:'#5856D6'
            }}
            onPress={() => navigation.navigate('personaScreen',{
                id:1,
                nombre:'Pedro'
            })}>
                <Text>
        <IconIon name="man-outline" size={20} color="white" />;
                 </Text>
            <Text style={styles.botonGrandeTexto}>
                Pedro
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{...styles.botonGrande,
                backgroundColor:'#FF9427'
            }}
            onPress={() => navigation.navigate('personaScreen',{
                id:2,
                nombre:'Susanno'
            })}>
                <Text>
        <IconIon name="woman-outline" size={20} color="white" />;
                 </Text>
            <Text style={styles.botonGrandeTexto}>
            Susanno
            </Text>
            </TouchableOpacity>
 
            </View>
        </View>
    )
}

export default pagina1Screen
