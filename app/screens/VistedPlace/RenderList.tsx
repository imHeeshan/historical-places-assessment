import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { UseText } from '../../customHooks'
import { fontFamilies } from '../../constants'
import { colors } from '../../colors'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { handleVisited } from '../../redux/features/place/places/placeSlice'
import { Bin, SendDiagonal } from 'iconoir-react-native'


const PlaceDetails = ({ item }) => {
    const { name = "", description = "", isVisited = false, id = null } = item || {}
    const dispatch = useDispatch()
    return (
        <View style={styles.place_details}>

            <View style={{}}>
                <UseText
                    text={name}
                    fontStyle={fontFamilies.subHeadlineEm}
                    customStyle={{ color: colors.Neutrals[700], marginRight: 4 }}
                />
                <UseText
                    text={description}
                    fontStyle={fontFamilies.subHeadlineRe}
                    customStyle={{ color: colors.Neutrals[600], marginRight: 4 }}
                />

            </View>
            <View style={styles.btns}>
                <TouchableOpacity
                    style={[styles.visted_btn,]}
                    onPress={() => dispatch(handleVisited(id))}
                >

                    <Bin height={24} width={24} color={colors.peach} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.visted_btn,]}
                    onPress={() => dispatch(handleVisited(id))}
                >
                    <SendDiagonal height={24} width={24} color={colors.black} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const RenderList = ({ item }) => {
    const navigation = useNavigation()
    const { image="", id=null, } = item || {}
    return (
        <TouchableOpacity style={styles.visited_main_container}
            activeOpacity={.8}
            onPress={() => navigation.navigate('Details', { place_id: id })}>
            <Image source={{ uri: `${image}` }}
                style={styles.post_img}
            />
            <PlaceDetails item={item} />
        </TouchableOpacity>
    )
}

export default RenderList

const styles = StyleSheet.create({
    visited_main_container: {
        padding: 10,
        flexDirection: 'row',
        marginVertical: 5,
        gap: 10,
        alignItems: 'center', backgroundColor: colors.white,
        marginHorizontal: 10,
        borderRadius: 10
    },
    post_img: {
        height: 80,
        width: 80,
        borderRadius: 12
    },
    place_details: {
        flexDirection: "row",
        justifyContent: 'space-between',
        flex: 1
    },
    visted_btn: {

    },
    btns: {
        justifyContent: 'space-between',
        gap: 10
    }
})