import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPlaceById, selectPlaceIds } from '../redux/features/places/placeSlice'
import { colors } from '../colors'
import RenderList from '../screens/Home/RenderList'
import Heading from './Heading'

const RandomPlace = ({ }) => {
  const [randomId, setRandomId] = useState(1);
  const placeIds = useSelector(selectPlaceIds)
  const handleRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * placeIds.length) + 1;
    setRandomId(randomIndex)
  };
  const rightBtn = () => {
    return (

      <TouchableOpacity style={styles.offer_btn} onPress={handleRandomPlace} activeOpacity={.8}>
        <Text style={styles.btn_txt}>Get Offer place </Text>
      </TouchableOpacity>
    )
  }
  return (
    <View>
      <Heading headingTitle={'Suggestion Place'} rightComponent={rightBtn} />
      <RenderList placeId={randomId} />
    </View>
  )
}

export default RandomPlace
const styles = StyleSheet.create({

  offer_btn: {
    backgroundColor: colors.blackOpacity,
    padding: 8,
    borderRadius: 10

  },
  btn_txt: {
    color: colors.white
  }
})