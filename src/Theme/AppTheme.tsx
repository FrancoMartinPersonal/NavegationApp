import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

export const colores={
    primary:'#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom:5,
    },
    botonGrande:{
        width:100,
        height: 100,
        backgroundColor:'red',
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin: 10,
    },
    botonGrandeTexto:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        
    },
    avatarContainer:{
        backgroundColor:"#545a",
        alignItems:"center"
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius:50,
    },menuContainer:{
        marginVertical:20,
        marginHorizontal:30
    },
    menuContainerTexto:{
        fontSize:20,
        marginVertical:10,
        
    }

})