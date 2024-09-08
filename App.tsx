import { StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/navigator/StackNaviagtor";
import { store } from "./app/redux/store";
import TabNavigator from "./app/navigator/TabNavigator";
import { StyleSheet } from "react-native";
import { colors } from "./app/colors";


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.mainContainer}>
        <NavigationContainer>
          <StatusBar hidden={false} />
          <StackNavigator />
        </NavigationContainer>
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1,backgroundColor:colors.Neutrals[100] }
})