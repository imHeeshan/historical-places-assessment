import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { allVisitedPlaces } from '../../redux/features/places/placeSlice'
import RenderList from './RenderList'
import Header from '../../components/Header'

const VisitedPlaceScreen = ({ navigation }) => {

  const allVisited = useSelector(allVisitedPlaces)



  if (allVisited.length < 1) {
    return (<View style={styles.empty}>
      <Text>Visted List Empty</Text>
    </View>)
  }
  return (
    <View>
      <FlatList data={allVisited}
        renderItem={({ item }) => <RenderList item={item} />} />
    </View>
  )
}

export default VisitedPlaceScreen

const styles = StyleSheet.create({
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})
