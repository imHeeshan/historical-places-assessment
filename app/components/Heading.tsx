import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { UseText } from '../customHooks'
import { fontFamilies } from '../constants'
import { colors } from '../colors'

const Heading = ({headingTitle,rightComponent=()=>{}}) => {
    return (
        <View style={styles.heading}>
            <UseText
                text={headingTitle}
                fontStyle={fontFamilies.headlineEm}
                customStyle={{ color: colors.Neutrals[600] }}
            />
            {rightComponent()}
        </View>
    )
}

export default Heading

const styles = StyleSheet.create({
    heading: {
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
      },
      offer_btn: {
        backgroundColor: colors.blackOpacity,
        padding: 8,
        borderRadius: 10
    
      },
      btn_txt: {
        color: colors.white
      }
})