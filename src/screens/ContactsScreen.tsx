import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../Theme/AppTheme';
import { AuthContext } from '../context/AuthContext';

const ContactsScreen = () => {

    const {signIn,authState,logOut} = useContext(AuthContext)
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ContactsScreen</Text>
            <Text>logIn: {authState.isLoggedIn?'actived':'desactived'}</Text>
            {!authState.isLoggedIn?
            
            <Button
            title='SignIn'
            onPress={signIn}
            />:<Button
            title='LogOut'
            onPress={logOut}
            />
        }
        </View>
    )
}

export default ContactsScreen
