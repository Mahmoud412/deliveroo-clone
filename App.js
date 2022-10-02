import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import BasketScreen from "./src/screens/BasketScreen";
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import AuthScreen from "./src/screens/AuthScreen";
import AuthNavigation from "./AuthNavigation";

export default function App() {
  return <AuthNavigation />;
}
