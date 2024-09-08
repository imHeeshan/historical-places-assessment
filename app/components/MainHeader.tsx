import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Bell } from 'iconoir-react-native'

const MainHeader = () => {
    return (
        <View style={styles.header_Container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Bell height={24} width={24} color={'#000'} />
        </View>
    )
}

export default MainHeader

const styles = StyleSheet.create({
    header_Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 2,
    },
    logo: {
        width: 40,
        height: 40
    },

})