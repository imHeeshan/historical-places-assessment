import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { NavArrowLeft, SendDiagonal } from 'iconoir-react-native';
import { colors } from '../colors';

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <TouchableOpacity
                activeOpacity={.8}
                onPress={() => navigation.goBack()}
            >
                <NavArrowLeft height={32} width={32} color={colors.black} />

            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={.8}
               
            >
               <SendDiagonal height={22} width={22} color={colors.black} />

            </TouchableOpacity>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        gap: 10,
        justifyContent: 'space-between',
        marginBottom:3
    }
})