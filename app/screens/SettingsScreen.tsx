import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../utils/Dimension'
import { colors } from '../colors'

const SettingsScreen = () => {
  return (
    <View style={styles.main}>
      <Text>Settings</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  main: {
justifyContent:'center',alignItems:'center',flex:1
  },

})