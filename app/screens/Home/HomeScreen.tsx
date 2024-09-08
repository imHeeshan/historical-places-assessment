import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '../../components/MainHeader'
import { useSelector } from 'react-redux'
import { allPlaces, SelecetedPlaceDetails } from '../../redux/features/place/places/placeSlice'
import RenderList from './RenderList'
import { colors } from '../../colors'
import Heading from '../../components/Heading'

const HomeScreen = ({ navigation }) => {
  const places = useSelector(allPlaces)
  const [randomId, setRandomId] = useState(1);
  const place = useSelector((state) => SelecetedPlaceDetails(state, Number(randomId)))
  const handleRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length) + 1;
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
    <View style={{flex:1}}>
      <MainHeader />
      <ScrollView  showsVerticalScrollIndicator={false}>
        <Heading headingTitle={'All Historical Places'} />
        <FlatList
          data={places}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => <RenderList item={item} key={index} index={index} />}
        />
        <View>
          <Heading headingTitle={'Suggestion Place'} rightComponent={rightBtn} />
          <RenderList item={place} index={randomId} />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

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