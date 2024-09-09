import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { handleVisited, selectPlaceById } from '../redux/features/places/placeSlice';
import { SCREEN_WIDTH } from '../utils/Dimension';
import { Star, StarSolid } from 'iconoir-react-native';
import { colors } from '../colors';
import { UseText } from '../customHooks';
import { fontFamilies } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import SuggestionPlaces from '../components/SuggestionPlaces';


const PlaceDetails = ({ item }) => {
  const { name, description, isVisited, tags, } = item
  return (
    <View style={styles.place_details}>
      <UseText
        text={name}
        fontStyle={fontFamilies.headlineEm}
        customStyle={{ color: colors.Neutrals[700], marginRight: 4 }}
      />
      <View style={styles.place_description}>
        <UseText
          text={description}
          fontStyle={fontFamilies.subHeadlineRe}
          customStyle={{ color: colors.Neutrals[600], marginRight: 4 }}
        />

      </View>

    </View>
  )
}

const PlaceDetailsScreen = ({ route }) => {
  const { place_id } = route.params;

  const dispatch = useDispatch()
  const place = useSelector((state) => selectPlaceById(state, Number(place_id)))

  const { image, rating, isVisited, id } = place

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <View>
        <Image source={{ uri: `${image}` }}
          style={styles.post_img}
        />
        <View style={styles.img_top_icons}>
          <View style={styles.icon}>
            <StarSolid height={15} width={15} color={colors.black} style={styles.rating} />
            <UseText text={rating} fontStyle={fontFamilies.subHeadlineRe}
              customStyle={{
                color: colors.black,
              }} />

          </View>
          <TouchableOpacity
            onPress={() => dispatch(handleVisited(id))}
            style={[styles.icon, { backgroundColor: isVisited ? colors.whiteOpacity : colors.whiteOpacity }]}
            activeOpacity={.8}
          >
            <Icon name={`${isVisited ? 'location-sharp' : 'location-outline'}`}
              size={18} color={`${isVisited ? colors.peach : colors.black}`}
            />
          </TouchableOpacity>

        </View>
        <PlaceDetails item={place} />
      </View>

      <SuggestionPlaces selectedId={place_id} />
    </ScrollView>
  )
}

export default PlaceDetailsScreen

const styles = StyleSheet.create({
  post_img: {
    width: SCREEN_WIDTH,
    height: 350,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  img_top_icons: {
    position: 'absolute',
    paddingHorizontal: 12,
    paddingVertical: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH,

  },
  icon: {

    alignItems: 'center',
    flexDirection: 'row',

    gap: 3,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: colors.whiteOpacity, borderRadius: 20,
  },
  rating: {

  }
  , place_details: {
    paddingHorizontal: 12, paddingVertical: 12
  }, place_description: {}
})