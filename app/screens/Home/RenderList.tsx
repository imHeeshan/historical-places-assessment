import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../colors';
import { SCREEN_WIDTH } from '../../utils/Dimension';
import { UseText } from '../../customHooks/index';
import { fontFamilies } from '../../constants';
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';
import { handleVisited, selectPlaceById } from '../../redux/features/places/placeSlice';
import { useDispatch, useSelector } from 'react-redux';



const PlaceDetails = ({ item }) => {
    const { name = "", description = "", isVisited = false, tags = "" } = item || {}
    return (
        <View style={styles.place_details}>
            <UseText
                text={name}
                fontStyle={fontFamilies.subHeadlineEm}
                customStyle={{ color: colors.Neutrals[700], marginRight: 4 }}
            />
            <View style={styles.place_description}>
                <UseText
                    text={description}
                    fontStyle={fontFamilies.subHeadlineRe}
                    customStyle={{ color: colors.Neutrals[600], marginRight: 4 }}
                />
                <UseText
                    text={`${isVisited ? "Visted" : "Not visit"}`}
                    fontStyle={fontFamilies.subHeadlineRe}
                    customStyle={{ color: colors.Neutrals[600], marginRight: 4 }}
                />
            </View>
            <UseText
                text={tags}
                fontStyle={fontFamilies.subHeadlineRe}
                customStyle={{
                    color: colors.Yellow[300],
                }}

            />
        </View>
    )
}

const RenderList = ({ placeId }) => {
    const navigation = useNavigation()
    const place = useSelector(state => selectPlaceById(state, placeId))

    const { image = '', isVisited = false, id = null } = place || {}
    const dispatch = useDispatch()
    return (
        // <Text>test</Text>
        <View style={{ position: 'relative', }}>
            <TouchableOpacity style={[styles.main,]}
                activeOpacity={.9}
                key={placeId}
                onPress={() => navigation.navigate('Details', { place_id: id })}
            >
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
                <PlaceDetails item={place} />
            </TouchableOpacity>
        </View>
    )
}
export default RenderList

const styles = StyleSheet.create({
    main: {
        marginVertical: 8,
        justifyContent: 'center',
        backgroundColor: colors.Neutrals[50],

    },
    post_img: {
        height: 200,
        width: SCREEN_WIDTH,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        objectFit: 'cover',
    },
    place_details: {
        marginHorizontal: 16,
        marginVertical: 12,
    },
    place_description: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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