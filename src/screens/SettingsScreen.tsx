import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../Theme/AppTheme';
import IconIon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';



const SettingsScreen = () => {
    const insets = useSafeAreaInsets()

     const {authState} = React.useContext(AuthContext)

     
    return (
        <SafeAreaView style={{
            ...styles.globalMargin,
            marginTop:insets.top}}>
            <Text style={styles.title}>Settings Screen</Text>
            <Text>{JSON.stringify(authState, null,4)}</Text>
            {authState.favoriteIcon&&(
                <Text>
            <IconIon name={authState.favoriteIcon!}
            size={80} color="#900" />
            </Text>
            )}
        </SafeAreaView>
    )
}

export default SettingsScreen
