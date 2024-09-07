import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/navigator/StackNaviagtor";
import { store } from "./app/redux/store";
import TabNavigator from "./app/navigator/TabNavigator";


export default function App() {
  return (
    
      <NavigationContainer>
        <StatusBar hidden={false} />
        <StackNavigator />
      </NavigationContainer>
 
  );
}
