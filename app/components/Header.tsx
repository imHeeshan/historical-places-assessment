import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
    return (
        <View style={styles.header}>
            <Icon color={'#000'} name='left' size={23} />
            <Text>Name</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',gap:10
    }
})