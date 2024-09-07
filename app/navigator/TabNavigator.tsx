import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    SettingsScreen,
    HomeScreen,
    VisitedPlaceScreen,
} from "../screens/_index";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FIcon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={{

                tabBarStyle: {
                    backgroundColor: "#222",
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                },
                tabBarInactiveTintColor: "#fff",
                tabBarActiveTintColor: "pink",
                headerTitleAlign: "center",
                headerShown: false,
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="home" size={size} color="#fff" />
                    ),

                }}
            />
            <Tab.Screen
                name="VisitedPlace"
                component={VisitedPlaceScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="location-arrow" size={size} color="#fff" />
                    ),
                    tabBarBadge: 5,
                    tabBarLabel:"Visited Place"
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FIcon name="gears" size={size} color="#fff" />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default TabNavigator;
