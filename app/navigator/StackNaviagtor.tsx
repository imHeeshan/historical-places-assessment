import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {

  DetailsScreen,
  HomeScreen,

} from "../screens/_index";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "transpernt" },  headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
       
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
