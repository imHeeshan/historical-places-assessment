import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    SettingsScreen,
    HomeScreen,
    VisitedPlaceScreen,
} from "../screens/_index";
import { HomeAlt, MapsArrowDiagonal, Settings } from "iconoir-react-native";
import { colors } from "../colors";
import { useSelector } from "react-redux";
import { allVisitedPlaces } from "../redux/features/place/places/placeSlice";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    const allVisited = useSelector(allVisitedPlaces)
    return (

        <Tab.Navigator
            screenOptions={{

                tabBarStyle: {
                    backgroundColor: colors.Neutrals[100],
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,

                },
                tabBarInactiveTintColor: colors.black,
                tabBarActiveTintColor: colors.blue,
                headerTitleAlign: "center",
                headerShown: false,
                tabBarLabelStyle: {
                    paddingBottom: 5
                }
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <HomeAlt color={color} height={24} width={24} />
                    ),

                }}
            />
            <Tab.Screen
                name="VisitedPlace"
                component={VisitedPlaceScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MapsArrowDiagonal
                            color={color} height={24} width={24} />
                    ),
                    tabBarBadge: allVisited.length > 0 ? allVisited.length : null,
                    tabBarLabel: "Visited Place",
                    headerShown:true,
                    headerTitle:'Visted Places'
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Settings color={color} height={24} width={24} />
                    ),
                }}
            />

        </Tab.Navigator>


    );
};

export default TabNavigator;
