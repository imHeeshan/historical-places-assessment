import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { UseText } from '../customHooks'
import { fontFamilies } from '../constants'
import { colors } from '../colors'
import { useDispatch, useSelector } from 'react-redux'
import { handleVisited, suggestions } from '../redux/features/place/places/placeSlice'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const HorizontalList = ({ item, index }) => {
  const { image, name, isVisited, id } = item
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <TouchableOpacity activeOpacity={.8}
      onPress={() => navigation.navigate('Details', { place_id: id })} style={styles.main}>
      <Image source={{ uri: `${image}` }}
        style={styles.post_img}
      />
      <TouchableOpacity
        style={[styles.visted_btn, { backgroundColor: isVisited ? colors.whiteOpacity : colors.whiteOpacity }]}
        onPress={() => dispatch(handleVisited(id))}
      >
        <Icon name={`${isVisited ? 'location-sharp' : 'location-outline'}`}
          size={18} color={`${isVisited ? colors.peach : colors.black}`}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const SuggestionPlaces = ({selectedId}) => {
  const suggestion = useSelector((state) => suggestions(state, Number(selectedId)))
console.log(selectedId);

  return (
    <View style={styles.suggetion_main}>
      <UseText
        text={"Suggestion Places"}
        fontStyle={fontFamilies.headlineEm}
        customStyle={{ color: colors.Neutrals[600], marginRight: 4 }}
      />
      <FlatList
        data={suggestion}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <HorizontalList item={item} key={index} index={index} />
        }
        horizontal
        style={styles.render_list}
      />
    </View>
  )
}

export default SuggestionPlaces

const styles = StyleSheet.create({
  suggetion_main: {
    marginVertical: 12,
    paddingHorizontal: 12
  },
  render_list: { marginVertical: 10 },
  main: {
    paddingRight: 8
  },
  post_img: {
    width: 150,
    height: 150, borderRadius: 8
  },
  visted_btn: {
    position: 'absolute',
    top: 12,
    right: 12,

    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  }
})