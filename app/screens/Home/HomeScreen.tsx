import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainHeader from '../../components/MainHeader'
import { useDispatch, useSelector } from 'react-redux'
import { allPlaces, SelecetedPlaceDetails, selectPlaceIds, setPlaces } from '../../redux/features/places/placeSlice'
import RenderList from './RenderList'
import { colors } from '../../colors'
import Heading from '../../components/Heading'
import Test from '../../components/RandomPlace'
import RandomPlace from '../../components/RandomPlace'

const HomeScreen = ({ }) => {
  const [randomId, setRandomId] = useState(1);
  const placeIds = useSelector(selectPlaceIds)
  const handleRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * placeIds.length) + 1;
    setRandomId(randomIndex)
  };

  const initialPlaces = [
    {
      id: 1,
      name: "Place 1",
      image:
        "https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Historical Places 1",
      isVisited: false,
      tags: '#MostVisited #Cool_place #Historical',
      rating: '4.3',
      count: 1
    },
    {
      id: 2,
      name: "Place 2",
      image:
        "https://images.pexels.com/photos/5198285/pexels-photo-5198285.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Historical Places 2",
      isVisited: false,
      tags: '#best #Cool_place #Historical',
      rating: '8.3',
      count: 1
    },
    {
      id: 3,
      name: "Place 3",
      image:
        "https://images.pexels.com/photos/4916266/pexels-photo-4916266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Historical Places 3",
      isVisited: false,
      tags: '#best #MostVisited #Cool_place ',
      rating: '4.3',
      count: 1
    },
    {
      id: 4,
      name: "Place 4",
      image:
        "https://images.pexels.com/photos/3848886/pexels-photo-3848886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Historical Places 4",
      isVisited: false,
      tags: '#best #MostVisited #Historical',
      rating: '4.3',
      count: 1
    },
    {
      id: 5,
      name: "Place 5",
      image:
        "https://images.pexels.com/photos/6243760/pexels-photo-6243760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Historical Places 5",
      isVisited: false,
      tags: '#best  #Cool_place #Historical',
      rating: '2.3',
      count: 1
    },
    {
      id: 6,
      name: "Place 6",
      image:
        "https://images.pexels.com/photos/5074422/pexels-photo-5074422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Historical Places 6",
      isVisited: false,
      tags: '#best #MostVisited ',
      rating: '4.3',
      count: 1
    },
    // Add more placeIds
  ]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPlaces(initialPlaces));
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>

      <MainHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading headingTitle={'All Historical Places'} />
        <FlatList
          data={placeIds}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <RenderList placeId={item} key={item} index={item} />}
        />
          <RandomPlace />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

