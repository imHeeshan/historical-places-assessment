import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

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